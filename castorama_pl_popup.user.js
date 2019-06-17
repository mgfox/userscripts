// ==UserScript==
// @name         block annoying newspaper popup
// @namespace    http://mgfox.github.io
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.castorama.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        var elem = document.querySelector('.newspapper-popup');
        elem.style.display = "none";
        console.log("newspapper popup blocked ...");
})();
