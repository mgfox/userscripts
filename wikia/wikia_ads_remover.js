// ==UserScript==
// @name         WIKIA adv remover
// @namespace    https://github.com/mgfox/userscripts/
// @version      0.4
// @description  remove ads from wikia.com
// @author       Mike VV
// @match        http://*.wikia.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
// @updateURL	 https://raw.githubusercontent.com/mgfox/userscripts/master/wikia/wikia_ads_remover.js
// @downloadURL	 https://raw.githubusercontent.com/mgfox/userscripts/master/wikia/wikia_ads_remover.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

setInterval(function() {
    $(".GoogleActiveViewClass").html("#1 adv disabled");
    $("#google_image_div").html("#2 adv disabled");
}, 2000);