---
extends: _layouts.post
section: content
title:          Alpha Transparency
long_title:     Alpha Transparency In 8 Digits Hex Notation
index_title:    Alpha Transparency In Hex
slug:           alpha-transparency-in-hex
description:    Where alpha transparency in 8 digits hex notation can be usefull
page_type:      post
id:             "id_10"
script:         "script-id_10-js.blade.php"
date_human:     July 2016
date_machine:   "2016-07-15"
date:   2016-07-15
intro: "Maybe early days, but coming to a browser near you some day: alpha transparency in 8 digits hex notation; currently supported in Chrome Canary and Firefox Nightly. Some thoughts here on how and why this could be useful."
---

Maybe early days, but coming to a browser near you some day: alpha transparency in 8 digits hex notation; currently supported in Chrome Canary and Firefox Nightly. Some thoughts here on how and why this could be useful.

<p class="publication-list__item__meta"><time datetime="{!! $page->date_machine !!}">{{ $page->date_human }}</time></p>

Now <span class="small-caps">HEXA</span> doesn’t have the most intuitive syntax, <span class="small-caps">[HSLA](//css-tricks.com/yay-for-hsla/)</span> has, and the alpha transparency isn’t making live easier. But we have tools for this build right into the browser: you can check this out in Chrome Canary or in Firefox Nightly DevTools:
<div class="container-media container-media-square">
<video width="512" controls autoplay>
  <source src="//atelierbram.github.io/video/color-formats-firefox-devtools.mp4" type="video/mp4">
  <source src="//atelierbram.github.io/video/color-formats-firefox-devtools.ogg" type="video/ogg">
  Your browser doesn't support HTML5 video tag.
</video>
</div>

### Use case in color templating
So what could use cases for <span class="small-caps">HEXA</span> be? Maybe easier color manipulation in javaScript for some, but also templating. Consider this code snippet in a template for Prism syntax-highlighting in [Base16 Builder](//github.com/base16-builder/base16-builder/):

<pre><code class="language-css">
.line-highlight {
  background: #<%- base["D0"]["hex"] %>33;
  background: linear-gradient(to right, #<%- base["D0"]["hex"] %>33 70%, #<%- base["D0"]["hex"] %>00);
}
</code></pre>

Which (for one colorscheme) would compile to this <span class="small-caps">CSS</span>:

<pre><code class="language-css">
.line-highlight {
  background: #bc672f33;
  background: linear-gradient(to right, #bc672f33 70%, #bc672f00);
}
</code></pre>

Because Base16 schemes only allows color-values for variables to be defined in <span class="small-caps">HEX</span> notation _in schemes_, these color-variables can now be manipulated by adding 2 digits after the variables _in templates_, and by doing so give those colors alpha transparency (in browsers that support it).

To see if your browser supports alpha transparency in 8 digits hex notation: <span style="font-size:2em;background-color:#263573f2;color:hsla(228, 50%, 30%, 0.5);display:inline-block;margin-top:.5em">Unfortunately your browser does not support alpha transparency in <span class="small-caps">HEX</span> yet</span><br><span style="color:#fff;color:#808080;display:inline-block;margin-top:1em;font-size:1.25em">Your browser supports alpha transparency in <span class="small-caps">HEX</span>!</span> <br>And/or checkout [this demo](//codepen.io/atelierbram/full/bZAGmW/).

#### Resources
- [the spec](//drafts.csswg.org/css-color/#hex-notation)
- [demo on github by Google Chrome](//googlechrome.github.io/samples/css-alpha-channel/)
- [on MDN](//developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgba)
- [in Firefox DevTools](//twitter.com/patrickbrosset/status/732859240147243008)
- [Alpha Transparency in CSS](//thenewcode.com/1081/CSS-alpha#hexalpha)
- [Using Hexadecimal Colors in CSS](//thenewcode.com/1108/Using-Hexadecimal-Colors-in-CSS)

<span class="note">This article was also published on [Codepen](//codepen.io/atelierbram/post/alpha-transparency-in-hex)</span>
