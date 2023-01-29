---
extends: _layouts.post
section: content
title:          CSS-Shapes
long_title:     CSS-Shapes in Multi-Column Layout
index_title:    CSS-Shapes in Multi-Column Layout
slug:           css-shapes-in-multi-column-layout
description_post:    Avoid breaking the layout of a multi-column-layout when using CSS-Shapes
page_type:      post
id:             "id_01"
script:         "script-id_01-js.blade.php"
date_human:     September 2014
date_machine:   "2014-09-07"
date:   2014-09-07
intro: "In order to avoid breaking up a css-shape from the surrounding wrapping text to another column, (<i>&hellip; which is far from pretty</i>), when using <span class='small-caps'>CSS</span>-Shapes (<i>to make text flow around an image or an object</i>) within a <strong>multi-column layout</strong>: one can use the property <code>break-inside</code> with the value <code>avoid-column</code> on the wrapping element:"
---

In order to avoid breaking up a css-shape from the surrounding wrapping text to another column, (_&hellip; which is far from pretty_), when using <span class='small-caps'>CSS</span>-Shapes (_to make text flow around an image or an object_) within a <strong>multi-column layout</strong>: one can use the property `break-inside` with the value `avoid-column` on the wrapping element:

<p class="publication-list__item__meta"><time datetime="{!! $page->date_machine !!}">{{ $page->date_human }}</time></p>

<pre><code class="language-css">
.wrap-module {
  break-inside: avoid-column;
}
</code></pre>

Consider the following <span class="small-caps">HTML</span>-markup one would need in order to achieve this:

<pre><code class="language-markup">
&lt;div class="wrap-module"&gt;
&lt;div class="shape-rect"&gt;&lt;/div&gt;
  &lt;p class="has-pullquote" data-pullquote="Eligendi cumque ..."&gt;
     Lorem ipsum ...
   &lt;/p&gt;
&lt;/div&gt;
</code></pre>

That is quite some extra <span class="small-caps">HTML</span>-markup for pretty decoration. In [this example](//codepen.io/atelierbram/pen/Iujdi) <sup><a href="#note-1" class="sup-link" id="supLink1">1</a></sup> those elements are inserted into the page with (jQuery) javascript, to keep the <span class="small-caps">HTML</span> clean (here is [a fork of this pen in plain-vanilla javascript](//codepen.io/atelierbram/pen/aoKus/), with _slightly different_ nesting of elements). Here the <span class="small-caps">CSS</span>-Shape is combined with the classic [pullquote with data-attributes trick](//codepen.io/aarongustafson/pen/zxKdh), which will even make more sense in the near future. <sup><a href="#note-2" class="sup-link" id="supLink2">2</a></sup>

Here the `.shape-rect` could be a rectangle made with the property `shape-outside` with the `polygon` values:

<pre><code class="language-css">
.shape-rect {
  shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  float: right;
  shape-margin: 1em;
  width: 16em;
  height: 16em;
}
</code></pre>

This is what makes it all work: wrapping the text around the shape.

#### Examples
- [example markup inserted with jQuery](//codepen.io/atelierbram/pen/Iujdi)
- [example markup inserted with plain-vanilla javascript](//codepen.io/atelierbram/pen/aoKus/)

#### Notes
1. <span id="note-1">Disclaimer: the example has many pullquotes: normally one wouldn’t use this many pullquotes on one page, but this is just in order to show it _not breaking the layout_. One can test this by dragging the browser-window, and maybe also see what happens when removing the `.wrap-module` declaration from the <span class="small-caps">CSS</span>.</span>
1. <span id="note-2">One day we will be able to use [`shape-inside` and css exclusions](//alistapart.com/article/css-shapes-101#section8) for this, but here and now, the pullquote-text pseudo-element is positioned `absolute` right on top of the css-shape itself.</span>

<span class="note">This article was also published on [Codepen](//codepen.io/atelierbram/post/css-shapes-in-multi-column-layout)</span>

