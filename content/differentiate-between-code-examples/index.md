---
    title:          Differentiate between Code Examples
    short-title:    Differentiate
    type:           page
    page-id:        id-07
    id:             id-07
    sortOrder:      8
    description:    How the airfan icon entered the user interface game and came out on top of the competition
---

## Differentiate between Code Examples

### Use-case for combining a dark - and light version of a colorscheme in one tutorial.

Let's say one is writing a tutorial with code-examples showing examples from the command-line, _and_ examples from javascript files. You could use screenshots for the commandline instructions with, for example a dark theme, and javascript snippets just in a `pre`tag, syntax-highlighted with a light theme, in order to differentiate between the two in a clear manner.

Of course you also wanted those two themes to be related in colors, or maybe using the same colorscheme in a dark and light version. When going down this route, one might as well drop screenshots all together, and have the "bash" commandline instructions get colors from the dark version of the colorscheme and, visa versa, the javascript-file examples from the light version. You may go about it like this:

<div class="example">

    $ npm install gulp gulp-sass --save-dev

This line tells [npm](http://npmjs.com) to install both `gulp` and `gulp-sass` packages as development dependencies. You can now find them in the `devDependencies` object of your `package.json`. And the `Gulpfile.js`:

    var gulp = require('gulp');
    var sass = require('gulp-sass');

</div>

This is not difficult to achieve with Prism syntax-hightlighter combined with Sass-variables for colors. Check out the Codepen to see how the `<pre class="language-bash">` is targeted in the `CSS`

You can see how this works out in [a different example here](http://atelierbram.github.io/Starter-Assemble-Gulp/).


<div class="prevnext">
  <h5><a href="../{{url.post-id--06}}" rel="prev"><i class="icon icon-8 icon-arrow-left"><svg class="shape-icon" viewBox="0 0 8 12"><use xlink:href="#shape-arrow-point" transform="rotate(180,4,6)"></use></svg></i> {{name.post-id--05}}</a></h5>
</div>

<div class="prevnext">
  <h5><a href="../{{url.post-id--07}}" rel="prev"><i class="icon icon-8 icon-arrow-left"><svg class="shape-icon" viewBox="0 0 8 12"><use xlink:href="#shape-arrow-point" transform="rotate(180,4,6)"></use></svg></i> {{name.post-id--03}}</a></h5>
  <h5><a href="../{{url.post-id--05}}" rel="next">{{name.post-id--05}} <i class="icon icon-8 icon-arrow-right"><svg class="shape-icon" viewBox="0 0 8 12"><use xlink:href="#shape-arrow-point"></use></svg></i></a></h5>
</div>
