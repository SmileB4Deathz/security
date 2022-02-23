function Button(i, e) {
    var n = this,
        o = this.div = document.createElement("div");
    o.style.position = "absolute", i.x || (i.x = 0), i.y || (i.y = 0), i.width || (i.width = 0), i.height || (i.height = 0), i.props && (this.props = i.props);
    var s, l, r = this.x = i.x,
        a = this.y = i.y;
    i.setOrigin || 0 == i.setOrigin || (i.setOrigin = .5), .5 == i.setOrigin && (r = this.x = i.x - i.width / 2, a = this.y = i.y - i.height / 2), this.isVisible = !0, o.style.marginLeft = r + "px", o.style.marginTop = a + "px", i.color && !i.colorOver && (i.colorOver = i.color), o.style.opacity = i.opacity || 0 == i.opacity ? i.opacity : 1, this.active = !0, this.enabled = function() {
        n.active = !0, l.style.cursor = "pointer", i.opacity ? o.style.opacity = i.opacity : o.style.opacity = 1
    }, this.disabled = function(t) {
        n.active = !1, l.style.cursor = "auto", o.style.opacity = t || .5
    }, i.image ? (images[i.image] ? l = images[i.image].cloneNode(!0) : (l = document.createElement("img")).src = i.image, l.style.display = "none", i.zIndex && (l.style.zIndex = i.zIndex), l.onload = function() {
        var t = !(l.style.display = "block");
        o.parentNode && "none" == o.parentNode.style.display && (t = !0, o.parentNode.style.display = "block"), i.scale && (l.originalWidth || (l.originalWidth = l.offsetWidth), l.width = l.originalWidth * i.scale), i.width = l.offsetWidth, i.height = l.offsetHeight, .5 == i.setOrigin && (i.x = i.x - l.offsetWidth / 2, i.y = i.y - l.offsetHeight / 2), 1 == i.setOrigin && (i.x = i.x - l.offsetWidth, i.y = i.y - l.offsetHeight), i.setOrigin = 0, r = n.x = i.x, a = n.y = i.y, o.style.marginLeft = r + "px", o.style.marginTop = a + "px", s && (s.style.width = i.width + "px", s.style.lineHeight = i.height + "px", s.style.marginTop = i.fontOffY ? i.fontOffY + "px" : "0px"), t && (o.parentNode.style.display = "none")
    }) : i.width && i.height && ((l = document.createElement("div")).style.width = i.width + "px", l.style.height = i.height + "px", l.style.backgroundColor = i.color || "#35B923", l.style.border = i.border || "", l.style.borderRadius = i.borderRadius || 0 == i.borderRadius ? i.borderRadius + "px" : "10px", i.zIndex && (l.style.zIndex = i.zIndex)), l && (l.className = i.className || "noselect", l.style.position = "absolute", l.style.cursor = "pointer", i.title && (l.title = i.title), l.addEventListener("click", function(t) {
        e && n.active && e(n)
    }), l.addEventListener("mousedown", function(t) {
        t.stopPropagation()
    }), l.addEventListener("mouseover", function(t) {
        !i.image && n.active && (l.style.backgroundColor = i.colorOver || "#3CC729")
    }), l.addEventListener("mouseout", function(t) {
        !i.image && n.active && (l.style.backgroundColor = i.color || "#35B923")
    }), o.appendChild(l)), this.pod = l, i.label && ((s = document.createElement("p")).innerHTML = i.label, s.style.position = "absolute", s.style.fontFamily = "SegoeBold", i.fontSize || (i.fontSize = 12), i.fontColor || (i.fontColor = "#eeeeee"), s.style.fontSize = i.fontSize + "px", s.style.color = i.fontColor, s.style.width = i.width + "px", s.style.lineHeight = i.height + "px", s.style.textAlign = i.textAlign || "center", s.style.marginTop = i.fontOffY ? i.fontOffY + "px" : "0px", i.zIndex && (s.style.zIndex = i.zIndex), o.appendChild(s), l ? s.style.pointerEvents = "none" : (s.style.cursor = "pointer", s.addEventListener("click", function(t) {
        e && n.active && e(n)
    }), s.addEventListener("mousedown", function(t) {
        t.stopPropagation()
    }))), this.hide = function() {
        l && (l.style.display = "none"), s && (s.style.display = "none"), this.isVisible = !1
    }, this.show = function() {
        l && (l.style.display = "block"), s && (s.style.display = "block"), this.isVisible = !0
    }, this.setCall = function(e) {
        l.addEventListener("click", function(t) {
            e && n.active && e(n)
        })
    }, this.setVisible = function(t) {
        t ? (this.isVisible = !0, l && (l.style.display = "block"), s && (s.style.display = "block")) : (this.isVisible = !1, l && (l.style.display = "none"), s && (s.style.display = "none"))
    }, this.isVisible = function() {
        return "visible" == l.style.visibility
    }, this.setTitle = function(t) {
        l && (l.title = t)
    }, this.setColor = function(t, e) {
        if (!i.image && l) {
            if (!t) return i.color = "#35B923", i.colorOver = "#3CC729", void(l.style.backgroundColor = i.color);
            i.color = t, i.colorOver = e || t, l.style.backgroundColor = i.color
        }
    }, this.setOpacity = function(t) {
        o.style.opacity = t
    }, this.setText = function(t) {
        i.label && (s.innerHTML = t)
    }, this.setTextColor = function(t) {
        s && (s.style.color = t)
    }, this.setImage = function(t) {
        l.src != t && (l.src = t)
    }, this.setBrightness = function(t) {
        l && (l.style.filter = "brightness(" + t + "%)"), s && (s.style.filter = "brightness(" + t + "%)")
    }, this.setImageSize = function(t, e) {
        l.src && (l.width = t, l.height = e)
    }, this.setAlpha = function(t) {
        l && (l.style.opacity = t), s && (s.style.opacity = t)
    }, this.setPos = function(t, e) {
        !t && 0 != t || (o.style.marginLeft = t + "px"), !e && 0 != e || (o.style.marginTop = e + "px")
    }, this.remove = function() {
        s && s.parentNode.removeChild(s), l && l.parentNode.removeChild(l)
    }, i.toDiv && i.toDiv.appendChild(o)
}

