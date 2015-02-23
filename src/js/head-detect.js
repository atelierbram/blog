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

// Typekit loads Europa
(function(d) {
    "use strict";
  var config = {
      kitId: 'vtk5rcj',
      scriptTimeout: 3000
  },
  h = d.documentElement,
  t = setTimeout(function() {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout),
  tk = d.createElement("script"),
  f = false,
  s = d.getElementsByTagName("script")[0],
  a;
  h.className += " wf-loading";
  tk.src = '//use.typekit.net/' + config.kitId + '.js';
  tk.async = true;
  tk.onload = tk.onreadystatechange = function() {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);
    try {
        Typekit.load(config)
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s)
})(document);

// Google loads Source Code Pro
WebFontConfig = {
  google: { families: [ 'Source+Code+Pro::latin' ] }
};
(function() {
    "use strict";
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
