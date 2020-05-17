// ==UserScript==
// @name       	Video Banner Remover
// @namespace  	https://github.com/mgfox/userscripts/
// @version    	0.1
// @description This script removes video banner from fextralife wiki
// @include     https://*.wiki.fextralife.com/*
// @grant       none
// @license     MIT
// ==/UserScript==

if (location.href.search("wiki.fextralife.com") > -1) {
  document.getElementById("menu-add-b").remove()
  console.log("Userscript: video banner removed")
} else {
  alert("Not a 'wiki.fextralife.com' site.")
}