function Pic(e) {
    var i = this;
    e.x || (e.x = 0), e.y || (e.y = 0);
    var n, o = !1;
    images && images[e.src] ? n = this.img = images[e.src].cloneNode() : (n = this.img = document.createElement("img")).src = e.src, this.img = n, !e.width && 0 != e.width || (n.width = e.width), !e.height && 0 != e.height || (n.height = e.height), e.willChange && (n.style.willChange = e.willChange), n.className = "noselect", e.title && (n.title = e.title), e.className ? n.className = e.className + " noselect" : n.className = "noselect", n.style.position = e.position || "absolute", n.style.display = "none", e.borderRadius && (n.style.borderRadius = e.borderRadius + "px"), e.border && (n.style.border = e.border), e.cursor && (n.style.cursor = e.cursor), e.pointerEvents && (n.style.pointerEvents = e.pointerEvents), e.opacity && (n.style.opacity = e.opacity), e.zIndex && (n.style.zIndex = e.zIndex), e.boxShadow && (n.style.boxShadow = e.boxShadow), e.props && (n.props = e.props);
    e.temp;
    var s = this.x = e.x,
        l = this.y = e.y,
        r = e.x,
        a = e.y,
        c = !1;
    n.ondragstart = function() {
        return !1
    }, n.onload = function() {
        var t = !1;
        n.parentNode && "none" == n.parentNode.style.display && (t = !0, e.toDiv.style.display = "block"), c || (n.style.display = "block"), e.scale && (n.originalWidth || (n.originalWidth = n.offsetWidth || n.width), n.originalHeight || (n.originalHeight = n.offsetHeight || n.height), n.width = n.originalWidth * e.scale, n.height = n.originalHeight * e.scale, e.scaleY && (n.height *= e.scaleY)), .5 == e.setOrigin && (i.x = i.x - n.offsetWidth / 2, i.y = i.y - n.offsetHeight / 2), 1 == e.setOrigin && (i.x = i.x - n.offsetWidth, i.y = i.y - n.offsetHeight), o || (s = i.x, l = i.y), n.style.transition = e.transition, n.style.marginLeft = s + "px", n.style.marginTop = l + "px", e.call && e.call(), t && (n.parentNode.style.display = "none"), o = !0
    }, e.toDiv && e.toDiv.appendChild(n), this.newSrc = function(t) {
        o = !1, e.x = r, e.y = a, images[t] && (t = images[t].src), n && (n.src = t)
    }, this.setBrightness = function(t) {
        n.style.filter = "brightness(" + t + "%)"
    }, this.setVisible = function(t) {
        n.style.visibility = t ? "visible" : "hidden"
    }, this.hide = function() {
        c = !0, n.style.display = "none"
    }, this.show = function() {
        c = !1, n.style.display = "block"
    }, this.setX = function(t) {
        s = this.x = t, n.style.marginLeft = s + "px"
    }, this.setY = function(t) {
        l = this.y = t, n.style.marginTop = l + "px"
    }, this.setWidth = function(t) {
        n.width = t, n.style.width = t + "px"
    }, this.setOpacity = function(t) {
        n.style.opacity = t
    }, this.remove = function() {
        n.parentNode && n.parentNode.removeChild(n), n.ondragstart = null, n.onload = null, n = null
    }
}

