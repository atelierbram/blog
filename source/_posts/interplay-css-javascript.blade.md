---
extends: _layouts.post
section: content
title:          Interplay
long_title:     Interplay between CSS and Javascript on Transitions
index_title:    Interplay between CSS and Javascript
slug:           interplay-css-javascript
description:    Make CSS and Javascript cooperate on your own terms
page_type:      post
id:             "id_03"
script:         "script-id_03-js.blade.php"
date_human:     September 2014
date_machine:   "2014-09-23"
date:   2014-09-23
intro: "Animating the height of an element with only <span class='small-caps'>CSS</span> is possible with the <code>max-height</code> property, giving the begin value a <code>max-height</code> of zero and (<i>let's say</i>) the 'hovered' value some high number <i>“that will always be higher then the real height of the highest animated element”</i>. The outcome of the results can vary quite a bit, depending on the differences between all these values: &hellip;"
---

Animating the height of an element with only <span class='small-caps'>CSS</span> is possible with the <code>max-height</code> property, giving the begin value a <code>max-height</code> of zero and (<i>let's say</i>) the 'hovered' value some high number <i>“that will always be higher then the real height of the highest animated element”</i>. The outcome of the results can vary quite a bit, depending on the differences between all these values: not satisfying in all scenarios. An alternative way is using <code>height: 0</code> in combination with a set value for <code>padding-bottom</code>.

<p class="publication-list__item__meta"><time datetime="{!! $page->date_machine !!}">{{ $page->date_human }}</time></p>

### Animating padding-bottom with CSS-Transitions
But to know these values for `padding-bottom` <sup><a href="#note-1" class="sup-link" id="supLink1">1</a></sup> one will have to know the height of each element. With only a small amount of dropdown-lists to be styled, one might be tempted to hardcode those values in. But what if someone (, and maybe even not you) wants to add an item to one of these lists in the future? Now one will have to change this value in the <span class="small-caps">CSS</span> _every time again_ when the number of items in the <span class="small-caps">HTML</span> changes, which can be anoying.

### Javascript to the rescue
Since one can know the height of one individual list-item in the dropdown, (because we have a set `font-size`, `padding`, and even use a web-font), one can calculate the height of each list by multiplying this value with the number of list-items that are in the list. To count the number of list-items in each dropdown list with javascript one can use the `length` method.


<pre><code class="language-javascript">
var itms = {
home    : $("#tt-home li").length),
blog    : $("#tt-blog li").length),
books   : $("#tt-books li").length),
goodies : $("#tt-goodies li").length),
media   : $("#tt-media li").length),
news    : $("#tt-news li").length),
contact : $("#tt-contact li").length)
};
</code></pre>

Now one can add the outcome: this number, on a class, which is then added with javascript on each parent dropdown list-item. In jQuery we can use `$each` in a function to get the number of list-items in each list:

<pre><code class="language-javascript">
$.each( itms, function( i, val ) {
  $( "#tt-" + i ).addClass('tt-nav__itemcount-'+val);
});
</code></pre>

Switching to Sass, we can make a function there which will output the values for `padding-bottom` on every matching “submenu-parent” like so:


<pre><code class="language-javascript">
$item-count-list: 1 2 3 4 5 6 7 8 9 10;
$item-value-list: 46px 92px 138px 184px 230px 276px 322px 368px 414px 460px;
for $i from 1 through length($item-count-list) {
  [class*="itemcount-#{$i}"]:hover .tt-nav__submenu {
    padding-bottom: nth($item-value-list, $i);
   }
}
</code></pre>

The generated <span class="small-caps">CSS</span> <sup><a href="#note-2" class="sup-link" id="supLink2">2</a></sup>:

<pre><code class="language-css">
[class*="itemcount-5"]:hover .tt-nav__submenu {
  padding-bottom: 230px;
}
</code></pre>

### Minimal transition in CSS
In the <span class="small-caps">CSS</span> one should have declarations for the different ‘states’, but the definition can be quite minimal:

<pre><code class="language-scss">
/* Submenu - shared properties and values */
.tt-nav__submenu {
  transition: padding-bottom .75s cubic-bezier(0.6, 0.4, 0.25, 0.75);
  height: 0;
  padding: 0;
}

.tt-nav__item:hover .tt-nav__submenu {
// maybe include a fallback for padding-bottom when javascript is not available:
  padding-bottom: 460px;
}

// Sass function after this,
// outputting the different values for `padding-bottom`
// as explained above:
// $item-count-list: 1 2 3 4 5 6 7 8 9 10;
// $item-value-list: 46px 92px ... and so on;
</code></pre>

One can also provide a fall-back value for `padding-bottom` on the active/hover state (_value should be matching the highest current element, which will then be overridden by the values outputted by the `Sass`-function_) in order to make it always appear, even without javascript (, as shown above).

### Interplay
Then there it is: a <span class="small-caps">DIY</span> <sup><a href="#note-3" class="sup-link" id="supLink3">3</a></sup> cooperation between <span class="small-caps">CSS</span> and Javascript, responding fast and snappy, because it benefits from modern browser’s native capabilities with using <span class="small-caps">CSS</span>-transitions.

#### Examples
- [responsive dropdown demo](//codepen.io/atelierbram/pen/AHwyr) - Disclaimer: this is a prototype: there will be more robust javascript implementations for dropdown menu’s tested on multiple devices out there (like Foundation/Bootstrap).
- [example build on Bootstrap-3](//codepen.io/atelierbram/pen/vymHL/) -  extended with [hover-dropdown-plugin](//github.com/CWSpear/bootstrap-hover-dropdown) by [Cameron Spear](//cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/) - [fork of repo on Github](//github.com/atelierbram/bootstrap-hover-dropdown) - toggle links are clickable, as far as I know works on mobile, but javascript could be improved upon (I am aware that the animation could be done with jQuery `slideDown()` too, I just like the <span class="small-caps">DIY</span> <sup>3</sup> aspect: the tinkering, and the fact the transitions are done by the `<span class="small-caps">CSS</span>, which has it's own (long-term) advantage.)

#### Notes
1. <span id="note-1">Probably can also use `height` instead of `padding-bottom` since we are not using `height: auto` here, which (_used to?_)
require `max-height` instead of `height`, but I wanted to be carefull here, avoid confusion by not mixing those concepts.</span>
1. <span id="note-2">One of them declarations: it outputs 10 of those, see also [this Github Gist](//gist.github.com/atelierbram/a88e3811173bb9d75b40), or this [reduced testcase here on CodePen](//codepen.io/atelierbram/pen/CBLaw)</span>
1. <span id="note-3">do it yourself</span>

<span class="note">This article was also published on [Codepen](//codepen.io/atelierbram/post/interplay-css-javascript).</span>
