---
    title:          CSS-Shapes in Multi-Column Layout
    short-title:    CSS-Shapes in Multi-Column Layout
    type:           page
    sortOrder:      12
    description:    Avoid breaking the layout of a multi-column-layout when using CSS-Shapes
---

## CSS-Shapes in Multi-Column Layout

In order to avoid breaking up a `CSS-Shape` from the surrounding wrapping text to another column, (_... which is far from pretty_), when using CSS-Shapes (_to make text flow around an image or an object_) within a <strong>multi-column layout</strong>: one can use the property `break-inside` with the value `avoid-column` on the wrapping element:

```css
.wrap-module {
  break-inside: avoid-column;
}
```

Consider the following `HTML`-markup one would need in order to achieve this:

```markup
<div class="wrap-module">
<div class="shape-rect"></div>
  <p class="has-pullquote" data-pullquote="Eligendi cumque ...">
     Lorem ipsum ...
   </p>
</div>
```

That is quite some extra `HTML`-markup for pretty decoration. In [this example](http://codepen.io/atelierbram/pen/Iujdi) <sup>[1]</sup> those elements are inserted into the page with (jQuery) javascript, to keep the `HTML` clean (here is [a fork of this pen in plain-vanilla javascript](http://codepen.io/atelierbram/pen/aoKus/), with _slightly different_ nesting of elements). Here the `CSS-Shape` is combined with the classic [pullquote with data-attributes trick](http://codepen.io/aarongustafson/pen/zxKdh), which will even make more sense in the near future.<sup>[2]</sup>

Here the `.shape-rect` could be a rectangle made with the property `shape-outside` with the `polygon` values:

```css
.shape-rect {
  shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  float: right;
  shape-margin: 1em;
  width: 16em;
  height: 16em;
}
```

This is what makes it all work: wrapping the text around the shape.

<span class="note">This article was also published on [Codepen](http://codepen.io/atelierbram/blog/css-shapes-in-multi-column-layout)</span>

### Examples
- [example markup inserted with jQuery](http://codepen.io/atelierbram/pen/Iujdi)
- [example markup inserted with plain-vanilla javascript](http://codepen.io/atelierbram/pen/aoKus/)

### Notes
1. Disclaimer: the example has many pullquotes: normally one wouldn’t use this many pullquotes on one page, but this is just in order to show it _not breaking the layout_. One can test this by dragging the browser-window, and maybe also see what happens when removing the `.wrap-module` declaration from the `CSS`.
1. One day we will be able to use [`shape-inside` and CSS Exclusions](http://alistapart.com/article/css-shapes-101#section8) for this, but here and now, the pullquote-text pseudo-element is positioned `absolute` right on top of the `CSS-Shape` itself.
