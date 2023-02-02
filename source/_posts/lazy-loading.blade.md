---
extends: _layouts.post
section: content
title:          Lazy Loading
long_title:     Lazy Loading Logos
index_title:    Lazy Loading Logos
slug:           lazy-loading
description:    Lazy load images with javascript by replacing a small inline SVG data URI with embedded text on the src-tag with the url of the image stored in a data-attribute.
page_type:      post
id:             "id_11"
script:         "script-id_11-js.blade.php"
date_human:     February 2017
date_machine:   "2017-02-19"
date:   2017-02-19
intro: "Tweaking a method for the lazy loading of images made me think the result could be described as progressively enhancing images. By replacing – with javaScript – a small inline <span class='small-caps'>SVG</span> data <span class='small-caps'>URI</span> with only embedded text inside on the src-tag with the url of the external image stored in a data-attribute."
---

Tweaking a method for the lazy loading of images made me think the result could be described as progressively enhancing images. By replacing – with javaScript – a small inline <span class='small-caps'>SVG</span> data <span class='small-caps'>URI</span> with only embedded text inside on the src-tag with the url of the external image stored in a data-attribute.

<p class="publication-list__item__meta"><time datetime="{!! $page->date_machine !!}">{{ $page->date_human }}</time></p>

Keep in mind this is about loading <span class="small-caps">SVG</span> (vector) images, like in a logo.

The original technique would use a 1px square transparent url-encoded inline image, which would be replaced with the url of the full-sized image **on page load** with javaScript. The url of the latter image is stored in a data-attribute of that same image:

<pre><code class="language-html">
 &lt;img data-src="assets/img/svg/logo-lll_456x60.svg"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
      alt="logo for Lazy Loading Logos"
      class="logo" width="456" height="60"&gt;
</code></pre>

We will need an `addLoadEvent` function:

<pre><code class="language-javascript">
/*
 * //blog.simonwillison.net/post/57956760515/addloadevent
 * //www.sitepoint.com/closures-and-executing-javascript-on-page-load/
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
</code></pre>

The javaScript function will look for elements in the <abbr title="Document Object Model" class="small-caps">DOM</abbr> with the `data-src` attribute, and replace the value for the `src` attribute with the value stored in the `data-src` attribute on that same `img` element.

<pre><code class="language-javascript">
function loadImg() {
  var imgDefer = document.querySelectorAll('[data-src]')
    for (var i=0; iw&lt;imgDefer.length; i++) {
      if(imgDefer[i].getAttribute('data-src')) {
        imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
      }
    }
}
addLoadEvent(loadImg);
</code></pre>

Now when, for whatever reason, the page takes too long to load on a clients browser, or when javaScript isn’t working, this would result in leaving a blank space at the place where the image should be. But instead of the 1px square transparent <span class="small-caps">PNG</span>, we can use an (url encoded) inline <span class="small-caps">SVG</span> with just a text-attribute inside. In that way, even with javaScript disabled, there will always be visual information on the subject there.

<pre><code class="language-html">
 &lt;img data-src="assets/img/svg/logo-lll_456x60.svg"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'
      width='456' height='60'
      viewBox='0 0 456 60'%3E%3Ctext x='16' y='43'
      style='text-anchor:start;font-size:44px;font-family:Calibri,AvenirNextCondensed-DemiBold,Segoe UI,Tahoma,sans-serif;font-weight:bold;letter-spacing:-.4px;fill:rgb(34,34,34)'%3ELazy Loading Logos%3C/text%3E%3C/svg%3E"
      alt="logo for Lazy Loading Logos" class="logo"
      width="456" height="60"&gt;
</code></pre>

Note the inline style-tag on the `text` attribute, with values for basic typographic properties applied. The `x` and `y` attributes are for the positioning of the text.

#### Demo

- [here on Github](//atelierbram.github.io/lazy-loading-logos/)
- [on Codepen](//codepen.io/atelierbram/pen/YNoNZw)

#### Resources

- [addLoadEvent](//blog.simonwillison.net/post/57956760515/addloadevent)
- [closures-and-executing-javascript-on-page-load](//www.sitepoint.com/closures-and-executing-javascript-on-page-load/)
- [Probaly Don’t Base64 SVG](//css-tricks.com/probably-dont-base64-svg/)
- [Optimizing SVGs in data URIs](//codepen.io/tigt/post/optimizing-svgs-in-data-uris)
- [Create a 1px url encoded PNG](//png-pixel.com/)

<span class="note">This article was also published on [Codepen](//codepen.io/atelierbram/post/lazy-loading)</span>
