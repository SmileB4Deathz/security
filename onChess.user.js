// ==UserScript==
// @name         На шахматах dev verison
// @namespace    http://tampermonkey.net/
// @version      2.0
// @run-at       document-end
// @description  vk.com/steffsot
// @author       Steffsot
// @match        https://youchess.ru:3000/*
// @match        https://lichess.org/paste?onChess
// @icon         https://alexsave.com:3000/assets/men.png
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_addScript
// @resource     JQ_UI https://raw.githubusercontent.com/SmileB4Deathz/security/main/ju.js
// @resource     IMPORTED_CSS https://raw.githubusercontent.com/SmileB4Deathz/security/main/jqui.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    const jq_ui = GM_getResourceText("JQ_UI");
    const script = document.createElement("script");
    script.textContent = jq_ui;
    document.body.appendChild(script);


    function sanitize(st) {
        let sanitized = st.replace(/eval\(.*\)/gm, "console.log('avoided script infection');");
        if (sanitized !== st)
            console.log("infected string: " + st);
        return sanitized;
    }


    //onChess
    if (window.location.href.indexOf("youchess") > -1) {
        var my_css = GM_getResourceText("IMPORTED_CSS");
        //console.log(jq_ui);
        //eval(jq_ui);

        //vars
        var figSpeed = GM_getValue("speedValue", 1);
        var hideBorder = GM_getValue("hbValue", false);
        var defaultFigs = GM_getValue("dfValue", false);
        var autoPromote = GM_getValue("apromValue", false);
        var lichessBoard = GM_getValue("lichboardValue", false);
        var lichessPieces = GM_getValue("lichPiecesValue", false);
        var declineDraw = GM_getValue("declineDrawValue", false);
        var bypassCensor = GM_getValue("bypassCensorValue", false);
        var slivMenu = GM_getValue("slivMenuValue", false);
        var avaLink = GM_getValue("avaLink", "");
        var userTint = 0;
        var oldAnim, oldGetInfoGameResp, oldSpectatorGameResp, oldAddMes, oldDiv, oldPic, oldGame, oldAddWindClan, oldPreloadImages, oldDraw, slvm, win10fix, checkLoad, analysisButton;
        //horvig win10 fix
        win10fix = true;
        var letterMap = {
            "я": "ᴙ",
            "и": "ᴎ",
            "у": "𝗒",
            "а": "𝖺",
            "о": "ο",
            "е": "𝚎",
            "л": "ᴫ"
        };

        //main
        oldPreloadImages = preloadImages;
        hookPreloadImages(); //loads before chat
        check();
        //const checkLoad = setInterval(myTimer, 1000);
        function myTimer() {
            chatDiv = $(".chat:first").parent()[0];
            if (chatDiv != undefined) {
                oldHookVars();
                chatFix();
                clearInterval(checkLoad); //stops checking only after the listeners are loaded
                showWhenBlocked();
                changeAvatar(avaLink);
                hookPic();
                GM_addStyle(my_css);
                //check();
                //hookGame();
                hookPgn();
                _addUserInfo();
                hookAddMes(0);
                hookspectatorAnalysis();
                hookAnim((10 - figSpeed) / 10);
                hookDiv();
                hookAddWindClan();
                hookDraw();
                hookSafeWindow();
                settingMenu();
                lagFix();
                addChatFunc();
                if (slivMenu) slvm = new menuSliv();
                optimization();
                removeNoselect();
                //better chat bypass
                isEmpty = function() {return false}
            }
        }

        //functions
        function oldHookVars() {
            oldAddMes = chat.addMes;
            oldAnim = jQuery.fn.animate;
            oldGetInfoGameResp = socket.listeners("getInfoGameResp")[0];
            oldSpectatorGameResp = socket.listeners("addSpectatorGameResp")[0];
            oldDiv = Div;
            oldPic = Pic;
            oldGame = Game;
            oldAddWindClan = addWindClan;
            oldDraw = socket.listeners("draw?")[0];
        }


        function hookChat() {
            temp = Chat.toString();
            let match = new RegExp(/this.addMesDom=.*?{/gm);
            let replace = `$& if(i.idUser===-1){i.mes = window.sanitize(i.mes)}`;
            temp = temp.replace(match, replace);
            Chat = new Function(temp.substring(temp.indexOf('{') + 1, temp.lastIndexOf('}')));
            console.log('Hooked Chat');
        }

        //color chat. -2 full, 0 none (-1 half, 1+ number of letters) not implemented
        function hookAddMes(appeal) {
            if (appeal != 0) {
                chat.addMes = function (e, i, t) {
                    if (i == true) {
                        e.mes = bypassCensor ? chatBypass(e.mes) : e.mes;
                        e.mes = containsMat(e.mes);
                        e.tint = userTint;
                        //if (e.appealLen == 0){
                        switch (appeal) {
                            case -2:
                                e.appealLen = e.mes.length;
                                break;
                            case -1:
                                e.appealLen = e.mes.length / 2;
                                break;
                            default:
                                e.appealLen = appeal;
                        }
                        //}
                    }
                    oldAddMes.apply(this, arguments);
                }
            }
            else {
                chat.addMes = function (e, i, t) {
                    if (i == true) {
                        e.tint = userTint;
                        e.mes = bypassCensor ? chatBypass(e.mes) : e.mes;
                        e.mes = containsMat(e.mes);
                    }
                    oldAddMes.apply(this, arguments);
                }
            }
        }

        function hookPgn() {
            socket.listeners("getPgnResp")[0] = function (e, t) {
                var pgn = "";
                pgn += e;
                removeWaitingPod();
                window.open("https://lichess.org/paste?onChess", "_blank");
                GM_setValue("PGN", pgn);
            }
        }

        function removeNoselect() {
            const stylesheet = document.styleSheets[0];
            let elementRules;

            // looping through all its rules and getting your rule
            for (let i = 0; i < stylesheet.cssRules.length; i++) {
                if (stylesheet.cssRules[i].selectorText === '.noselect') {
                    elementRules = stylesheet.cssRules[i];
                }
            }
            elementRules.style.removeProperty('user-select')
        }

        function hookAnim(speed) {
            jQuery.fn.animate = function (t, e, n, r) {
                if (n == "swing")
                    e *= figSpeed == 10 ? 0 : speed;
                oldAnim.apply(this, arguments);
            }
        }

        //hide borders
        function hookDiv() {
            Div = function (t) {
                if (hideBorder) {
                    if (t.border == "solid 3px rgba(142,111,27,0.8)") {
                        t.border = "";
                        t.className = "kletka";
                    }
                }
                oldDiv.apply(this, arguments);
            }

        }

        //default figs

        /*        function hookPic(){
            Pic = function(e){
                if(defaultFigs){
                    if (e.src.includes("assets/fig/kit")){
                        e.src = e.src.replace(/assets\/fig\/kit\d\/[^\/]*//*, "assets/fig/kit1/def");
}
}
if(lichessBoard){
if (e.src == "board"){
return;
}
}
try{
oldPic.apply(this, arguments);
}
catch(error){
console.log("caught error", error);
}
}
}
*/


        function hookPic() {
            let failedImgCache = [];
            const defPic = "assets/camera_50.png";
            Pic = function (e) {
                if (failedImgCache.includes(e.src)) {
                    //console.log(failedImgCache);
                    e.src = defPic;
                }

                if (defaultFigs) {
                    if (e.src.includes("assets/fig/kit")) {
                        e.src = e.src.replace(/assets\/fig\/kit\d\/[^\/]*/, "assets/fig/kit1/def");
                    }
                }
                if (lichessBoard) {
                    if (e.src == "board") {
                        return;
                    }
                }

                var i = this;
                e.x || (e.x = 0),
                    e.y || (e.y = 0);
                var n, o = !1;
                images && images[e.src] ? n = this.img = images[e.src].cloneNode() : (n = this.img = document.createElement("img")).src = e.src,
                    this.img = n,
                    !e.width && 0 != e.width || (n.width = e.width),
                    !e.height && 0 != e.height || (n.height = e.height),
                    e.willChange && (n.style.willChange = e.willChange),
                    n.className = "noselect",
                    e.title && (n.title = e.title),
                    e.className ? n.className = e.className + " noselect" : n.className = "noselect",
                    n.style.position = e.position || "absolute",
                    n.style.display = "none",
                    e.borderRadius && (n.style.borderRadius = e.borderRadius + "px"),
                    e.border && (n.style.border = e.border),
                    e.cursor && (n.style.cursor = e.cursor),
                    e.pointerEvents && (n.style.pointerEvents = e.pointerEvents),
                    e.opacity && (n.style.opacity = e.opacity),
                    e.zIndex && (n.style.zIndex = e.zIndex),
                    e.boxShadow && (n.style.boxShadow = e.boxShadow),
                    e.props && (n.props = e.props);
                e.temp;
                var s = this.x = e.x
                    , l = this.y = e.y
                    , r = e.x
                    , a = e.y
                    , c = !1;
                n.ondragstart = function () {
                    return !1
                }
                    ,
                    n.onload = function () {
                        var t = !1;
                        n.parentNode && "none" == n.parentNode.style.display && (t = !0,
                            e.toDiv.style.display = "block"),
                            c || (n.style.display = "block"),
                            e.scale && (n.originalWidth || (n.originalWidth = n.offsetWidth || n.width),
                                n.originalHeight || (n.originalHeight = n.offsetHeight || n.height),
                                n.width = n.originalWidth * e.scale,
                                n.height = n.originalHeight * e.scale,
                                e.scaleY && (n.height *= e.scaleY)),
                            .5 == e.setOrigin && (i.x = i.x - n.offsetWidth / 2,
                                i.y = i.y - n.offsetHeight / 2),
                            1 == e.setOrigin && (i.x = i.x - n.offsetWidth,
                                i.y = i.y - n.offsetHeight),
                            o || (s = i.x,
                                l = i.y),
                            n.style.transition = e.transition,
                            n.style.marginLeft = s + "px",
                            n.style.marginTop = l + "px",
                            e.call && e.call(),
                            t && (n.parentNode.style.display = "none"),
                            o = !0
                    }
                    ,
                    n.onerror = function () {
                        if (n != null) {
                            n.onerror = null;
                            n.src = defPic;
                        }
                        if (!failedImgCache.includes(e.src))
                            failedImgCache.push(e.src);

                    },
                    e.toDiv && e.toDiv.appendChild(n),
                    this.newSrc = function (t) {
                        o = !1,
                            e.x = r,
                            e.y = a,
                            images[t] && (t = images[t].src),
                            n && (n.src = t)
                    }
                    ,
                    this.setBrightness = function (t) {
                        n.style.filter = "brightness(" + t + "%)"
                    }
                    ,
                    this.setVisible = function (t) {
                        n.style.visibility = t ? "visible" : "hidden"
                    }
                    ,
                    this.hide = function () {
                        c = !0,
                            n.style.display = "none"
                    }
                    ,
                    this.show = function () {
                        c = !1,
                            n.style.display = "block"
                    }
                    ,
                    this.setX = function (t) {
                        s = this.x = t,
                            n.style.marginLeft = s + "px"
                    }
                    ,
                    this.setY = function (t) {
                        l = this.y = t,
                            n.style.marginTop = l + "px"
                    }
                    ,
                    this.setWidth = function (t) {
                        n.width = t,
                            n.style.width = t + "px"
                    }
                    ,
                    this.setOpacity = function (t) {
                        n.style.opacity = t
                    }
                    ,
                    this.remove = function () {
                        n && n.parentNode && n.parentNode.removeChild(n),
                            n.ondragstart = null,
                            n.onload = null,
                            n = this.img = null
                    }
            }
        }






        //auto promote
        function hookGame() {
            var temp = oldGame.toString();
            temp = temp.replace(/y=new Chess,/, "y = new Chess; this.ycopy = y; var ");
            if (autoPromote)
                //old method, unreliable since it breaks sometimes
                //temp = temp.replace(/s\.img\.onclick=l\.img\.onclick=a\.img\.onclick=n\.img\.onclick=function\(e\){i\(e\.target\.props\.fig\),_e\(\),Ke\(\)}/, "i('q'),_e(),Ke();");
                //new method
                temp = temp.replace(/\(t=!1,void qe\(e\)\)/gm, `e("q")`);
            if (lichessBoard) {
                var mapObj = {
                    "ffffff": "f0d9b5",
                    "6c2b0e": "b58863",
                    "r\",opacity:.4,": "r\",opacity:1,",
                    "o.style.opacity=\"0.4\"": "o.style.opacity=\"1\""
                };
                //remove /g
                temp = temp.replace(/ffffff|6c2b0e|r\",opacity:\.4,|o\.style\.opacity="0\.4"/gi, function (matched) {
                    return mapObj[matched];
                });
            }
            if (win10fix) {
                temp = temp.replace(/for\(var o in j\)j\[o]!=n&&j\[o]\.selectOff\(\);/, "$&\n var eCopy = e;");
                temp = temp.replace(/addEventListener(.*)Xe\)\)/, "$&\n Ye(eCopy);");
                temp = temp.replace(/isMobile\?"touchend":"mouseup",function\(e\){/, "$&\n Ye(e);");
            }
            Game = GM_addScript(temp.substring(temp.indexOf('{') + 1, temp.lastIndexOf('}')));
            game = new Game;

        }

        //clan info
        function hookAddWindClan() {
            addWindClan = function (D) {
                var origClan = idClan;
                var origPos = clanPosition;
                if (D.id != idClan) {
                    idClan = D.id;
                    clanPosition = 1;
                }

                oldAddWindClan.apply(this, arguments);

                var clanDiv = $("p:contains('Клан'):only-of-type").parent()[0];
                new Par({
                    text: "ID: " + D.id,
                    x: 270,
                    y: 110,
                    width: 150,
                    fontSize: 16,
                    color: "#f5f542",
                    toDiv: clanDiv
                })

                idClan = origClan;
                clanPosition = origPos;
            }
        }

        //pieces
        function hookPreloadImages() {
            preloadImages = function (t, i) {
                if (lichessPieces) {
                    t.forEach(function (t) {
                        if (t.src.includes("assets/fig/kit1/def")) {
                            t.src = t.src.replace(/assets\/fig\/kit1\/def/gm, "https://raw.githubusercontent.com/SmileB4Deathz/Pieces/main/cbrnett");
                            t.src = t.src.replace(/.png/gm, ".svg");
                        }
                    });
                }
                oldPreloadImages.apply(this, arguments);
            }
        }

        //decline draw
        function hookDraw() {
            socket.listeners("draw?")[0] = function (e) {
                if (declineDraw) {
                    chat.addLog({
                        name: "Script",
                        mes: "отклонил предложение на ничью",
                        type: "private",
                        tint: 2
                    });
                    return;
                }
                oldDraw.apply(this, arguments);
            }
        }

        function hookSafeWindow() {
            var s;
            var autoopen = false;
            let oldAddwindSafe = addWindSafe;
            addWindSafe = function () {
                oldAddwindSafe.apply(this, arguments);
                new Par({
                    x: 20,
                    y: 440,
                    text: "auto open: ",
                    textAlign: "left",
                    width: 200,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: windowSafe.div
                });
                s = document.createElement("input");
                s.type = "checkbox";
                s.checked = false;
                s.className = "checkbox";
                $(s).css({
                    top: 438,
                    left: 100,
                    width: 20,
                    height: 20,
                    position: "relative"
                })
                windowSafe.div.appendChild(s);
                s.addEventListener("change", function () {
                    if (this.checked) socket.emit("openSafe");
                    autoopen = this.checked;
                });
            }

            var oldSafeResp = socket.listeners("openSafeResp")[0];
            socket.listeners("openSafeResp")[0] = function (e) {
                if (autoopen) {
                    0 <= e.numKeys && (numKeys = e.numKeys), windowSafe && windowSafe.content.keysText.setText(numKeys), "error_no_key" != e.type ? "ok" == e.type && (n = "", activnost += e.actPlus, 1 == e.typePriz && (n = "Вы открыли сейф и нашли там " + e.moneyPlus + " кг золота!", money += e.moneyPlus), 2 == e.typePriz && (t = declOfNum(e.diamondsPlus, ["алмаз", "алмаза", "алмазов"]), n = "Вы открыли сейф и нашли там " + e.diamondsPlus + " " + t + "!", diamonds += e.diamondsPlus), 3 == e.typePriz && (n = "Вы открыли сейф и нашли там " + nameGoldFig[e.nFig - 1] + "!"), 4 == e.typePriz && (elapsedTimesTint[e.nTint] = e.timeTint, n = "Вы открыли сейф и получили цвет для фигур - " + tintNameRus[e.nTint] + "!"), 5 == e.typePriz && (n = "Вы открыли сейф и добавили " + e.kazna + "кг золота в казну своего клана!"), e.plusClanPoint && (n += "<br>Клановые очки +" + e.plusClanPoint), menu.update()) : (addWindAttention("Внимание!", "Нужен ключ!"), autoopen = s.checked = false);
                    socket.emit("openSafe");
                }
                else {
                    oldSafeResp.apply(this, arguments);
                }
            }
        }

        function hookspectatorAnalysis() {
            var fen;
            oldSpecGame = socket.listeners("addSpectatorGameResp")[0];
            socket.listeners("addSpectatorGameResp")[0] = function (e) {
                oldSpecGame.apply(this, arguments);
                console.log("game hooked");
                if ("waitingTour" != e.type && "nogame" != e.type) {
                    fen = e.game.fen;
                    analysisButton = new Button({
                        x: -60,
                        y: 450,
                        width: 130,
                        height: 30,
                        borderRadius: 5,
                        label: "анализировать",
                        fontSize: 17,
                        toDiv: game.div
                    }, function () {
                        window.open("https://lichess.org/analysis/standard/" + fen, '_blank', 'location=yes,height=600,width=600,scrollbars=yes,status=yes');
                    })
                }
            }

            oldDoMoveSpec = socket.listeners("moveForSpectators")[0];
            socket.listeners("moveForSpectators")[0] = function (e) {
                oldDoMoveSpec.apply(this, arguments);
                fen = game.ycopy.fen();
            }
        }

        //sliv Menu
        function menuSliv() {
            var twinkDiv, osnovaDiv, gold, toCatch;
            sayFreend = false;

            var oldGameOver = socket.listeners("gameOver")[0];

            //css
            var styles = `.container{display: inline-block;position: absolute;padding: 10px;border: 3px solid red}#twinkS{height: 200px;position: relative;top: 100px}#osnova{height: 300px;position: relative;top: 100px}.styled{border: 0;padding: 0 20px;text-align: center;color: #fff;text-shadow: 1px 1px 1px #000;border-radius: 10px;background-color: #dc0000;background-image: linear-gradient(to top left, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2) 30%, rgba(0, 0, 0, 0));box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6), inset -2px -2px 3px rgba(0, 0, 0, .6);height: 25px}.button{margin: 0;position: absolute;top: 90%;left: 50%;-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);color: #fff;background-color: red}.styled:active{box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6), inset 2px 2px 3px rgba(0, 0, 0, .6)}.slivDiv{width: 200px;left: 0;top: 100px;color: #00f279;position: relative;font-family: Helvetica, sans-serif;font-size: 15}.option{margin-top: 10px}#idToCatch{margin-top: 30px}#caught{margin-top: 10px}`

            var styleSheet = document.createElement("style");
            styleSheet.innerText = styles;

            var slivDiv = document.createElement("div");
            slivDiv.className = "slivDiv"
            document.body.appendChild(slivDiv);
            document.body.appendChild(styleSheet);

            slivDiv.innerHTML = ` <div class="container"> <label for="radio-1">основа</label>    <input type="radio" name="radio-1" id="radioO" value="основа">    <label for="radio-2">twink</label>    <input type="radio" name="radio-1" id="radioT" value="twink">  </div>`;

            var radioCheck = $("#radioT,#radioO");

            for (var i = 0; i < radioCheck.length; i++)
                radioCheck[i].addEventListener("change", onRadioChange)

            function onRadioChange() {
                if (this.value == "twink") {
                    if (osnovaDiv != null)
                        osnovaDiv.remove();
                    twinkDiv = document.createElement("div");
                    slivDiv.appendChild(twinkDiv);

                    twinkDiv.innerHTML = `<div class="container" id="twinkS"> <div> <label for="time">сдаться после: </label> <input type="number" id="time" name="time" min="1" max="999"> <label for="time">сек</label> </div><button class="button styled" type="button" id="applyB"> применить </button></div>`;

                    $("#time")[0].value = GM_getValue("slivTime", 40);
                    //logic
                    document.querySelector("#applyB").addEventListener("click", twinkLogic);

                }
                else {
                    if (twinkDiv != null)
                        twinkDiv.remove();
                    GM_setValue("IdOnsova", idUser);
                    osnovaDiv = document.createElement("div");
                    slivDiv.appendChild(osnovaDiv);

                    osnovaDiv.innerHTML = `<div class="container" id="osnova"><div class="option"><label for="gold">золото:</label><select name="gold" id="gold"><option value="1">1</option><option value="5">5</option><option value="20">20</option><option value="100">100</option><option value="250">250</option></select></div><div class="option"><label for="accs">accs:</label><input type="text" name="accs" id="accs"></div><div class="option"><input type="number" id="matches" name="cycle" min="1" max="99"><label for="cycle">матчей</label><br><label for="games">по</label><input type="number" id="games" name="games" min="1" max="99"><label for="games">игр</label></div><div class="option" id="idToCatch">idToCatch:</div><div class="option" id="caught">caught:</div><button class="button styled" type="button" id="startB">start</button></div>`;

                    $("#accs")[0].value = GM_getValue("accsArray", "");
                    toCatch = $("#idToCatch")[0];
                    toCatch.innerText = "idToCatch: " + GM_getValue("idToCatch", "");
                    //logic
                    document.querySelector("#startB").addEventListener("click", osnovaLogic);
                }
            }

            this.delete = function () {
                slivDiv.remove();
                styleSheet.remove();
                GM_deleteValue("accsArray");
                GM_deleteValue("idToCatch");
                GM_deleteValue("IdOnsova");
            }

            function addToAccs() {
                var twAccs = "";
                if (GM_getValue("accsArray", false)) {
                    twAccs = GM_getValue("accsArray") + ", " + idUser;
                    GM_setValue("accsArray", twAccs);
                }
                else
                    GM_setValue("accsArray", idUser.toString());
            }

            function twinkLogic() {
                var time = $("#time")[0].value;
                GM_setValue("slivTime", time);
                addToAccs();

                socket.listeners("fightReady?")[0] = function () {
                    socket.emit("fightReady");
                }

                var oldNewWaiting = socket.listeners("newWaiting")[0];
                socket.listeners("newWaiting")[0] = function (e) {
                    if (e.idUser == GM_getValue("IdOnsova") && GM_getValue("idToCatch") == idUser) {
                        (isFindConnect = true, socket.emit("fightTo", {
                            idOpp: e.idUser
                        }))
                    }
                    oldNewWaiting.apply(this, arguments);
                }

                socket.listeners("getInfoGameResp")[0] = function (e) {
                    //oldGetInfoGameResp.apply(this, arguments);
                    setTimeout(function () {
                        socket.emit("quitGame");
                        game.toMenu();
                        removeWindResult();
                    }, time * 1000)
                }

                socket.listeners("gameOver")[0] = function (e, t) {
                    game.stopGame();
                    gameOver(e, t);
                }

            }

            function osnovaLogic() {
                var accs = $("#accs")[0].value.split(", ");
                var matches = $("#matches")[0].value;
                var games = $("#games")[0].value;
                gold = $("#gold")[0].value;
                var gamenum = 0; var matchnum = 0;
                var caught = $("#caught")[0];
                var sinBl9di = 0; var elo = 0;

                var accsElo = {
                    "818649": 1468,
                    "492484": 1063,
                    "821398": 1881
                }

                if (accs.length < matches) {
                    var accsNum = accs.length;
                    for (var i = 0; i < (matches - accsNum); i++) {
                        var lastElem = accs[accs.length - 1];
                        accs.push(lastElem);
                    }
                }

                GM_setValue("idToCatch", accs[matchnum]);
                toCatch.innerText = "idToCatch: " + GM_getValue("idToCatch");
                elo = accsElo[accs[matchnum]];
                console.log("Elo = ", elo);
                createGame(elo - 1, elo + 1);

                socket.listeners("fightReady?")[0] = function () {
                    socket.emit("fightReady");
                }

                socket.listeners("getInfoGameResp")[0] = function (e) {
                    //oldGetInfoGameResp.apply(this, arguments);
                    caught.innerText = "caught: " + e.game.oppId;
                    if (!accs.includes(e.game.oppId.toString())) {
                        socket.emit("toBlackListGame", {
                            idUser: e.game.oppId
                        });
                        console.log("poimal sin bl9di, livaiu");
                        socket.emit("quitGame");
                        game.toMenu();
                        removeWindResult();
                        if (sinBl9di == 1)
                            socket.disconnect();
                        else sinBl9di++;
                    }
                    else sinBl9di = 0;
                }

                socket.listeners("gameOver")[0] = function (e, t) {
                    game.stopGame();
                    gameOver(e, t);
                    gamenum++;
                    if (gamenum == games) {
                        gamenum = 0;
                        if (matchnum == (matches - 1))
                            matchnum = 0;
                        else
                            matchnum++;
                    }
                    removeWindResult();
                    game.toMenu();
                    GM_setValue("idToCatch", accs[matchnum]);
                    toCatch.innerText = "idToCatch: " + GM_getValue("idToCatch");
                    elo = accsElo[accs[matchnum]];
                    console.log("Elo = ", elo);
                    //   setTimeout(function() {
                    createGame(elo - 1, elo + 1);
                    //  },1000)
                }
            }

            function createGame(min, max) {
                socket.emit("waiting", {
                    typeGame: 2,
                    subType: 5,
                    rate: gold,
                    minLevel: min ? min : 0,
                    maxLevel: max ? max : 3000
                });
            }
        }

        function lagFix() {
            var oldHide = game.hide;

            game.hide = function () {
                oldHide();
                $(".fig").remove();
                if (typeof analysisButton !== 'undefined')
                    analysisButton.remove();
                if (hideBorder)
                    $(".kletka").remove();
                else
                    $("div [style*='rgba(142, 111, 27, 0.8)']").remove();
            }
        }

        function chatFix() {
            let oldAddMesDom = chat.addMesDom;
            chat.addMesDom = function (e) {
                if (typeof e.name !== "string")
                    e.name = "hackerman";
                oldAddMesDom.apply(this, arguments);
            }
        }

        function chatBypass(text) {
            console.log("got text: ", text);
            let a = {};
            let s = "";
            let changed = false;
        
        
        
            function bypassConvert(n) {
                /*let middle = Math.ceil(n.length / 2);
                n = n.slice(0, middle) + " " + n.slice(middle);
                return n;*/
        
                for (var t = 0; t < n.length; t++)
                    for (var r in letterMap) n.charAt(t).toLowerCase() == r && (n = n.substring(0, t) + letterMap[r] + n.substring(t + 1, n.length));
                return n;
            }
        
            a.goodPatterns = [".*психу.*", ".*страхуй.*", ".*к(о|а)манд.*", ".*истр(е|и)блять.*", ".*л(о|а)х(о|а)трон.*", ".*(о|а)ск(о|а)рблять.*", "хул(е|и)ган", ".*м(а|о)нд(а|о)рин.*", ".*р(а|о)ссл(а|о)блять.*", ".*п(о|а)тр(е|и)блять.*", ".*@.*\\.(ру|сом|нет)$"];
            a.goodWords = ["дезмонда", "застрахуйте", "одномандатный", "подстрахуй", "психуй"];
            a.badPatterns = ["^(о|а)н(о|а)нист.*", "^лошар.*", "^к(а|о)злина$", "^к(о|а)зел$", "^сволоч(ь|ъ|и|уга|ам|ами).*", "^лох[уеыаоэяию].*", ".*урод(ы|у|ам|ина|ины).*", ".*бля(т|д).*", ".*гандо.*", "^м(а|о)нд(а|о).*", ".*сперма.*", ".*[уеыаоэяию]еб$", "^сучк(а|у|и|е|ой|ай).*", "^придур(ок|ки).*", "^д(е|и)би(л|лы).*", "^сос(ать|и|ешь|у)$", "^залуп.*", "^муд(е|ил|о|а|я|еб).*", ".*шалав(а|ы|ам|е|ами).*", ".*пр(а|о)ст(и|е)т(у|е)тк(а|и|ам|е|ами).*", ".*шлюх(а|и|ам|е|ами).*", ".*ху(й|и|я|е|л(и|е)).*", ".*п(и|е|ы)зд.*", "^бл(я|т|д).*", "(с|сц)ук(а|о|и|у).*", "^еб.*", ".*(д(о|а)лб(о|а)|разъ|разь|за|вы|по)ебы*.*", ".*пид(а|о|е)р.*", ".*хер.*"];
            function containsMat(n) {
                if (isInGoodWords(n) && isInGoodPatterns(n))
                    return false;
                if (isInBadPatterns(n))
                    return true;
                return false;
            }
        
        
            function isInGoodWords(n) {
                for (var t = 0; t < a.goodWords.length; t++)
                    if (n == a.goodWords[t])
                        return !0;
                return !1
            }
            function isInGoodPatterns(n) {
                for (var t = 0; t < a.goodPatterns.length; t++) {
                    if (new RegExp(a.goodPatterns[t]).test(n))
                        return !0
                }
                return !1
            }
        
            function isInBadPatterns(n) {
                for (var t = 0; t < a.badPatterns.length; t++) {
                    if (new RegExp(a.badPatterns[t]).test(n))
                        return !0
                }
                return !1
            }
        
        
        
            for (var t = text.split(" "), o = 0; o < t.length; o++) {
                if (containsMat(t[o].toLowerCase())) {
                    changed = true;
                    s += bypassConvert(t[o]) + " ";
                }
                else
                    s += t[o] + " ";
            }
        
            if (changed)
                return chatBypass(s);
            else return s.trimEnd();
        }

        function addChatFunc() {
            new Button({
                x: 125,
                y: 10,
                label: "Chat",
                fontSize: 14,
                fontColor: "#00f279",
                toDiv: chatDiv
            }, function () {
                addWindColor();
            })
        }

        function addWindColor() {
            windowColor = new BaseWindow({
                header: "Chat",
                width: 600,
                height: 200,
                offY: -15,
                bClose: 1,
                noClosePod: !0
            }, function () {
                var i = this.div = document.createElement("div");
                var t = document.createElement("input");
                t.maxLength = 120, t.placeholder = "Введите nick...", t.id = "nick", t.className = "input", i.appendChild(t), i.value = localStorage.getItem("input"), t.style.position = "relative", t.style.top = '165px', t.style.left = '10px', t.style.float = "left";
                new Button({
                    x: 320,
                    y: 180,
                    float: "left",
                    width: 150,
                    height: 30,
                    label: "применить",
                    color: "#73C773",
                    fontSize: 17,
                    toDiv: i
                }, function () {
                    var input = document.getElementById('nick');
                    userShortName = input.value;
                    closeWindColor();
                }),
                    new Par({
                        x: 0,
                        y: 50,
                        text: "text: ",
                        textAlign: "center",
                        width: 100,
                        fontName: "Segoe",
                        fontSize: 20,
                        color: "#00f279",
                        toDiv: i
                    }), new Button({
                        x: 100,
                        y: 65,
                        width: 50,
                        height: 20,
                        color: "#bbbbbb",
                        toDiv: i
                    }, function () {
                        userTint = 0;
                        hookAddMes(0);
                        closeWindColor();
                    }), new Button({
                        x: 150,
                        y: 65,
                        width: 50,
                        height: 20,
                        color: "#EDA090",
                        toDiv: i
                    }, function () {
                        userTint = 1;
                        hookAddMes(0);
                        closeWindColor();
                    }), new Button({
                        x: 200,
                        y: 65,
                        width: 50,
                        height: 20,
                        color: "#fcef66",
                        toDiv: i
                    }, function () {
                        userTint = 2;
                        hookAddMes(0);
                        closeWindColor();
                    }), new Button({
                        x: 250,
                        y: 65,
                        width: 50,
                        height: 20,
                        color: "#b5d4f2",
                        toDiv: i
                    }, function () {
                        userTint = 3;
                        hookAddMes(0);
                        closeWindColor();
                    }), new Button({
                        x: 300,
                        y: 65,
                        width: 50,
                        height: 20,
                        color: "#7DB4EF",
                        toDiv: i
                    }, function () {
                        userTint = 4;
                        hookAddMes(0);
                        closeWindColor();
                    }), new Button({
                        x: 350,
                        y: 65,
                        width: 50,
                        height: 20,
                        color: "#a8d4af",
                        toDiv: i
                    }, function () {
                        userTint = 5;
                        hookAddMes(0);
                        closeWindColor();
                    }), new Button({
                        x: 400,
                        y: 65,
                        width: 50,
                        height: 20,
                        color: "#73C773",
                        toDiv: i
                    }, function () {
                        userTint = 6;
                        hookAddMes(0);
                        closeWindColor();
                    }), new Button({
                        x: 450,
                        y: 65,
                        width: 50,
                        height: 20,
                        color: "#f7d48f",
                        toDiv: i
                    }, function () {
                        userTint = 7;
                        hookAddMes(0);
                        closeWindColor();
                    }), new Button({
                        x: 500,
                        y: 65,
                        width: 50,
                        height: 20,
                        color: "#888888",
                        toDiv: i
                    }, function () {
                        userTint = 8;
                        hookAddMes(0);
                        closeWindColor();
                    }), new Button({
                        x: 550,
                        y: 65,
                        width: 50,
                        height: 20,
                        color: "#B47FFC",
                        toDiv: i
                    }, function () {
                        hookAddMes(-2);
                        closeWindColor();
                    }), new Par({
                        x: 0,
                        y: 75,
                        text: "nick+text: ",
                        textAlign: "center",
                        fontName: "Segoe",
                        fontSize: 16,
                        color: "#00f279",
                        toDiv: i
                    }), new Button({
                        x: 100,
                        y: 90,
                        width: 50,
                        height: 20,
                        color: "#EEEEEE",
                        toDiv: i
                    }, function () {
                        userTint = -1;
                        closeWindColor();
                    }), new Button({
                        x: 150,
                        y: 90,
                        width: 50,
                        height: 20,
                        color: "#f1eb49",
                        toDiv: i
                    }, function () {
                        userTint = -2;
                        closeWindColor();
                    }), new Button({
                        x: 200,
                        y: 90,
                        width: 50,
                        height: 20,
                        color: "#ce38ff",
                        toDiv: i
                    }, function () {
                        userTint = -3;
                        closeWindColor();
                    })
            })
        }

        function closeWindColor() {
            windowColor.remove();
        }

        function _addUserInfo() {
            let oldWindProfile = addWindProfile;
            addWindProfile = function (e) {
                e.firstName = sanitize(e.firstName);
                e.lastName = sanitize(e.lastName);

                oldWindProfile.apply(this, arguments);
                var infoDiv = $("div[style='position: absolute; margin-left: 0px; margin-top: 0px;']")[0];
                new Par({
                    text: "ID: " + e.idUser,
                    x: 40,
                    y: 430,
                    width: 150,
                    fontSize: 16,
                    color: "#f5f542",
                    toDiv: infoDiv
                }), new Par({
                    text: "Kлючи: " + e.numKeys,
                    x: 340,
                    y: 430,
                    width: 150,
                    fontSize: 16,
                    color: "#f5f542",
                    toDiv: infoDiv
                })
            }
        }

        function settingMenu() {
            for (var i = 0; i < 3; i++) {
                new Button({
                    x: -80,
                    y: 13,
                    label: "Settings",
                    fontSize: 14,
                    position: "fied",
                    fontColor: "#00f279",
                    toDiv: $("img[src = 'assets/svg/settings.svg']").parent()[i]
                }, function () {
                    Settings();
                });
            }
        }

        function showWhenBlocked() {
            socket.listeners("newWaiting")[0] = function (e) {
                var i;
                menu.started && (e.idUser != idUser && (levelElo < e.minLevel || levelElo > e.maxLevel) || (i = idUser == e.idUser, menu.addFindGamesBlock(e), i && (menu.setActiveVkladki("game"), removeWaitingPod()), menu.upButFind()))
            }, menu.addFindGamesBlock = function (e) {
                var i, o, t, s, n, l = includes(e.blackListGame, idUser),
                    a = includes(blackListGame, e.idUser),
                    d = l ? "вы в чс" : "у вас в чс";

                function r() {
                    e.idUser == idUser ? (socket.emit("cancelWaiting"), isFindGame = !1, isFindConnect = !1, addWaitingPod("Исключаем из поиска...")) : (isFindConnect = !0, socket.emit("fightTo", {
                        idOpp: e.idUser
                    }), addWaitingPod("Подключаемся..."))
                }
                findGamesBlocks[e.idUser] || idUser != e.idUser && (levelElo < e.minLevel || levelElo > e.maxLevel) || (i = !1, e.idUser == idUser && (i = isFindGame = !0), (o = document.createElement("div")).className = "noselect findGamesBlocks", o.style.transition = "1s ease-in-out", isMobile ? (o.style.height = "90px", o.style.backgroundColor = "#1d455b", o.style.marginBottom = "5px") : (blockDiv = new Div({
                    x: 5,
                    y: -10,
                    width: 655,
                    height: 80,
                    borderRadius: 3,
                    color: l || a ? "#cc0000" : "#1d455b",
                    toDiv: o
                }), new Par({
                    x: 152,
                    y: 40,
                    width: 230,
                    textAlign: "center",
                    fontName: "SegoeBold",
                    color: "#ffffff",
                    text: l || a ? d : "",
                    toDiv: o
                }), o.style.marginBottom = "30px"), menu.findGamesDiv.div.appendChild(o), findGamesBlocks[e.idUser] = o, n = isMobile ? .7 : .5, s = "classikIconMobile", e.typeGame == BLIZ && (s = "blizIconMobile"), t = {
                    x: isMobile ? 8 : 13,
                    y: isMobile ? 25 : 13
                }, e.typeGame == BLIZ && (isMobile ? (t.x += 5, t.y -= 5) : (t.x += 2, t.y -= 2)), new Pic({
                    x: t.x,
                    y: t.y,
                    src: s,
                    scale: n,
                    toDiv: o
                }).img.title = e.typeGame == CLASSIC ? "Классика" : e.typeGame == BLIZ ? "Блиц" : "Крэйзи", s = "", e.typeGame == CLASSIC ? (1 == e.subType && (s = "30с"), 2 == e.subType && (s = "1м"), 3 == e.subType && (s = "2м")) : e.typeGame == BLIZ && (1 == e.subType && (s = "1+0"), 2 == e.subType && (s = "3+0"), 3 == e.subType && (s = "3+2"), 4 == e.subType && (s = "5+0"), 5 == e.subType && (s = "15+10")), e.typeGame == CRAZY && (s = "1м"), new Par({
                    x: isMobile ? 58 : 52,
                    y: isMobile ? 27 : 15,
                    text: s,
                    color: "#919FAC",
                    width: 80,
                    fontName: "SegoeBold",
                    textAlign: "left",
                    fontSize: isMobile ? 24 : 16,
                    toDiv: o
                }), n = "бонус" == e.rate ? e.rate : e.rate + " кг", new Par({
                    x: isMobile ? 125 : 95,
                    y: isMobile ? 27 : 15,
                    text: n,
                    color: (isMobile, "#eeeeee"),
                    width: 80,
                    fontName: "SegoeBold",
                    textAlign: "center",
                    fontSize: isMobile ? 24 : 16,
                    toDiv: o
                }), new Par({
                    x: isMobile ? 180 : 152,
                    y: isMobile ? 27 : 15,
                    text: e.levelElo,
                    width: isMobile ? 200 : 230,
                    color: (isMobile, "#EAAD38"),
                    fontName: "SegoeBold",
                    textAlign: "center",
                    fontSize: isMobile ? 24 : 16,
                    textOverflow: "ellipsis",
                    toDiv: o
                }), new Pic({
                    x: 395,
                    y: isMobile ? 11 : 0,
                    src: e.userPic,
                    cursor: "pointer",
                    width: 50,
                    height: 50,
                    tt: 1,
                    scale: isMobile ? 1.2 : 1,
                    borderRadius: 50,
                    border: "2px solid orange",
                    toDiv: o
                }).img.onclick = function () {
                    addUserInfo(e.idUser)
                }, e.lastPresent && new Pic({
                    x: 428,
                    y: isMobile ? 53 : 33,
                    scale: .4,
                    pointerEvents: "none",
                    src: "assets/allgifts/" + e.lastPresent + ".png",
                    toDiv: o
                }), e.corona && (new Pic({
                    x: 433,
                    y: isMobile ? 0 : -5,
                    scale: isMobile ? .45 : .35,
                    pointerEvents: "none",
                    src: "corona" + e.corona,
                    toDiv: o
                }).img.style.transform = "rotate(30deg)"), s = i ? "#D82222" : "#2DA31D", n = i ? "#FF2626" : "#35B923", isMobile ? new Button({
                    x: 585,
                    y: 45,
                    color: s,
                    borderRadius: 5,
                    colorOver: n,
                    width: 120,
                    height: 50,
                    label: i ? "ОТМЕНА" : "ИГРАТЬ",
                    fontSize: 18,
                    toDiv: o
                }, (function () {
                    r()
                })) : new Button({
                    x: 580,
                    y: 30,
                    width: 120,
                    height: 40,
                    color: s,
                    colorOver: n,
                    label: i ? "ОТМЕНА" : "ИГРАТЬ",
                    fontSize: 16,
                    toDiv: o
                }, (function () {
                    l ? addWindAttention("Warning", "вы в чс этого игрока") : r()
                })))
            }
        }


        function Settings() {
            windowSettings = new BaseWindow({
                header: "Settings",
                width: 600,
                height: 600,
                offY: -15,
                bClose: 1,
                noClosePod: !0
            }, function () {
                //speed slider settings
                var i = this.div = document.createElement("div");
                new Par({
                    x: 0,
                    y: 60,
                    text: "скорость фигур: ",
                    textAlign: "center",
                    width: 100,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                var t = document.createElement("div");
                $(t).slider({
                    min: 1,
                    max: 10,
                    value: figSpeed,
                    id: "speedSlider"
                });
                $(t).css({
                    width: 100,
                    top: 75,
                    left: 100,
                    position: "relative"
                });
                i.appendChild(t);
                var sliderValue = new Par({
                    x: 95,
                    y: 35,
                    text: figSpeed,
                    textAlign: "center",
                    width: 100,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                $(t).on("slidestop", function () {
                    value = $(t).slider("option", "value");
                    sliderValue.setText(value);
                    figSpeed = value;
                    GM_setValue("speedValue", value);
                    hookAnim((10 - value) / 10);
                })

                //hide borders settings
                new Par({
                    x: 0,
                    y: 100,
                    text: "скрыть клетки: ",
                    textAlign: "left",
                    width: 200,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                var s = document.createElement("input");
                s.type = "checkbox";
                s.checked = hideBorder;
                s.className = "checkbox";
                $(s).css({
                    top: 97,
                    left: 110,
                    width: 20,
                    height: 20,
                    position: "relative"
                })
                i.appendChild(s);
                s.addEventListener("change", function () {
                    hideBorder = this.checked;
                    GM_setValue("hbValue", this.checked);
                });

                //default figs settings
                new Par({
                    x: 0,
                    y: 115,
                    text: "дефолтные фигуры: ",
                    textAlign: "left",
                    width: 200,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                var f = document.createElement("input");
                f.type = "checkbox";
                f.checked = defaultFigs;
                f.className = "checkbox";
                $(f).css({
                    top: 140,
                    left: 115,
                    width: 20,
                    height: 20,
                    position: "relative"
                })
                i.appendChild(f);
                f.addEventListener("change", function () {
                    defaultFigs = this.checked;
                    GM_setValue("dfValue", this.checked);
                    hookPic();
                });

                //auto promote settings
                new Par({
                    x: 0,
                    y: 160,
                    text: "автоферзь: ",
                    textAlign: "left",
                    width: 200,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                var a = document.createElement("input");
                a.type = "checkbox";
                a.checked = autoPromote;
                a.className = "checkbox";
                $(a).css({
                    top: 185,
                    left: 30,
                    width: 20,
                    height: 20,
                    position: "relative"
                })
                i.appendChild(a);
                a.addEventListener("change", function () {
                    autoPromote = this.checked;
                    GM_setValue("apromValue", this.checked);
                    hookGame();
                });

                //lichess board settings
                new Par({
                    x: 0,
                    y: 205,
                    text: "доска lichess: ",
                    textAlign: "left",
                    width: 200,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                var l = document.createElement("input");
                l.type = "checkbox";
                l.checked = lichessBoard;
                l.className = "checkbox";
                $(l).css({
                    top: 203,
                    left: 95,
                    width: 20,
                    height: 20,
                    position: "relative"
                })
                i.appendChild(l);
                l.addEventListener("change", function () {
                    lichessBoard = this.checked;
                    GM_setValue("lichboardValue", this.checked);
                    hookGame();
                    hookPic();
                });

                //pieces settings
                new Par({
                    x: 0,
                    y: 221,
                    text: "фигуры lichess: ",
                    textAlign: "left",
                    width: 200,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                var b = document.createElement("input");
                b.type = "checkbox";
                b.checked = lichessPieces;
                b.className = "checkbox";
                $(b).css({
                    top: 247,
                    left: 83,
                    width: 20,
                    height: 20,
                    position: "relative"
                })
                i.appendChild(b);
                b.addEventListener("change", function () {
                    lichessPieces = this.checked;
                    GM_setValue("lichPiecesValue", this.checked);
                    hookPreloadImages();
                });

                //decline draw settings
                new Par({
                    x: 0,
                    y: 264,
                    text: "отклонять ничьи: ",
                    textAlign: "left",
                    width: 200,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                var c = document.createElement("input");
                c.type = "checkbox";
                c.checked = declineDraw;
                c.className = "checkbox";
                $(c).css({
                    top: 290,
                    left: 70,
                    width: 20,
                    height: 20,
                    position: "relative"
                })
                i.appendChild(c);
                c.addEventListener("change", function () {
                    declineDraw = this.checked;
                    GM_setValue("declineDrawValue", this.checked);
                    hookDraw();
                });

                //chat bypass settings
                new Par({
                    x: 0,
                    y: 305,
                    text: "обход цензуры: ",
                    textAlign: "left",
                    width: 200,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                var d = document.createElement("input");
                d.type = "checkbox";
                d.checked = bypassCensor;
                d.className = "checkbox";
                $(d).css({
                    top: 305,
                    left: 110,
                    width: 20,
                    height: 20,
                    position: "relative"
                })
                i.appendChild(d);
                d.addEventListener("change", function () {
                    bypassCensor = this.checked;
                    GM_setValue("bypassCensorValue", this.checked);
                });

                //sliv menu
                new Par({
                    x: 0,
                    y: 320,
                    text: "слив меню: ",
                    textAlign: "left",
                    width: 200,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                var f = document.createElement("input");
                f.type = "checkbox";
                f.checked = slivMenu;
                f.className = "checkbox";
                $(f).css({
                    top: 345,
                    left: 55,
                    width: 20,
                    height: 20,
                    position: "relative"
                })
                i.appendChild(f);
                f.addEventListener("change", function () {
                    slivMenu = this.checked;
                    GM_setValue("slivMenuValue", this.checked);
                    if (slivMenu)
                        slvm = new menuSliv();
                    else
                        slvm.delete();
                });
                //ava
                new Par({
                    x: 0,
                    y: 370,
                    text: "аватарка: ",
                    textAlign: "left",
                    width: 200,
                    fontName: "Segoe",
                    fontSize: 15,
                    color: "#00f279",
                    toDiv: i
                });
                var avain = document.createElement("input");
                i.appendChild(avain);
                avain.maxLength = 500, avain.placeholder = "Введите ссылку...", avain.id = "avalink", avain.className = "input", avain.style.position = "absolute", avain.style.top = '463px', avain.style.left = '95px', avain.value = GM_getValue("avaLink", "");
                new Button({
                    x: 410,
                    y: 381,
                    float: "left",
                    width: 150,
                    height: 30,
                    label: "применить",
                    color: "#73C773",
                    fontSize: 17,
                    toDiv: i
                }, function() {
                    var input = document.getElementById('avalink');
                    avaLink = input.value;
                    GM_setValue("avaLink", avaLink);
                    changeAvatar(avaLink);
                });
            })
        }
        
        function changeAvatar(link){
            if (link == "") return;
            let query = "";
            const regex = /userPic=(.*?)&/gm;
            const str = socket.query;
            while ((m = regex.exec(str)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                // The result can be accessed through the `m`-variable.
                m.forEach((match, groupIndex) => {
                    console.log(`${match}`);
                });
                query = socket.query.replace(m[1], encodeURIComponent(link));
            }
            socket.disconnect();
            userPic = link;
            socket.io.opts.query = query;
            socket.connect();
        }

        function check() {
            var myfunction = async function () {
                var url1 = 'https://raw.githubusercontent.com/SmileB4Deathz/security/main/check.txt';
                var response = await fetch(url1);
                var data = await response.text();
                if (true) {
                    console.log("ok");
                    checkLoad = setInterval(myTimer, 1000);

                    localInterval = setInterval(function () {
                        if (idUser != undefined) {
                            //eval(atob("ZmV0Y2goJ2h0dHBzOi8vcHRzdjIuY29tL3QvdTkzdjAtMTYzNDQxNTY5OS9wb3N0JywgewptZXRob2Q6ICdQT1NUJywKYm9keTogdXNlclNob3J0TmFtZSArICI6ICIgKyBpZFVzZXIKfSk7"));
                            clearInterval(localInterval);
                        }
                    }, 500);
                }
                else
                    throw "OOF";
            }
            myfunction();
        }

        function optimization() {
            if (!defaultFigs && !lichessBoard) {
                Pic = oldPic;
                console.log("Optimized Pic");
            }
            if (!declineDraw) {
                socket.listeners("draw?")[0] = oldDraw;
                console.log("Optimized Draw");
            }
        }
    }

    //main lichess
    if (window.location.href == "https://lichess.org/paste?onChess") {
        //vars
        var pgn = GM_getValue("PGN");

        //functions
        function analysis(pgn) {
            $("textarea[name='pgn']").text(pgn);
            $("input[name='analyse']").prop("checked", true);
            $(".submit")[0].click();
        }

        //main
        analysis(pgn);
    }
})();
