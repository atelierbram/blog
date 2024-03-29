---
extends: _layouts.post
section: content
title:          Assembling
long_title:     Static Site Generator Assemble
index_title:    Static Site Generator Assemble
slug:           assembling
description:    Static Site Generator Assemble
page_type:      post
id:             "id_04"
script:         "script-id_04-js.blade.php"
date_human:     February 2015
date_machine:   "2015-02-18"
date:   2015-02-18
intro: "The advantages of having a static site-generator integrated in one and the same build-tool <i>(that you may already be using)</i> is huge: <a href='//github.com/assemble/assemble'>Assemble itself</a> is a Grunt- <i>(also Yeoman and Node, and soon to be Gulp-)</i> plugin. At the same time, Assemble assumes very little about <i>“what it is that you are trying to do”</i>; making it fun to use <i>(if you are also the kind of person that tends to want to make things their own &hellip;)</i>."
---

The advantages of having a static site-generator integrated in one and the same build-tool _(that you may already be using)_ is huge: [Assemble itself](//github.com/assemble/assemble) is a Grunt- _(also Yeoman and Node, and soon to be Gulp-)_ plugin. At the same time, Assemble assumes very little about _“what it is that you are trying to do”_; making it fun to use _(if you are also the kind of person that tends to want to make things their own &hellip;)_.

<p class="publication-list__item__meta"><time datetime="{!! $page->date_machine !!}">{{ $page->date_human }}</time></p>

For an example with the alpha version of Assemble 6.0, using Gulp <span class="small-caps">ISO</span> Grunt,  go to [this repo](//github.com/atelierbram/Starter-Assemble-Gulp)

### Static Site Generator
One of the first problems to solve, when wanting to generate a website from flat files _(without a database)_, is to come up with a flexible solution for site-wide navigation. In [Assemble](//assemble.io) this could be tackled like this in a _“partial”_ handlebars file, here `nav.hbs`:

<pre><code class="language-markup">
&lt;nav class=&quot;nav&quot; id=&quot;nav&quot;&gt;
  &lt;ul&gt;
    &#x7b;&#x7b;#withSort pages &#39;data.sortOrder&#39;&#x7d;&#x7d;
      &lt;li&gt;&lt;a href=&quot;&#x7b;&#x7b;autolink&#x7d;&#x7d;&quot; &#x7b;&#x7bisActive&#x7d;&#x7d;&gt;&#x7b;&#x7b;data.title&#x7d;&#x7d;&lt;/a&gt;&lt;/li&gt;
    &#x7b;&#x7b/withSort&#x7d;&#x7d;
  &lt;/ul&gt;
&lt;/nav&gt;
</code></pre>

HTML mixed with handlebars’ template tags, spitting out <sup><a href="#note-1" class="sup-link" id="supLink1">1</a></sup> a complete _“ordered”_ unordered list of the content folder files in the <span class="small-caps">HTML</span>-output.  In the markup are references to these two handlebar-helper plugins: “handlebars-helper-autolink” and “handlebars-helper-isActive”. The sort-order of the linked files can be set in the versatile [Yaml front matter](//assemble.io/docs/YAML-front-matter.html) in the content-file itself. So when generating pages from markdown,  let’s say `index.md`, in the YFM <sup><a href="#note-2" class="sup-link" id="supLink2">2</a></sup>, right in the head of the file, one can set these variables:

<pre><code class="language-markup">
---
title:       Homepage
type:        home-page
sortOrder:   0
description: My Homepage
---
</code></pre>

[Built in variables](//assemble.io/docs/Built-in-Variables.html) can be used too.

### Templating

Besides that you can put variables in the top of your content-files as <span class="small-caps">YMF</span> another way to get data into your templates is to [store custom variables as “key-value-pairs” in an external file](//assemble.io/docs/options-data.html), for example a <span class="small-caps">JSON</span> or <span class="small-caps">YML</span> - file. The way to let the javascript rendering-engine know about this file, is to link it up (as a value for `data`) in the options-section for Assemble within the Gruntfile.


<pre><code class="language-javascript">
grunt.initConfig({
 pkg: grunt.file.readJSON('package.json'),
 assemble: {
  options: {
    data: 'src/data/*.json',
    assets: 'dist/static',
    layout: 'layout.hbs',
    partials: 'src/templates/partials/**/*.hbs',
    layoutdir: 'src/templates/layouts',
    helpers: ['handlebars-helper-autolink','handlebars-helper-isActive','src/helpers/**.js']
  },
</code></pre>

So when I have a file called `var.json` in the `src/data` folder, then the variables within those files can be called with, for example in template partials files.

<pre><code class="language-markup">
&lt;!-- footer.hbs --&gt;
&lt;footer&gt;&lt;small&gt;by &lt;a href=&quot;&#x7b;&#x7b;var.site-url&#x7d;&#x7d;&quot;&gt;&#x7b;&#x7b;var.org&#x7d;&#x7d;&lt;/a&gt; &amp;middot; &lt;a href=&quot;&#x7b;&#x7b;var.license-url&#x7d;&#x7d;&quot;&gt;&amp;copy; &#x7b;&#x7b;var.year&#x7d;&#x7d;&lt;/a&gt;&lt;/small&gt;&lt;/footer&gt;
</code></pre>

Alongside build in Handlebar-helpers <sup><a href="#note-3" class="sup-link" id="supLink3">3</a></sup>, this becomes powerful templating at your disposal.

### Make it your own
When I suffer from _“horror vacui”_, indecision or what not, from all these possibilities and options that can be set in tools like these, I like to fight this by baking a boilerplate <sup><a href="#note-4" class="sup-link" id="supLink4">4</a></sup>: get a feeling for what it is like to, for example, use handlebar-templates, and partials with handlebar-tags within a small project.

At [Assemble’s website](//assemble.io/docs/Resources.html#boilerplates) you can find some very instructive boilerplates, and at the bottom of this article are some links to examples, but make sure to also look at implementations in Github repo’s made by Zurb’s Foundation, and the [Gruntfile for h5bp-Effeckt.css](//github.com/h5bp/Effeckt.css/blob/master/Gruntfile.js), which may have even more minimal and up to date implementations.

### Optimization
To be able to have the minified <span class="small-caps">CSS</span> within style-tags in the `head` of your <span class="small-caps">HTML</span>, for optimization, one can use the grunt-plugin `grunt-contrib-copy` to automate the hard work. Copy the contents of a minified <span class="small-caps">CSS</span>-file to a handlebars-file as a Grunt-task &hellip;

<pre><code class="language-javascript">
copy: {
  main: {
    src: 'dist/static/prefixed/home.min.css',
    dest: 'src/templates/partials/homeheadstyles.hbs',
    flatten: true,
    filter: 'isFile',
  },
},
</code></pre>

&hellip; can do conditional tags as well in the base-layout template:

<pre><code class="language-markup">
&#x7b;&#x7b;#is type &quot;home&quot; &#x7d;&#x7d;&lt;style&gt;&#x7b;&#x7b;&gt; homeheadstyles&#x7d;&#x7d;&lt;/style&gt;&#x7b;&#x7b;/is&#x7d;&#x7d;
</code></pre>

Nice!

### Publishing
Grunt-plugin [grunt-gh-pages](//www.npmjs.com/package/grunt-gh-pages) makes a gh-pages branch and commits and pushes the output of the `dist` folder to a remote gh-pages branch on Github. Still find it magical how that works from this command in the terminal: `grunt gh-pages`.

### Styleguides
When you have read the next quote, (from the [Javascript Jabber podcast](//devchat.tv/js-jabber/098-jsj-assemble-io-with-brian-woodward-and-jon-schlinkert) featuring the creators of Assemble; Brian Woodward and Jon Schlinkert), it will not come as a suprise that there is also a [converted implementation of Brad Frost’s Patternlab](//github.com/assemble/assemble-pattern-lab) (originally in <span class="small-caps">PHP</span>), made with Assemble. Creating live styleguides on top of boilerplates like this are one of those things static site generators are made for.

> We built a bunch of models and lorem ipsum type things for the buttons and for placeholder text with all the different components. And Assemble can just essentially iterate over all of those components and build the actual final components. But at the same time, it can also build all of the pages for demoing the components. So, you could for instance build a website with Assemble that is mostly text, like a blog or a regular website. But also then have a component showcase where you’re taking all of the partials or includes that you’ve created for the site and just create another destination path essentially for Assemble to build all of those components individually to showcase them. So, in one build you can build a component showcase and use those same components in the actual site &hellip;

#### Notes
1. <span id="note-1">on the `grunt build` command, depending on the existing files in your `src/content` folder _(or whatever the name of that folder is: can be anything you like), also: can have subfolders too, it’s smart about that)_</span>
1. <span id="note-2"><span class="small-caps">YAML</span>-front-matter</span>
1. <span id="note-3">The [build in handlebar helpers](//handlebarsjs.com/builtin_helpers.html); there is `if`, `unless`, `each`, `with` and `lookup`. For an example of `each`, checkout the tutorial on [maddesigns](//maddesigns.de/assemble-static-site-generator-grunt-2625.html) _(in german)_.</span>
1. <span id="note-4">By _“boilerplate”_, I mean a complete folder structure with a `Gruntfile.js` and `package.json` files. With this being a Grunt-plugin, this also means a git-repo, _(you can do yourself a big favor by making yourself familiar with that as well, if you haven't already)_. In the `.gitignore` file _(in the root of the project-folder)_  you can add the output-folder, often called `dist`, to the list there: no need to keep this in the repo.</span>

#### Examples
- [static-site-boilerplate](//github.com/bdadam/static-site-boilerplate) by Adam Beres-Deak
- [build-boilerplate](//github.com/atelierbram/build-boilerplate) fork of static-site-boilerplate by Adam Beres-Deak, with some modifications
- [Basic Example of using Assemble](//gist.github.com/atelierbram/e425ad7238af56925f7f)
- Beast of a [Gruntfile with Assemble](//github.com/buildingblocks/bb-prototype-website/blob/master/Gruntfile.js) for [bb-prototype-website](//github.com/buildingblocks/bb-prototype-website) by [BuildingBlocks](//github.com/buildingblocks)

#### Resources
- [Assemble Docs](//assemble.io/docs/)
- [Embed Github Gists](//assemble.github.io/assemble-gist-blog/)
- [Create a Sitemap](//github.com/assemble/boilerplate-sitemap)
- [Front-End Process - Flat Builds and Automation, part 3: Grunt Tasks](//www.gpmd.co.uk/blog/front-end-process-flat-builds-and-automation-part-3-grunt-tasks/)
- [Assemble – erste Schritte mit dem Static Site Generator für Grunt](//maddesigns.de/assemble-static-site-generator-grunt-2625.html)

<span class="note">This article was also published on [Codepen](//codepen.io/atelierbram/post/assembling)</span>
