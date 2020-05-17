// ==UserScript==
// @name       	Video Banner Remover
// @namespace  	https://github.com/mgfox/userscripts/
// @version    	0.1.6
// @description This script removes video banner from fextralife wiki
// @include     https://*.wiki.fextralife.com/*
// @grant       none
// @license     MIT
// ==/UserScript==


if (location.href.search("wiki.fextralife.com") > -1) {
  
  var func = function(){
    var removed = 0
    var ID_LIST = ["menu-add-a", "menu-add-b", "video-stream-container", "sidebar-wrapper", "sidebar-nav"]
    var CLASS_LIST = ["ad-sidebar"]
    // remove by ID 
    for (elemId of ID_LIST) {
      var e = document.getElementById(elemId)
      if (e != null) {
        e.remove()
        removed = 1
      }
    }
    // remove by class
    for (className of CLASS_LIST) {
      var l = document.getElementsByClassName(className)
      for (i = 0; i < l.length; i++) {
        l[i].remove();
        removed = removed + 1
      }
    }
    if (removed > 0) {
      console.log("Userscript: Removed " + removed + " banner(s)")
    }
    
  }
  
  console.log("Userscript: Init")
  func()
  
  // recheck every 10 seconds
  setInterval(func, 10000);
  
} else {
  alert("Not a 'wiki.fextralife.com' site.")
}
