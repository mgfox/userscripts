// ==UserScript==
// @name         Geektimes adv remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://geektimes.ru/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...

setInterval(function() {
    //console.log("hide html_banner " + new Date());
    $(".html_banner").css("display", "none");
    $("#swiffycontainer").css("display", "none");
}, 2000);