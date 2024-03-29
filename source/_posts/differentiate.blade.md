---
extends: _layouts.post
section: content
title:          Differentiate
long_title:     Differentiate between Code Examples
index_title:    Differentiate between Code Examples
slug:           differentiate
description:    Use two versions of one colorscheme, light- and dark, in a blogpost in order to differentiate between different code environments
page_type:      post
id:             "id_07"
script:         "script-id_07-js.blade.php"
date_human:     September 2015
date_machine:   "2015-09-04"
date:   2015-09-04
intro: "Let’s say one is writing a tutorial with code-examples showing code-snippets from the command-line, _and_ code-snippets from javascript files. One <em>could</em> use <b>screenshots</b> from the commandline with, for example, a <em>dark</em> theme and javascript snippets in plain text within a <code>pre</code> tag syntax-highlighted with a <em>light</em> theme, in order to differentiate between the two in a clear manner."
---

Let’s say one is writing a tutorial with code-examples showing code-snippets from the command-line, _and_ code-snippets from javascript files. One <em>could</em> use <b>screenshots</b> from the commandline with, for example, a <em>dark</em> theme and javascript snippets in plain text within a <code>pre</code> tag syntax-highlighted with a <em>light</em> theme, in order to differentiate between the two in a clear manner.

<p class="publication-list__item__meta"><time datetime="{!! $page->date_machine !!}">{{ $page->date_human }}</time></p>

Screenshots can work well when done right, even when displaying text; like code-snippets. Adept them, have arrows with additional explaining text next to it. Craft them well and you can get [something like this](//jakearchibald.com/2015/anatomy-of-responsive-images/) which gets it’s point across in an hands-on manner: considering this complicated matter.

### Combining a colorscheme’s dark– and light version
But _even when_ working with screenshots of code-snippets, one can mix it up with plain text in `pre`-tags. To keep consistency in design, one would want those themes to be related in color, or better use _the same_ colors of a colorscheme in a dark and light version (_dark being in a way “inverted”_), have the commandline code-snippets be informed by the _dark_ version of the colorscheme and, visa versa, the javascript examples colors informed by the _light_ version. You may go about it like this:

<div class="example">
<pre><code class="language-bash">
$ npm install gulp gulp-sass --save-dev
</code></pre>

<span class="text">This line tells [npm](//npmjs.com) to install both `gulp` and `gulp-sass` packages as development dependencies. You can now find them in the `devDependencies` object of your `package.json`. And the `Gulpfile.js`:</span>

<pre><code class="language-javascript">
var gulp = require('gulp');
var sass = require('gulp-sass');
</code></pre>
</div>

This is not difficult to achieve with [Prism syntax-hightlighter](//prismjs.com) combined with Sass-variables for colors.

Check out [this demo at Codepen](//codepen.io/atelierbram/pen/ZbYrRJ) to see how the `<pre class="language-bash">` is targeted in the `CSS` You can see how this works out in [a different example here](//atelierbram.github.io/Starter-Assemble-Gulp/).

<span class="note">This article was also published on [Codepen](//codepen.io/atelierbram/post/differentiate/)</span>

