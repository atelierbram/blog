var root = document.documentElement;

function featureDetect() {
        "use strict";
        root.className = root.className.replace(/\bno-js\b/g, '') + ' js ';
        if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
            root.className = root.className.replace(/\bcore\b/g, '') + ' enhanced ';
        }
        var s = document.body || root,
            s = s.style;
        if (s.webkitFlexWrap == '' || s.msFlexWrap == '' || s.flexWrap == '') {
            root.className = root.className.replace(/\bno-flexbox\b/g, '') + ' flexbox ';
        }
}
featureDetect();
/*
 * http://blog.simonwillison.net/post/57956760515/addloadevent
 * http://www.sitepoint.com/closures-and-executing-javascript-on-page-load/
 */
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

// addLoadEvent(nameOfSomeFunctionToRunOnPageLoad);
addLoadEvent(function() {
  /* more code to run on page load */
  /* put class on html-element when page is loaded */
  // var root = document.documentElement;
  root.className = root.className + ' is-loaded'
});
