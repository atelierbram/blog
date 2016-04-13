function featureDetect() {
        "use strict";
        document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
        if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {
            document.documentElement.className = document.documentElement.className.replace(/\bcore\b/g, '') + ' enhanced ';
        }
        var s = document.body || document.documentElement,
            s = s.style;
        if (s.webkitFlexWrap == '' || s.msFlexWrap == '' || s.flexWrap == '') {
            document.documentElement.className = document.documentElement.className.replace(/\bno-flexbox\b/g, '') + ' flexbox ';
        }
}
featureDetect();
