---
extends: _layouts.post
section: content
title:          Colorscheming
long_title:     Colorscheming for Syntax Highlighting
index_title:    Colorscheming for Syntax Highlighting
slug:           colorscheming
description:    The Process of Creating a Colorscheme for a Code Syntax Highlighting Theme
page_type:      post
id:             "id_05"
script:         "script-id_05-js.blade.php"
date_human:     May 2015
date_machine:   "2015-05-14"
date:   2015-05-14
intro: "For the last couple of years, whenever I was in the mood for it and found the time, I build colorschemes for syntax highlighting. The idea, that triggered this kind of an academic exercise in colorscheming, was to build a serie of colorschemes that would comprise the whole color gamut, each with it’s own base-color."
---

For the last couple of years, whenever I was in the mood for it and found the time, I build colorschemes for syntax highlighting. The idea, that triggered this kind of an academic exercise in colorscheming, was to build a serie of colorschemes that would comprise the whole color gamut, each with it’s own base-color.

<p class="publication-list__item__meta"><time datetime="{!! $page->date_machine !!}">{{ $page->date_human }}</time></p>

> music is centered around a tonal center, the tonic, which also determines a key. The vast majority of western music is tonal.

Like [in music](//elements-of-music.com/tonality.html#theelement), an illustration or painting can have a “tonal centre” too: I call this the “base color” <sup><a href="#note-1" class="sup-link" id="supLink1">1</a></sup>. This became the conceptual starting-point for the colorschemes I was going to create. It made sense to me to name them after general places, like Dune, Lakeside, or Savanna, to reflect a sense of place or atmosphere, if only for myself as a touchstone, and ended up creating [ten different schemes](//atelierbram.github.io/syntax-highlighting/atelier-schemes/), each with their own character.

<figure><img src="//atelierbram.github.io/syntax-highlighting/assets/img/svg/atelierschemes-demotiles-sulphurpool_1200x300.svg" alt="demotiles for Sulphurpool colorscheme" width="1200" height="300" /><figcaption><a href="//atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool">demotiles for Sulphurpool colorscheme</a></figcaption></figure>

When making a colorscheme; and thus picking colors that work well together, and maybe share a common uniting characteristic <sup><a href="#note-2" class="sup-link" id="supLink2">2</a></sup>, there are a few things to consider. Here are some of the things I learned, or reconfirmed my knowledge along the way.

### Contrast in tonality
I wanted to make colorschemes that work, like _Solarized_, both in a light _and_ in a dark background variation. One colorscheme, two versions, light and dark, for a sensible restriction. For text-colors to work on those different backgrounds, their _“lightness value”_ should be somewhere in the mid-tonal range, meaning neither to light nor to dark. Yellow by itself is obviously a very light color, and red, blue and violet quite dark, so moving the lightness value for yellow _down_, and for the latter _up_, is one of the things to try <sup><a href="#note-3" class="sup-link" id="supLink3">3</a></sup>. A good example where you can find this principle effectively used is the [Solarized colorscheme](//ethanschoonover.com/solarized), which stood as a model for me, _especially_ in **this** regard, while creating these schemes.

### Contrast in color-values
When evaluating color-contrast between colors _(foreground and background colors)_ some basic knowledge of the colorwheel comes in handy, because a screaming color-contrast between the text-colors and background-color can be very distracting. You don’t want the colors to draw _(unnecessary)_ attention to themselves nor to distract anyway, but rather you want the colors to serve the need for direction; to create distinction and clarity, like in a painting or illustration with pictural unity. So colors that are opposite to each other on the colorwheel <sup><a href="#note-4" class="sup-link" id="supLink4">4</a></sup> can be called _“complimentary”_, meaning they have the highest possible color contrast.

<figure style="text-align:center"><img src="//atelierbram.github.io/img/svg/colorwheel.svg" alt="colorwheel" width="382" height="382" /></figure>

### Saturation in color
In the colorscheme for [Estuary](//atelierbram.github.io/syntax-highlighting/atelier-schemes/estuary), which is based on yellow/green, I tried hard to avoid this foreground/background complementary colorclash, by desaturating the values in the red – violet gamut, but also to _not_ use violet–purple at all. Note also the value for red that is used goes to the yellow, and is more of an orange, but in this yellow-green context it really works as a red. Related to this issue: in some of the first colorschemes (_made a few years back,_) I felt the need to change some of the values over there as well. For anyone who is interested in the documentation of these changes, [they can be found here](//atelierbram.github.io/syntax-highlighting/atelier-schemes/demo/changes-03-2015.html).


<figure><img src="//atelierbram.github.io/syntax-highlighting/assets/img/svg/atelierschemes-demotiles-estuary_1200x300.svg" alt="demotiles for Estuary colorscheme" width="1200" height="300" /><figcaption>demotiles for Estuary colorscheme</figcaption></figure>

### Helpfull Tools
On [Codepen](//codepen.io/atelierbram/pen/JnbIt) you can find a template for the colorscheming playground I used while creating these themes.

<p data-height="672" data-theme-id="71" data-slug-hash="ogXNjj" data-default-tab="result" data-user="atelierbram" class='codepen'>See the Pen <a href='//codepen.io/atelierbram/pen/ogXNjj/'>Colorscheme Template Variables</a> by Bram de Haan (<a href='//codepen.io/atelierbram'>@atelierbram</a>) on <a href='//codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Above [a different one](//codepen.io/atelierbram/pen/ogXNjj), which might be helpfull. Some tools not created by me, but which I use all the time, _(besides Chrome DevTools,)_ is [HSL Color Picker](//hslpicker.com/) which is integrated in a [DIY tool I assembled myself](//atelierbram.github.io/c-tiles16/colorscheming/#7b8a8e), and sometimes the [golden-oldie Color Blender](//meyerweb.com/eric/tools/color-blend/), in fact I have local copies of these tools, each in a tab of the browser from startup. I know there are other tools as well, like <a href="//coolors.co/app/">Coolors</a> or <a href="//www.canva.com/colors/">Canva</a>, but these are the ones I feel most comfortable with.

### Using Variables for Flexibility
Using variables for colornames and values is great too, and Sass is my preprocessor of choice. To import a color palette with color-variables settings in your main Sass files, is just something I do all the time now. Makes it also trivial to change the colorscheme of an entire website, by just swapping this `colorvars.scss` file with another, so yeah: a colorscheme can be quite flexible and versatile, not just for syntax-highlighting! In fact, on this very blog on Github I use the same colorscheme, which informs the syntax-highlighting for Prism, for all of the other colors on the page as well, creating unity within the page I feel.

<pre><code class="language-scss">
// //atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool

// Sulphurpool
$base00: #202746;
$base01: #293256;
$base02: #5e6687;
$base03: #6b7394;
$base04: #898ea4;
$base05: #979db4;
$base06: #dfe2f1;
$base07: #f5f7ff;
$base08: #c94922;
$base09: #c76b29;
$base0a: #c08b30;
$base0b: #ac9739;
$base0c: #22a2c9;
$base0d: #3d8fd1;
$base0e: #6679cc;
$base0f: #9c637a;

$red:     $base08;
$orange:  $base09;
$yellow:  $base0a;
$green:   $base0b;
$cyan:    $base0c;
$blue:    $base0d;
$violet:  $base0e;
$magenta: $base0f;
</code></pre>

<pre><code class="language-scss">
@import
"mq",
"color-vars",
"settings";
</code></pre>

Those same variables can be used in another build tool called [Base16 Builder](//github.com/chriskempson/base16-builder), which I started using for converting these colorschemes to syntax highlighting schemes for different applications, see also _[Base16 on Github](//github.com/chriskempson/base16)_. Base16 Builder enables you to create syntax highlighting colorschemes in dark and light background variations, for many applications. It is constructed as a bash-script that can be triggered from the terminal; _checkout the dependencies on Github though ..._.

#### Examples
<figure><img src="//atelierbram.github.io/syntax-highlighting/assets/img/sulphurpool-dark_sublime_640x425.png" alt="Screenshot – dark version – Sulphurpool in Sublime Text" width="640" height="425" /><figcaption>Screenshot of a working colorscheme as syntax-highlighting (Sulpherpool coloscheme in Sublime Text).</figcaption></figure>

#### Notes
1. <span id="note-1">Like in music where there can be a “tonal centre” which also can determine a key in a piece of music, likewise one can translate this to the visual medium and color. So for each colorscheme, a different color from the colorwheel represented this “tonal centre”, or base color which is to be thought of as being right in the middle of the color-gamut that is being used in the colorscheme.</span>
1. <span id="note-2">These “characteristics” don’t have to be obvious; art can have “secrets” </span>
1. <span id="note-3">In Chrome DevTools you can, with Shift-Click on a selected color, move from HEX to RGB to HSL. Using HSL, you can conveniently use the arrow keys on your keyboard to see the effect of hue, saturation, and lightness change.</span>
1. <span id="note-4">The colorwheel, and the color-theory of someone like [Johannes Itten](//www.worqx.com/color/itten.htm) is, (_if very useable in education; even today,_) superseded by updated (scientifical) theories that bring in [physics](//physics.info/color/), stating that color is in fact [frequency](//www.marktaw.com/design/ColorTheorya.html). Although fascinating material, the more recent scientific discoveries are a lot harder to teach in educating art-students I find, but please someone prove me wrong.</span>

<span class="note">This article was also published on [Codepen](//codepen.io/atelierbram/post/colorscheming)</span>
