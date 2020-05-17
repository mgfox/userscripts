javascript:(function(){
  if (location.href.search("wiki.fextralife.com") > -1) {
    var ID_LIST = ["menu-add-a", "menu-add-b", "video-stream-container", "sidebar-wrapper", "sidebar-nav"]
    var CLASS_LIST = ["ad-sidebar"]
    // remove by ID 
    for (elemId of ID_LIST) {
      var e = document.getElementById(elemId)
      if (e != null) {
        e.remove()
      }
    }
    // remove by class
    for (className of CLASS_LIST) {
      var l = document.getElementsByClassName(className)
      for (i = 0; i < l.length; i++) {
        l[i].remove();
      }
    }
    alert("Removed " + removed + " banner(s)")
  } else {
    alert("Not a 'wiki.fextralife.com' site.")
  }  
})();