function Par(t) {
    var e = this.par = document.createElement("p");
    this.text = t.text || 0 == t.text ? t.text : "", e.innerHTML = this.text, e.className = t.className || "noselect", e.style.position = t.position || "absolute", this.x = t.x, this.y = t.y, t.props && (e.props = t.props), t.textIndent && (e.style.textIndent = t.textIndent + "px"), t.width && (e.style.width = t.width + "px"), t.color && (e.style.color = t.color), t.fontWeight && (e.style.fontWeight = t.fontWeight), t.fontName ? e.style.fontFamily = t.fontName : e.style.fontFamily = "SegoeBold", t.opacity && (e.style.opacity = t.opacity), e.style.fontSize = t.fontSize ? t.fontSize + "px" : "16px", e.style.textAlign = t.textAlign || "left", e.style.marginLeft = t.x + "px", e.style.marginTop = t.y + "px", t.zIndex && (e.style.zIndex = t.zIndex), t.textOverflow && (e.style.textOverflow = t.textOverflow, e.style.whiteSpace = "nowrap", e.style.overflow = "hidden"), t.whiteSpace && (e.style.whiteSpace = t.whiteSpace), t.lineHeight && (e.style.lineHeight = t.lineHeight), t.textOverflow && (e.style.textOverflow = t.textOverflow, e.style.whiteSpace = "nowrap", e.style.overflow = "hidden"), t.cursor && (e.style.cursor = t.cursor), t.pointerEvents && (e.style.pointerEvents = t.pointerEvents), t.toDiv && t.toDiv.appendChild(e), this.setClassName = function(t) {
        e.className = t
    }, this.setBrightness = function(t) {
        e.style.filter = "brightness(" + t + "%)"
    }, this.setOpacity = function(t) {
        e.style.opacity = t
    }, this.setTextColor = function(t) {
        e.style.color = t
    }, this.hide = function() {
        e.style.display = "none"
    }, this.show = function() {
        e.style.display = "block"
    }, this.setText = function(t) {
        this.text = t, e.innerHTML = t
    }, this.addText = function(t) {
        this.text += t, e.innerHTML = this.text
    }, this.posX = function(t) {
        this.x = t, e.style.marginLeft = this.x + "px"
    }, this.posY = function(t) {
        this.y = t, e.style.marginTop = this.y + "px"
    }, this.setVisible = function(t) {
        e.style.visibility = t ? "visible" : "hidden"
    }, this.picToEnd = function(t) {
        isMobile && (null != t.mW && (t.w = t.mW), null != t.mMarginTop && (t.marginTop = t.mMarginTop)), t.marginTop || (t.marginTop = 0), t.marginRight || (t.marginRight = 0), this.text += ' <img src="' + t.pic + '" style="width:' + t.w + "px; display:inline; vertical-align:top; margin-top:" + t.marginTop + "px; margin-right:" + t.marginRight + 'px;">', this.par.innerHTML = this.text
    }, this.remove = function() {
        e.parentNode && e.parentNode.removeChild(e)
    }
}

