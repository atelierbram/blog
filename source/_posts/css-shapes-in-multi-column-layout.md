---
title:          CSS-Shapes
long_title:     CSS-Shapes in Multi-Column Layout
slug:           css-shapes-in-multi-column-layout
description:    Avoid breaking the layout of a multi-column-layout when using CSS-Shapes
post_type:      post
id:             id-01
script:         script-id_01-js.inc
sortOrder:      12
generator:      pagination
pagination:
  max_per_page: 12
use:
  - posts

---

## CSS-Shapes in Multi-Column Layout

<span class="dropcap">I</span>n order to avoid breaking up a `CSS-Shape` from the surrounding wrapping text to another column, (_... which is far from pretty_), when using CSS-Shapes (_to make text flow around an image or an object_) within a <strong>multi-column layout</strong>: one can use the property `break-inside` with the value `avoid-column` on the wrapping element:
<p class="publication-list__item__meta"><time datetime="2014-09-07">September 2014</time></p>

```language-css
.wrap-module {
  break-inside: avoid-column;
}
```

Consider the following `HTML`-markup one would need in order to achieve this:

```language-markup
<div class="wrap-module">
<div class="shape-rect"></div>
  <p class="has-pullquote" data-pullquote="Eligendi cumque ...">
     Lorem ipsum ...
   </p>
</div>
```

That is quite some extra `HTML`-markup for pretty decoration. In [this example](http://codepen.io/atelierbram/pen/Iujdi) <sup><a href="#note-1" class="sup-link" id="supLink1">1</a></sup> those elements are inserted into the page with (jQuery) javascript, to keep the `HTML` clean (here is [a fork of this pen in plain-vanilla javascript](http://codepen.io/atelierbram/pen/aoKus/), with _slightly different_ nesting of elements). Here the `CSS-Shape` is combined with the classic [pullquote with data-attributes trick](http://codepen.io/aarongustafson/pen/zxKdh), which will even make more sense in the near future. <sup><a href="#note-2" class="sup-link" id="supLink2">2</a></sup>

Here the `.shape-rect` could be a rectangle made with the property `shape-outside` with the `polygon` values:

```language-css
.shape-rect {
  shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  float: right;
  shape-margin: 1em;
  width: 16em;
  height: 16em;
}
```

This is what makes it all work: wrapping the text around the shape.

#### Examples
- [example markup inserted with jQuery](http://codepen.io/atelierbram/pen/Iujdi)
- [example markup inserted with plain-vanilla javascript](http://codepen.io/atelierbram/pen/aoKus/)

#### Notes
1. <span id="note-1">Disclaimer: the example has many pullquotes: normally one wouldn’t use this many pullquotes on one page, but this is just in order to show it _not breaking the layout_. One can test this by dragging the browser-window, and maybe also see what happens when removing the `.wrap-module` declaration from the `CSS`.</span>
1. <span id="note-2">One day we will be able to use [`shape-inside` and CSS Exclusions](http://alistapart.com/article/css-shapes-101#section8) for this, but here and now, the pullquote-text pseudo-element is positioned `absolute` right on top of the `CSS-Shape` itself.</span>

<span class="note">This article was also published on [Codepen](http://codepen.io/atelierbram/post/css-shapes-in-multi-column-layout)</span>
