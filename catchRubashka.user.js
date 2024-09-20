// ==UserScript==
// @name         catchRubashka
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  gotta catch em all!
// @author       Steffsot
// @match        *://*.durakonline.ru/*
// @grant        none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=durakonline.ru
// @run-at document-start
// ==/UserScript==
var wsHook = {};
(function () {
    // Mutable MessageEvent.
    // Subclasses MessageEvent and makes data, origin and other MessageEvent properites mutatble.
    function MutableMessageEvent(o) {
        this.bubbles = o.bubbles || false
        this.cancelBubble = o.cancelBubble || false
        this.cancelable = o.cancelable || false
        this.currentTarget = o.currentTarget || null
        this.data = o.data || null
        this.defaultPrevented = o.defaultPrevented || false
        this.eventPhase = o.eventPhase || 0
        this.lastEventId = o.lastEventId || ''
        this.origin = o.origin || ''
        this.path = o.path || new Array(0)
        this.ports = o.parts || new Array(0)
        this.returnValue = o.returnValue || true
        this.source = o.source || null
        this.srcElement = o.srcElement || null
        this.target = o.target || null
        this.timeStamp = o.timeStamp || null
        this.type = o.type || 'message'
        this.__proto__ = o.__proto__ || MessageEvent.__proto__
    }

    var before = wsHook.before = function (data, url, wsObject) {
        return data
    }
    var after = wsHook.after = function (e, url, wsObject) {
        return e
    }
    var modifyUrl = wsHook.modifyUrl = function (url) {
        return url
    }
    wsHook.resetHooks = function () {
        wsHook.before = before
        wsHook.after = after
        wsHook.modifyUrl = modifyUrl
    }

    var _WS = WebSocket
    WebSocket = function (url, protocols) {
        var WSObject
        url = wsHook.modifyUrl(url) || url
        this.url = url
        this.protocols = protocols
        if (!this.protocols) { WSObject = new _WS(url) } else { WSObject = new _WS(url, protocols) }

        var _send = WSObject.send
        WSObject.send = function (data) {
            arguments[0] = wsHook.before(data, WSObject.url, WSObject) || data
            _send.apply(this, arguments)
        }

        // Events needs to be proxied and bubbled down.
        WSObject._addEventListener = WSObject.addEventListener
        WSObject.addEventListener = function () {
            var eventThis = this
            // if eventName is 'message'
            if (arguments[0] === 'message') {
                arguments[1] = (function (userFunc) {
                    return function instrumentAddEventListener() {
                        arguments[0] = wsHook.after(new MutableMessageEvent(arguments[0]), WSObject.url, WSObject)
                        if (arguments[0] === null) return
                        userFunc.apply(eventThis, arguments)
                    }
                })(arguments[1])
            }
            return WSObject._addEventListener.apply(this, arguments)
        }

        Object.defineProperty(WSObject, 'onmessage', {
            'set': function () {
                var eventThis = this
                var userFunc = arguments[0]
                var onMessageHandler = function () {
                    arguments[0] = wsHook.after(new MutableMessageEvent(arguments[0]), WSObject.url, WSObject)
                    if (arguments[0] === null) return
                    userFunc.apply(eventThis, arguments)
                }
                WSObject._addEventListener.apply(this, ['message', onMessageHandler, false])
            }
        })

        return WSObject
    }
    WebSocket.CONNECTING = _WS.CONNECTING;
    WebSocket.OPEN = _WS.OPEN;
    WebSocket.CLOSING = _WS.CLOSING;
    WebSocket.CLOSED = _WS.CLOSED;
})();



(function () {
    let caught = false;
    let id = 0;
    let infoDiv;
    let obnovas = 0;
    //const notification = new Audio('https://www.mobilesringtones.com/static/p/ringtones/2018/02/01/16451/16451.mp3?title=16451_download_note_iphone_notification_ringtone_apple_sms_ringtones.mp3');
    window.addEventListener("load", () => {
        window.onerror = null;

        infoDiv = document.createElement("div");
        infoDiv.style.position = "absolute";
        infoDiv.style.top = "0px";
        infoDiv.style.right = "0px";
        document.body.appendChild(infoDiv);
        infoDiv.innerText = `Обновлении магазина: ${obnovas}
        Рубашка ${caught ? "" : "не"} поймана`;
    });

    wsHook.after = function (messageEvent, url, wsObject) {
        const ws = wsObject;
        let packets = messageEvent.data.split("\x1E");
        packets.pop();
        for (const packet of packets) {
            let data = JSON.parse(packet);
            switch (data.target) {
                case "updateUserData": {
                    id = data.arguments[0].Id;
                    break;
                }
                case "FillShopTab": {
                    if (caught) {
                        infoDiv.innerText = `Обновлении магазина: ${obnovas}
                            Рубашка возможно поймана`;
                        break;
                    }
                    const shopItems = data.arguments[0];
                    //console.log(shopItems);
                    for (const shopItem of shopItems) {
                        if (shopItem.Type == 2 && (shopItem.price_joker == 1200 || shopItem.price_joker == 1400) && id == 5000000000096247) {
                            const packetToSend = {
                                arguments: [shopItem.Id],
                                invocationId: "10",
                                target: "buyTovar",
                                type: 1
                            }
                            ws.send(JSON.stringify(packetToSend) + "");
                            caught = true;
                        }
                    }
                    if (!caught) {
                        setTimeout(() => {
                            const packetToSend = {
                                "arguments": [
                                    "ShopGenericTab"
                                ],
                                "invocationId": "10",
                                "target": "loadShop",
                                "type": 1
                            }
                            ws.send(JSON.stringify(packetToSend) + "");
                            obnovas++;
                            infoDiv.innerText = `Обновлении магазина: ${obnovas}
                            Рубашка ${caught ? "" : "не"} поймана`;
                        }, 1e3);
                        //console.log("No rubashka");
                    }
                    break;
                }
            }
        }
        return messageEvent;
    }
})();