function Div(t) {
    var e = this.div = document.createElement("div");
    e.style.position = t.position || "absolute", !t.width && 0 != t.width || (e.style.width = t.width + "px"), !t.height && 0 != t.height || (e.style.height = t.height + "px"), t.x || (t.x = 0), t.y || (t.y = 0), this.width = t.width, this.height = t.height, t.marginBottom && (e.style.marginBottom = t.marginBottom + "px"), t.props && (e.props = t.props), !t.top && 0 != t.top || (e.style.top = t.top + "px"), !t.left && 0 != t.left || (e.style.left = t.left + "px"), t.borderRadius && (e.style.borderRadius = t.borderRadius + "px"), t.border && (e.style.border = t.border), t.color && (e.style.backgroundColor = t.color), t.background && (e.style.background = t.background), t.backgroundSize && (e.style.backgroundSize = t.backgroundSize + "px"), t.pointerEvents && (e.style.pointerEvents = t.pointerEvents), !t.opacity && 0 != t.opacity || (e.style.opacity = t.opacity), t.zIndex && (e.style.zIndex = t.zIndex), t.cursor && (e.style.cursor = t.cursor), t.title && (e.title = t.title), t.transition && (e.style.transition = t.transition), t.setOrigin || (t.setOrigin = 0), .5 == t.setOrigin && (t.x = t.x - t.width / 2, t.y = t.y - t.height / 2), 1 == t.setOrigin && (t.x = t.x - t.width, t.y = t.y - t.height), this.x = t.x, this.y = t.y, e.style.marginLeft = t.x + "px", e.style.marginTop = t.y + "px", t.marginBottom && (e.style.marginBottom = t.marginBottom + "px"), t.className && (e.className = t.className), this.setClassName = function(t) {
        e.className = t
    }, this.show = function() {
        e.style.display = "block"
    }, this.hide = function() {
        e.style.display = "none"
    }, this.setX = function(t) {
        x = this.x = t, e.style.marginLeft = x + "px"
    }, this.setY = function(t) {
        y = this.y = t, e.style.marginTop = y + "px"
    }, this.setWidth = function(t) {
        !t && 0 != t || (e.style.width = t + "px", this.width = t)
    }, this.setHeight = function(t) {
        !t && 0 != t || (e.style.height = t + "px", this.height = t)
    }, this.setColor = function(t) {
        e.style.backgroundColor = t
    }, this.setOpacity = function(t) {
        e.style.opacity = t
    }, t.toPreDiv ? t.toPreDiv.prepend(e) : t.toDiv && t.toDiv.appendChild(e), this.remove = function() {
        e.parentNode && e.parentNode.removeChild(e)
    }
}

function preloadImages(t, i) {
    var n = 0,
        o = t.length;
    t.forEach(function(t) {
        var e;
        e = t, (t = document.createElement("img")).src = e.src, t.onerror = function(t) {
            console.log("Ошибка загрузки: " + e.src)
        }, t.onload = function(t) {
            ++n == o && i(), loaderAnimStep(n / o)
        }, images[e.src] = t, images[e.name] = t
    })
}

function zapros(t, e, i) {
    t = "https://alexsave.com/shahmat/" + t;
    request = new XMLHttpRequest, e += "&r=" + Math.random(), request.open("POST", t, !0), request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), request.send(e);
    request.onreadystatechange = function() {
        request.readyState === XMLHttpRequest.DONE && request.status
    }
}

