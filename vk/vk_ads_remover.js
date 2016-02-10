// ==UserScript==
// @name         VK adv remover
// @namespace    https://github.com/mgfox/userscripts/
// @version      0.2
// @description  remove ads from vk.com
// @author       Mike VV 
// @match        https://vk.com/feed
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
// @updateURL	 https://raw.githubusercontent.com/mgfox/userscripts/master/vk/vk_ads_remover.js
// @downloadURL	 https://raw.githubusercontent.com/mgfox/userscripts/master/vk/vk_ads_remover.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';


setInterval(function() {
    $(".wall_text_name_explain_promoted_post")
        .parent()
        .parent()
        .parent()
        .parent()
        .html("<br/><div  style='text-align: center; width:100%'><b>Advertisement wall posts disabled ;-)</b></div>");
}, 2000);