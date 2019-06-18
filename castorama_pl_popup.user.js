// ==UserScript==
// @name         Castorama.pl cleanup
// @namespace    http://mgfox.github.io
// @version      0.1.1
// @description  Block flashing newspaper popup on Castorama.pl
// @author       mgfox
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
