// ==UserScript==
// @name         Geektimes adv remover
// @namespace    https://github.com/mgfox/userscripts/
// @version      0.3
// @description  remove ads from geektimes.ru site
// @author       Mike VV
// @match        http*://geektimes.ru/*
// @match        http*://habrahabr.ru/*
// @updateURL		https://raw.githubusercontent.com/mgfox/userscripts/master/geektimes/geektimes_adv_remover.js
// @downloadURL		https://raw.githubusercontent.com/mgfox/userscripts/master/geektimes/geektimes_adv_remover.js
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