---
title:          Custom Unicase Webfont
long_title:     Create Custom Unicase Webfont
index_title:    Custom Unicase Webfont
slug:           create-custom-unicase-webfont
description:    Applying the small-caps keyword on the font-variant property in CSS forces the use of small capitals letters for lower case characters
page_type:      post
id:             id_12
script:         script-id_12-js.inc
date_human:     April 2017
date_machine:   2017_04_13
generator:      pagination
pagination:
  max_per_page: 12
use: [posts]
---


Unicase fonts are a bit special; they provide uppercase glyphs for lowercase characters, which means lowercase glyphs are rendered with glyphs which look just like uppercase glyphs. One should be careful using these fonts, but they have their place. If you want to create the same effect with any other font then there is the CSS property-value pair `font-variant-caps: small-caps` to the rescue <sup><a href="#note-1" class="sup-link" id="supLink1">1</a></sup>.


```language-css
.small-caps {
  font-variant-caps: small-caps;
}
```

This `font-variant-caps: small-caps` basically makes all lowercase characters appear in a (smaller) uppercase variant. There is also `text-transform: uppercase` but that works differently: try it!

<blockquote><p class="quote"><dl><dt>small-caps</dt><dd>This keyword forces the use of small capitals letters for lower case characters. It corresponds to the OpenType value <code>smcp</code>; if the font doesn't support them, it synthesizes the glyphs.</dd></dl></blockquote>

<span class="note">Note that following instructions on sub-setting webfonts are an _additional option_, not required at all to create these small-caps: one can try using just system fonts as well with `font-variant-caps: small-caps` applied.</span>

It is possible to generate your own light-weight unicase webfont with the CSS property-value pair `font-variant-caps: small-caps`, combined with the sub-setting technique when generating a web-font.

Download a free font from [FontSquirrel](//fontsquirrel.com), go to the "generator"-tab, hit "upload fonts", choose the just downloaded `.ttf` font and check the option "expert".

- Font-formats: only woff and woff2
- Truetype Hinting: Keep Existing
- Subsetting: Custom Subsetting
- Character Type:
   - Uppercase
   - Numbers
   - Punctuation
- Advanced Options:
  - Font Name Suffix: make field empty (no need for `-webfont` suffix)

Leave the rest of the options as default and check the Agreement checkbox.

Now you can download your own custom unicase font, only containing the glyphs for uppercase, numbers and punctuation, which also makes it very light-weight. Conveniently Fontsquirrel generates additional CSS with the `@fontface` rule <sup><a href="#note-2" class="sup-link" id="supLink2">2</a></sup>.

<p data-height="300" data-theme-id="71" data-slug-hash="RVwmpd" data-default-tab="css,result" data-user="atelierbram" data-embed-version="2" data-pen-title="RVwmpd" class="codepen">See the Pen <a href="http://codepen.io/atelierbram/pen/RVwmpd/">RVwmpd</a> by Bram de Haan (<a href="http://codepen.io/atelierbram">@atelierbram</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### Notes
1. <span id="note-1">There is `font-variant: small-caps` too: this is the shorthand for all ‘font-variant’ subproperties. Like other shorthands, using ‘font-variant’ resets unspecified ‘font-variant’ subproperties to their initial values.</span>
1. <span id="note-2">This will also solve any syntax issues with the `@fontface` rule, for it comes with a demo HTML - and CSS file with those rules applied. You can take those rules, maybe adept the url paths, and paste them into your CSS.</span>

#### Resources
- [font-variant on CSS-Tricks Almanac](https://css-tricks.com/almanac/properties/f/font-variant/)
- [font-variant-caps on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps)
- [the specs on font-variant-caps](https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-caps)
- [the specs on font-variant](https://drafts.csswg.org/css-fonts-3/#propdef-font-variant)


<span class="note">This article was also published on [Codepen](http://codepen.io/atelierbram/post/create-custom-unicase-webfont)</span>
