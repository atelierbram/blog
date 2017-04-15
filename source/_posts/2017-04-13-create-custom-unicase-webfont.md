---
title:          Unicase Webfont
long_title:     Create Custom Unicase Webfont
index_title:    Unicase Webfont
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


Unicase fonts are a bit special; they provide uppercase glyphs for lowercase characters, which means lowercase glyphs are rendered with glyphs which look just like uppercase glyphs. One should be careful using these fonts, but they have their place. If you want to create the same effect with any other font then there is the <span class="small-caps">CSS</span> property-value pair `font-variant-caps: small-caps` to the rescue <sup><a href="#note-1" class="sup-link" id="supLink1">1</a></sup>.

<p class="publication-list__item__meta"><time datetime="{{ page.date_machine|replace({'_':'-'}) }}">{{ page.date_human }}</time></p>

```language-css
.small-caps {
  font-variant-caps: small-caps;
}
```

This `font-variant-caps: small-caps` basically makes all lowercase characters appear in a smaller uppercase version, unlike `text-transform: uppercase` which scales the height of the glyphs up. It has to be mentioned though that this likely will only _approach_ the look of a font with true small caps though. Because uppercase characters in a regular font often are a tiny bit thinner, they may look fragile when scaled down to small caps size compared with lowercase characters of the same size. One way to fight this is to choose a medium weight font to begin with; more on this later. Adding some letter-spacing also makes them look better in my eyes.

<blockquote><dl class="quote"><dt>small-caps</dt><dd>This keyword forces the use of small capitals letters for lower case characters. It corresponds to the OpenType value <code>smcp</code>; if the font doesn't support them, it synthesizes the glyphs.</dd></dl></blockquote>

<span class="note">Note that following instructions on sub-setting webfonts are an _additional option_, not required at all to create these small-caps: one can try using just system fonts as well with `font-variant-caps: small-caps` applied.</span>

It is possible to generate your own light-weight unicase webfont with the <span class="small-caps">CSS</span> property-value pair `font-variant-caps: small-caps`, combined with the sub-setting technique when generating a web-font.

Download a free font from [FontSquirrel](//fontsquirrel.com), in my experience medium weights work best, because scaled down uppercase characters tend to look too fragile. Go to the "generator"-tab, hit "upload fonts", choose the just downloaded `.ttf` font and check the option "expert".

- Font-formats: only woff and woff2
- Truetype Hinting: Keep Existing
- Subsetting: Custom Subsetting
- Character Type:
   - Uppercase
   - Numbers
   - Punctuation
- CSS: when wanting to embed the font as a Base64 string in your stylesheet, check: Base64 Encode
- Advanced Options:
  - Font Name Suffix: make field empty (no need for `-webfont` suffix)

Leave the rest of the options as default and check the Agreement checkbox.

Now you can download your own custom unicase font, only containing the glyphs for uppercase, numbers and punctuation, which also makes it very light-weight. Conveniently FontSquirrel generates additional <span class="small-caps">CSS</span> with the `@fontface` rule <sup><a href="#note-2" class="sup-link" id="supLink2">2</a></sup> applied.

> Never use capital letters to accentuate words in running copy. They stick out far too much spoiling the look of the column or page. Use italics instead. If you have to set words in capitals, use proper small caps with or without initial capitals. <small class="author">Erik Spiekermann</small>

### Examples

```language-html
Ninety <span class="small-caps">JPG</span> files on <span class="small-caps">CD-ROM</span>.
<span class="small-caps">HTML</span>, <span class="small-caps">CSS</span> and javaScript.
```

```language-css
@supports (font-variant-caps:  small-caps) {
  .small-caps {
    text-transform: lowercase;
    font-variant-caps: small-caps;
  }
}
```

Ninety <span class="small-caps">JPG</span> files on <span class="small-caps">CD-ROM</span>.

<span class="small-caps">HTML</span>, <span class="small-caps">CSS</span> and javaScript.

<p data-height="300" data-theme-id="71" data-slug-hash="RVwmpd" data-default-tab="css,result" data-user="atelierbram" data-embed-version="2" data-pen-title="RVwmpd" class="codepen">See the Pen <a href="http://codepen.io/atelierbram/pen/RVwmpd/">RVwmpd</a> by Bram de Haan (<a href="http://codepen.io/atelierbram">@atelierbram</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### Notes
1. <span id="note-1">There is `font-variant: small-caps` too: this is the shorthand for all ‘font-variant’ subproperties. Like other shorthands, using ‘font-variant’ resets unspecified ‘font-variant’ subproperties to their initial values.</span>
1. <span id="note-2">This will also solve any syntax issues with the `@fontface` rule, for it comes with a demo <span class="small-caps">HTML</span> - and <span class="small-caps">CSS</span> file with those rules applied. You can take those rules, maybe adept the url paths, and paste them into your <span class="small-caps">CSS</span>.</span>

#### Resources
- [font-variant on CSS-Tricks Almanac](https://css-tricks.com/almanac/properties/f/font-variant/)
- [font-variant-caps on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps)
- [the specs on font-variant-caps](https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-caps)
- [the specs on font-variant](https://drafts.csswg.org/css-fonts-3/#propdef-font-variant)
- [I Love Typograhpy on small caps](http://ilovetypography.com/2008/02/20/small-caps/)
- [Practical Typograhpy on small caps](http://practicaltypography.com/small-caps.html)
- [Erik Spiekermann’s Typo Tips](http://fontfeed.com/archives/erik-spiekermanns-typo-tips/)

<span class="note">This article was also published on [Codepen](http://codepen.io/atelierbram/post/create-custom-unicase-webfont)</span>
