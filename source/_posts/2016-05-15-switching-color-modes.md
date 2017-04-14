---
title:          Switching Modes
long_title:     Switching Color Modes in SVG
index_title:    Switching Color Modes in SVG
slug:           switching-color-modes
description:    Switch between monochrome and full-color mode in SVG with custom data-attributes
page_type:      post
id:             id_09
script:         script-id_09-js.inc
date_human:     May 2016
date_machine:   2016_05_15
generator:      pagination
pagination:
  max_per_page: 12
use: [posts]

---

Common practice with showing a serie of logos in an attractive way in a webpage, is to present gray scaled – or monochrome versions, to neutralize the (_potentially clashing_) distracting colors from the images. One way of doing this could be to manipulate the full-color images in photo-editing software and save copies in gray scaled versions. An even quicker way would be to use css– or svg-filters.

<p class="publication-list__item__meta"><time datetime="{{ page.date_machine|replace({'_':'-'}) }}">{{ page.date_human }}</time></p>

With <span class="small-caps">CSS</span>-filters one is limited to the grayscale- or sepia filters, which will be sufficient in most use-cases. <span class="small-caps">SVG</span> filters are more powerful and have more options, while being more complex in a syntax which may have to be studied to be used well (_in a more customized way_).

### Alternative approach with SVG
In this article I like to explore a different workflow, and suggest an alternative approach. It won’t be harder to  accomplish but it will be more work, and harder to maintain. But it can be better suitable for let’s say a logo gallery for a graphic designer on a portpolio website, where demands on (the quality and appearance of) the images will be of more outspoken nature, because graphic designers are of a separate species; they have ink flowing through their veins.

> Graphic designers are of a separate species; they have ink flowing through their veins

In using the `currentColor` keyword in <span class="small-caps">CSS</span> combined with `opacity` for logos we can get monochrome images in just one color but keep the possibility to have gradations in tonality, like it is done [at Logomoon](http://logomono.com/). `Data-attributes`<sup><a href="#note-1" class="sup-link" id="supLink1">1</a></sup> (for values of colors and opacity on <span class="small-caps">SVG</span> shapes) combined with javaScript can make switching between the monochrome-and full-color mode happen by the click of a button.

The flexibility of the <span class="small-caps">CSS</span> keyword `currentColor` can be used here to our advantage; `currentColor` picks up whatever value for color is set on – or is inherited by – the element in <span class="small-caps">CSS</span>, and behaves in that way like a variable. Whenever the color of the monochrome images needs to be changed, this can be done by editing just one value in the <span class="small-caps">CSS</span>.

```language-markup
<polygon
  opacity="0.56"
  fill="currentColor"
  data-color="#E44D26"
  data-opacity="0.56"
  points="107.644,470.877 74.633,100.62 437.367,100.62 404.321,470.819 255.778,512"/>
```

<p data-height="750" data-theme-id="71" data-slug-hash="xVXWWR" data-default-tab="result" data-user="atelierbram" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/atelierbram/pen/xVXWWR/">Monochrome SVG Logo Gallery</a> by Bram de Haan (<a href="http://codepen.io/atelierbram">@atelierbram</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

How this color-mode switching works in the demo: the default mode is monochrome, and the values for `fill` are stored in custom data-attributes.

### DIY tinkering
One trick to get the right values for opacity is to have another instance of your <span class="small-caps">SVG</span> image temporarily on the page, or a copy of the whole page, but now with using <span class="small-caps">CSS</span>-filter grayscale, like `-webkit-filter: grayscale(1);`. When setting a `background-color: hsl(0,0%,0%)` on the page and moving the last value for lightness up and down with the arrow keys of your keyboard within DevTools, in comparison to the grayness of the <span class="small-caps">SVG</span>-image, this will give you the right number, when you subtract it from 100.

#### Notes
1. <span id="note-1">It seems `data-*` attributes on <span class="small-caps">SVG</span> elements are officially supported [in the current draft of <span class="small-caps">SVG2</span>](https://github.com/w3c/svgwg/commit/1cb4ee9e165b3d777d33828da8fa757e67d019ff). The current spec allows the xml methods of custom name-spaces, but these are [hard to handle](https://www.youtube.com/watch?v=1ZxN9iQM7OY) and a pain to use for targeting elements with javaScript. As far as I know all major browsers tolerate data-attributes in <span class="small-caps">SVG</span>.</span>

#### Resources
- [Logomono](http://logomono.com/)
- [Smarter SVG filters](http://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters)
- [currentColor on CSS-tricks](https://css-tricks.com/currentcolor/)
- [Keeping CSS short with currentColor](http://osvaldas.info/keeping-css-short-with-currentcolor)
- [Extending the Color Cascade](http://blogs.adobe.com/dreamweaver/2015/02/extending-the-color-cascade-with-the-css-currentcolor-variable.html)

<span class="note">This article was also published on [Codepen](http://codepen.io/atelierbram/post/switching-color-modes)</span>