function randomInt(t, e) {
    e -= t;
    return t + Math.floor(Math.random() * (1 + e))
}

function isEmpty(t) {
    return !t || "" == t.trim()
}

function secToTime(t, e) {
    if (t < 0) return -1;
    var i = Math.round(t % 60);
    t = (t - i) / 60;
    var n = Math.round(t % 60),
        o = Math.round((t - n) / 60);
    if (24 <= o) {
        t = Math.round(o / 24);
        return 1 == t ? t + " день" : 1 < t && t < 5 ? t + " дня" : t + " дней"
    }
    return e ? "Сегодня" : (o = o < 10 ? "0" + o : o) + ":" + (n = n < 10 ? "0" + n : n) + ":" + (i = i < 10 ? "0" + i : i)
}

function secToTimeMin(t) {
    if (isNaN(t)) return "";
    var e = Math.floor(t / 60);
    return (e = e < 10 ? "0" + e : e) + ":" + (t = (t = t % 60) < 10 ? "0" + t : t)
}

function isAvaOk50(t) {
    return "https://vk.com/images/deactivated_50.png" != t && "https://vk.com/images/camera_50.png" != t && "https://vk.com/images/camera_50.png?ava=1" != t
}

function isAvaOk100(t) {
    return "https://vk.com/images/deactivated_100.png" != t && "https://vk.com/images/camera_100.png" != t && "https://vk.com/images/camera_100.png?ava=1" != t
}

function addUserInfo(t) {
    !t || t < 0 || !socket || (socket.emit("getUserInfo", {
        idUser: t,
        isFriend: !1
    }, "getUserInfoChat"), addWaitingPod("Загрузка..."))
}

function toFullScreen() {
    document.fullScreenElement && null !== document.fullScreenElement || document.mozFullScreen || document.webkitIsFullScreen ? cancelFullscreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen()
}

function cancelFullscreen() {
    (document.fullScreenElement && null !== document.fullScreenElement || document.mozFullScreen || document.webkitIsFullScreen) && (document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen())
}

function includes(t, e) {
    if (null == e || null == e) return !1;
    if (!t || !t.length) return !1;
    for (var i in t)
        if (t[i] == e) return !0;
    return !1
}

function declOfNum(t, e) {
    return e[t % 10 == 1 && t % 100 != 11 ? 0 : 2 <= t % 10 && t % 10 <= 4 && (t % 100 < 10 || 20 <= t % 100) ? 1 : 2]
}

function numWithSpace(e, i = " ") {
    let n = "",
        o = 0;
    for (let t = (e = e.toString()).length - 1; 0 <= t; t--) o++, 3 < o ? (n += i, o = 0, t++) : n += e[t];
    return n.split("").reverse().join("")
}
$.urlParam = function(t) {
    t = new RegExp("[?&]" + t + "=([^&#]*)").exec(window.location.href);
    return null == t ? null : decodeURI(t[1]) || 0
}, Object.keys || (Object.keys = function() {
    "use strict";
    var o = Object.prototype.hasOwnProperty,
        s = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        r = l.length;
    return function(t) {
        if ("object" != typeof t && ("function" != typeof t || null === t)) throw new TypeError("Object.keys called on non-object");
        var e, i, n = [];
        for (e in t) o.call(t, e) && n.push(e);
        if (s)
            for (i = 0; i < r; i++) o.call(t, l[i]) && n.push(l[i]);
        return n
    }
}()), String.prototype.width = function(t) {
    var e = t || "14px SegoeBold",
        t = $("<div></div>").text(this).css({
            position: "absolute",
            float: "left",
            "white-space": "nowrap",
            visibility: "hidden",
            font: e
        }).appendTo($("body")),
        e = t.width();
    return t.remove(), e
}, String.prototype.padStart || (String.prototype.padStart = function(t, e) {
    return t >>= 0, e = String(e || " "), this.length > t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)), e.slice(0, t) + String(this))
});