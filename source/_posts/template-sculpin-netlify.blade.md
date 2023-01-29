---
extends: _layouts.post
section: content
title:          Template Sculpin Netlify
long_title:     Small-business template for Sculpin and Netlify CMS
index_title:    Template for Sculpin and Netlify
slug:           template-sculpin-netlify
description:    This is a small business template built with Sculpin and Netlify CMS
page_type:      post
id:             "id_13"
script:         "script-id_13-js.blade.php"
date_human:     August 2017
date_machine:   "2017-08-10"
date:   2017-08-10
intro: "On the look out for available templates on the interwebs for deployment of a static site on Netlify build with Sculpin and Grunt I stumbled on some intriguing templates but none with that exact combination. There are templates available for different static site builders and build tools on <a href='https://github.com/netlify-templates'>Netlify’s dedicated repository of templates</a>, like a lot with Hugo, typically integrated in a Gulp workflow."
---

On the look out for available templates on the interwebs for deployment of a static site on Netlify build with Sculpin and Grunt I stumbled on some intriguing templates but none with that exact combination. There are templates available for different static site builders and build tools on <a href='https://github.com/netlify-templates'>Netlify’s dedicated repository of templates</a>, like a lot with Hugo, typically integrated in a Gulp workflow.

<p class="publication-list__item__meta"><time datetime="{!! $page->date_machine !!}">{{ $page->date_human }}</time></p>

One template, the [Kaldi Hugo Template](https://github.com/netlify-templates/kaldi-hugo-cms-template) which itself is based on the [Victor Hugo](https://github.com/netlify/victor-hugo) template has Netlify <span class="small-caps">CMS</span> as an npm dependency. This allows for a local installment of the <span class="small-caps">CMS</span>, which is funny but can also be a bit confusing, and in my experience unnecessary. <sup><a href="#note-1" class="sup-link" id="supLink1"> 1 </a></sup>

Hugo is a static site builder rapidly growing in popularity with very fast performance due to the Go rendering engine. But the Go language is also making it difficult to debug for someone new to the language. And we all make typos and syntax errors so this can be an issue. I just had to make my own template with Sculpin –  which I love –  but where to start?

### Static Site build with Sculpin
I thought about it for a while and in the end it made more sense to me combining the Kaldi Hugo Template with the skeleton template for Sculpin, rather than to start from scratch. Sculpin works out of the box when following the instruction from the [quick start guide](https://sculpin.io/getstarted/). Sculpin comes with all you need for a website, complete with pagination, blogposts with categories and tags, which in itself is already impressive. It is also a reliable tool, making it a joy to work with. It is written in <span class="small-caps">PHP</span> and uses Twig templates that can give feedback in the terminal on syntax errors, which can be quite helpful from time to time. The syntax for the Twig template tags doesn’t differ _that much_ from any other templating language, it can be inside markdown files with Yaml front matter for metadata on top, so converting the templates from the Kaldi _Hugo_ template to the new <a href="https://github.com/atelierbram/kaldi-sculpin-netlify-template">Kaldi _Sculpin_ template</a> was really quite straight forward.

### Grunt workflow
Using Grunt in stead of Gulp was what I wanted, so that’s what I used for the compiling of the Sass into <span class="small-caps">CSS</span>, the concatenation and minification of javaScript, and for the concatenation of several <span class="small-caps">SVG</span> icons into one partial. I can work much faster in Grunt, doing anything really, and I like the more declarative syntax.

<h3>Deployment on Netlify: <span class="small-caps" style="font-family:brandosans-semibold-v100">CMS</span> Integration</h3>
Trickiest bit was to integrate Netlify <span class="small-caps">CMS</span> by editing the `source/cms/config.yml` file: any syntax error can trip you up and make the <span class="small-caps">CMS</span> show an empty space where the entry in the admin should be. But ones you get the setup right the rest of the workflow, editing – deploying, can be a smooth process.

### Simplicity
It’s exciting and beautiful to be able to edit those blogposts written in markdown right in the browser within an admin complete with preview panel. In the end the template I baked can be seen as a simplification of the Kaldi Hugo template, (_but also with some additions like a collapsible navigation for small screens, pagination, categories and tags_). It’s more like simplification-in-the-sense-of templating without too much fancy functions, ending up maybe a little less <abbr title="Don’t repeat yourselve" style="text-decoration:none"><span class="small-caps">DRY</span></abbr> than the original Hugo template because of this &hellip;. Also the implementation of the integration of Netlify <span class="small-caps">CMS</span> into the setup was done in the most minimal way: I really do prefer simplicity over complication.

> There is smartness all around but it’s simplicity that lacks too often in webdevelopment, but that’s the way I like it!

As far as I can see the easiest way to get started with Sculpin deployed with Netlify [at the time of writing](#time) is to download this [Kaldi Sculpin Netlify Template](https://github.com/atelierbram/kaldi-sculpin-netlify-template) and make it your own. You can see a preview how it looks [over here on Netlify](http://kaldi-sculpin-template.netlify.com/).

If you follow the instructions in the [readme](https://github.com/atelierbram/kaldi-sculpin-netlify-template#README.md), edit the `package.json` and config files to reflect the name of your own new repo and so on, one should be able to kickstart a Sculpin project with Netlify <span class="small-caps">CMS</span> in considerable less time than it took me initially.


#### NOTES
1. <span id="note-1">A local install of the admin only reflects the local website, so you have to do a `git pull origin master` to see the edits made on the remote server, which makes sense, but can add up to the confusion when by accident you would edit posts locally in the admin in stead of on the remote server. So yeah, I don’t know, I think I can live without that part &hellip;.</span>

#### RESOURCES
- [Kaldi Hugo CMS Template](https://github.com/netlify-templates/kaldi-hugo-cms-template)
- [Sculpin’s Blog Skeleton](https://github.com/sculpin/sculpin-blog-skeleton)
- [Tutorials on Netlify](https://www.netlify.com/tags/tutorial/)
- [Authenticate with GitHub](https://github.com/netlify/netlify-cms/blob/master/docs/test-drive.md)
- [Sculpin](https://sculpin.io/)
- [Sculpin’s quick start guide](https://sculpin.io/getstarted/)


<span class="note">This article was also published on [Codepen](https://codepen.io/atelierbram/post/template-sculpin-netlify)</span>
