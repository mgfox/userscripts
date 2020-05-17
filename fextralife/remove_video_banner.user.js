// ==UserScript==
// @name       	Video Banner Remover
// @namespace  	https://github.com/mgfox/userscripts/
// @version    	0.1.1
// @description This script removes video banner from fextralife wiki
// @include     https://*.wiki.fextralife.com/*
// @grant       none
// @license     MIT
// ==/UserScript==


if (location.href.search("wiki.fextralife.com") > -1) {
  
  setInterval(function(){
    var removed = 0
    var d = document.getElementById("menu-add-b")
    if (d != null) {
      d.remove()
      removed = 1
    }
    var l = document.getElementsByClassName("ad-sidebar")
    for (i = 0; i < l.length; i++) {
      l[i].remove();
      removed = removed + 1
    }
    var v = document.getElementById("video-stream-container")
    if (d != null) {
      d.remove()
      removed = removed + 1
    }
    if (removed > 0)
      console.log("Userscript: Removed " + removed + " banner(s)")
  }, 500);
  
} else {
  alert("Not a 'wiki.fextralife.com' site.")
}
