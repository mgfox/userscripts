// ==UserScript==
// @name       	Video Banner Remover
// @namespace  	https://github.com/mgfox/userscripts/
// @version    	0.1.4
// @description This script removes video banner from fextralife wiki
// @include     https://*.wiki.fextralife.com/*
// @grant       none
// @license     MIT
// ==/UserScript==


if (location.href.search("wiki.fextralife.com") > -1) {
  
  var func = function(){
    var removed = 0
    // remove by ID 
    for (elemId in ["menu-add-a", "menu-add-b", "video-stream-container", "sidebar-wrapper", "sidebar-nav"]) {
      console.log("Userscript: Checking for id=" + elemId + " ...")
      var e = document.getElementById(elemId)
      if (e != null) {
        e.remove()
        removed = 1
        console.log("Userscript: Element id=" + elemId + " removed")
      } else {
        console.log("Userscript: Element id=" + elemId + " not found")
      }
    }
    for (className in ["ad-sidebar"]) {
    var l = document.getElementsByClassName(className)
      for (i = 0; i < l.length; i++) {
        l[i].remove();
        removed = removed + 1
      }
    }
    if (removed > 0) {
      console.log("Userscript: Removed " + removed + " banner(s)")
    } else {
      console.log("Userscript: No new banners detected")
    }
    
  }
  
  console.log("Userscript: Init")
  func()
  setInterval(func, 500);
  
} else {
  alert("Not a 'wiki.fextralife.com' site.")
}
