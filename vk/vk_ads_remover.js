// ==UserScript==
// @name         VK adv remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  remove ads from vk.com
// @author       You
// @match        https://vk.com/feed
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...

var jq=document.createElement('script')
jq.setAttribute("type","text/javascript")
jq.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js")
document.getElementsByTagName("head")[0].appendChild(jq)

setInterval(function() {
    $(".wall_text_name_explain_promoted_post")
        .parent()
        .parent()
        .parent()
        .parent()
        .html("<br/><div  style='text-align: center; width:100%'><b>Advertisement wall posts disabled ;-)</b></div>");
}, 2000);