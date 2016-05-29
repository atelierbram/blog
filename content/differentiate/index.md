---
    title:          Differentiate between Code Examples
    short-title:    Differentiate
    type:           page
    page-id:        id-07
    id:             id-07
    sortOrder:      6
    description:    Use two versions of one colorscheme, light- and dark, in a blogpost in order to differentiate between different code environments
---

## Differentiate between Code Examples

<span class="dropcap">L</span>et’s say one is writing a tutorial with code-examples showing code-snippets from the command-line, _and_ code-snippets from javascript files. One _could_ use **screenshots** from the commandline with, for example, a _dark_ theme and javascript snippets in plain text within a `pre`tag syntax-highlighted with a _light_ theme, in order to differentiate between the two in a clear manner.
<p class="publication-list__item__meta"><time datetime="2015-09-04">September 2015</time></p>

Screenshots can work well when done right, even when displaying text; like code-snippets. Adept them, have arrows with additional explaining text next to it. Craft them well and you can get [something like this](https://jakearchibald.com/2015/anatomy-of-responsive-images/) which gets it’s point across in an hands-on manner: considering this complicated matter.

### Combining a colorscheme’s dark– and light version
But _even when_ working with screenshots of code-snippets, one can mix it up with plain text in `pre`-tags. To keep consistency in design, one would want those themes to be related in color, or better use _the same_ colors of a colorscheme in a dark and light version (_dark being in a way “inverted”_), have the commandline code-snippets be informed by the _dark_ version of the colorscheme and, visa versa, the javascript examples colors informed by the _light_ version. You may go about it like this:

<div class="example">

<pre><code class="language-bash">$ npm install gulp gulp-sass --save-dev
</code></pre>

<span class="text">This line tells [npm](http://npmjs.com) to install both `gulp` and `gulp-sass` packages as development dependencies. You can now find them in the `devDependencies` object of your `package.json`. And the `Gulpfile.js`:</span>

<pre><code class="language-javascript">var gulp = require('gulp');
var sass = require('gulp-sass');
</code></pre>

</div>

This is not difficult to achieve with [Prism syntax-hightlighter](http://prismjs.com) combined with Sass-variables for colors.

Check out [this demo at Codepen](http://codepen.io/atelierbram/pen/ZbYrRJ) to see how the `<pre class="language-bash">` is targeted in the `CSS` You can see how this works out in [a different example here](http://atelierbram.github.io/Starter-Assemble-Gulp/).

<span class="note">This article was also published on [Codepen](http://codepen.io/atelierbram/post/differentiate/)</span>

<div class="prevnext">
  <h5><a href="../{{url.post-id--06}}" rel="prev"><i class="icon icon-8 icon-arrow-left"><svg class="shape-icon" viewBox="0 0 8 12" width="10" height="15"><use xlink:href="#shape-arrow-point" transform="rotate(180,4,6)"></use></svg></i> {{name.post-id--06}}</a></h5>
  <h5><a href="../{{url.post-id--08}}" rel="next">{{name.post-id--08}}<i class="icon icon-8 icon-arrow-right"><svg class="shape-icon" viewBox="0 0 8 12" width="10" height="15"><use xlink:href="#shape-arrow-point"></use></svg></i></a></h5>
</div>
