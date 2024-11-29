// ==UserScript==
// @name         bonusFix
// @namespace    http://tampermonkey.net/
// @version      2024-11-29
// @description  try to take over the world!
// @author       You
// @match        https://youchess.ru:3000/*
// @icon        https://alexsave.com:3000/assets/men.png
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    (function(oldFunc) {
        addWindBonus = function(){
            oldFunc();
            isAddGroup = true;
            isAddMenu = true;
            postOnWallCurrent = true;
            postOnWall = true;
            socket.emit("postWall", 1);
            galCheck();
        }
    })(addWindBonus);


})();
