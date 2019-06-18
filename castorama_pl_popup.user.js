// ==UserScript==
// @name         Block Flashing Stuff
// @namespace    http://mgfox.github.io
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.castorama.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (location.href.search(/castorama.pl\/*/i) > -1) {
        console.log("castorama.pl detected ...");
        (function(){
            var elem = document.querySelector('.newspapper-popup');
            elem.style.display = "none";
            console.log("#newspapper-popup eliminated.");
        })();
    }
})();    
