---
    title:          Generate a Static Website with Assemble
    short-title:    Assembling
    type:           page
    page-id:        id-04
    id:             id-04
    sortOrder:      9
    description:    Generate a Static Website with Assemble
---

## Generate a Static Website with Assemble

<span class="dropcap">T</span>he advantages of having a static site-generator integrated in one and the same build-tool _(that you may already be using)_ is huge: [Assemble itself](https://github.com/assemble/assemble) is a Grunt- _(also Yeoman and Node, and soon to be Gulp-)_ plugin. At the same time, Assemble assumes very little about _“what it is that you are trying to do”_; making it fun to use _(if you are also the kind of person that tends to want to make things their own &hellip;)_.

### Static Site Generator
One of the first problems to solve, when wanting to generate a website from flat files _(without a database)_, is to come up with a flexible solution for site-wide navigation. In [Assemble](http://assemble.io) this could be tackled like this in a _“partial”_ handlebars file, here `nav.hbs`:

```markup
<nav class="nav" id="nav">
  <ul>
    \{{#withSort pages 'data.sortOrder'}}
      <li><a href="\{{autolink}}" \{{isActive}}>\{{data.title}}</a></li>
    \{{/withSort}}
  </ul>
</nav>
```

HTML mixed with handlebars’ template tags, spitting out <sup>1</sup> a complete _“ordered”_ unordered list of the content folder files in the HTML-output.  In the markup are references to these two handlebar-helper plugins: “handlebars-helper-autolink” and “handlebars-helper-isActive”. The sort-order of the linked files can be set in the versatile [Yaml front matter](http://assemble.io/docs/YAML-front-matter.html) in the content-file itself. So when generating pages from markdown,  let’s say `index.md`, in the YFM <sup>2</sup>, right in the head of the file, one can set these variables:

```markup
---
title:       Homepage
type:        home-page
sortOrder:   0
description: My Homepage
---
```

[Built in variables](http://assemble.io/docs/Built-in-Variables.html) can be used too.

### Templating

Besides that you can put variables in the top of your content-files as YMF <sup>2</sup>, another way to get data into your templates is to [store custom variables as “key-value-pairs” in an external file](http://assemble.io/docs/options-data.html), for example a JSON or YML - file. The way to let the javascript rendering-engine know about this file, is to link it up (as a value for `data`) in the options-section for Assemble within the Gruntfile.


```javascript
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

```

So when I have a file called `var.json` in the `src/data` folder, then the variables within those files can be called with, for example: `\{{var.myVariable}}` in template partials files.

```markup
<!-- footer.hbs -->
<footer><small>by <a href="\{{var.site-url}}">\{{var.org}}</a> &middot; <a href="\{{var.license-url}}">&copy; \{{var.year}}</a></small></footer>

```

### Make it your own
When I suffer from _“horror vacui”_, indecision or what not, from all these possibilities and options that can be set in tools like these, I like to fight this by baking a boilerplate <sup>3</sup>: get a feeling for what it is like to, for example, use handlebar-templates, and partials with handlebar-tags within a small project.

At [Assemble’s website](http://assemble.io/docs/Resources.html#boilerplates) you can find some very instructive boilerplates, and at the bottom of this article are some links to examples, but make sure to also look at implementations in Github repo’s made by Zurb’s Foundation, and the [Gruntfile for h5bp-Effeckt.css](https://github.com/h5bp/Effeckt.css/blob/master/Gruntfile.js), which may have even more minimal and up to date implementations.

### Optimization
To be able to have the minified CSS within style-tags in the `head` of your HTML, for optimization, one can use the grunt-plugin `grunt-contrib-copy` to automate the hard work. Copy the contents of a minified CSS-file to a handlebars-file as a Grunt-task &hellip;

```javascript
copy: {
  main: {
    src: 'dist/static/prefixed/home.min.css',
    dest: 'src/templates/partials/homeheadstyles.hbs',
    flatten: true,
    filter: 'isFile',
  },
},
```
&hellip; can do conditional tags as well in the base-layout template:

```markup
\{{#is type "home" }}<style>\{{> homeheadstyles}}</style>\{{/is}}
```

Nice!

### Publishing
Grunt-plugin [grunt-gh-pages](https://www.npmjs.com/package/grunt-gh-pages) makes a gh-pages branch and commits and pushes the output of the `dist` folder to a remote gh-pages branch on Github. Still find it magical how that works from this command in the terminal: `grunt gh-pages`.

### Styleguides
When you have read the next quote, (from the [Javascript Jabber podcast](http://devchat.tv/js-jabber/098-jsj-assemble-io-with-brian-woodward-and-jon-schlinkert) featuring the creators of Assemble; Brian Woodward and Jon Schlinkert), it will not come as a suprise that there is also a [converted implementation of Brad Frost’s Patternlab](https://github.com/assemble/assemble-pattern-lab) (originally in PHP), made with Assemble. Creating live styleguides on top of boilerplates like this are one of those things static site generators are made for.

> We built a bunch of models and lorem ipsum type things for the buttons and for placeholder text with all the different components. And Assemble can just essentially iterate over all of those components and build the actual final components. But at the same time, it can also build all of the pages for demoing the components. So, you could for instance build a website with Assemble that is mostly text, like a blog or a regular website. But also then have a component showcase where you’re taking all of the partials or includes that you’ve created for the site and just create another destination path essentially for Assemble to build all of those components individually to showcase them. So, in one build you can build a component showcase and use those same components in the actual site &hellip;

#### Examples
- [static-site-boilerplate](https://github.com/bdadam/static-site-boilerplate) by Adam Beres-Deak
- [build-boilerplate](https://github.com/atelierbram/build-boilerplate) fork of static-site-boilerplate by Adam Beres-Deak, with some modifications
- [Basic Example of using Assemble](https://gist.github.com/atelierbram/e425ad7238af56925f7f)

#### Resources
- [Assemble Docs](http://assemble.io/docs/)
- [Embed Github Gists](http://assemble.github.io/assemble-gist-blog/)
- [Create a Sitemap](https://github.com/assemble/boilerplate-sitemap)
- [Front-End Process - Flat Builds and Automation, part 3: Grunt Tasks](http://www.gpmd.co.uk/blog/front-end-process-flat-builds-and-automation-part-3-grunt-tasks/)

#### Notes
1. on the `grunt build` command, depending on the existing files in your `src/content` folder _(or whatever the name of that folder is: can be anything you like), also: can have subfolders too, it’s smart about that)_
1. YAML-front-matter
1. By _“boilerplate”_, I mean a complete folder structure with a `Gruntfile.js` and `package.json` files. With this being a Grunt-plugin, this also means a git-repo, _(you can do yourself a big favor by making yourself familiar with that as well, if you haven't already)_. In the `.gitignore` file _(in the root of the project-folder)_  you can add the output-folder, often called `dist`, to the list there: no need to keep this in the repo.

<span class="note">This article was also published on [Codepen](http://codepen.io/atelierbram/blog/assembling)</span>

<div class="prevnext">
  <h5><a href="../{{url.post-id--03}}" rel="prev">{{name.post-id--03}}</a></h5>
  <h5><a href="../{{url.post-id--05}}" rel="next">{{name.post-id--05}}</a></h5>
</div>

