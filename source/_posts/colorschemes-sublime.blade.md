---
extends: _layouts.post
section: content
title:          Sublime
long_title:     On Editing Colorschemes for Sublime Text
index_title:    Editing Colorschemes for Sublime Text
slug:           colorschemes-sublime
description:    Some things learned when editing colorschemes for Sublime Text
page_type:      post
id:             "id_08"
script:         "script-id_08-js.blade.php"
date_human:     January 2016
date_machine:   "2016-01-11"
date:   2016-01-11
intro: "Somewhat suprised to see how scarces the available information is, around the interwebs and in the docs, on the subject of creating colorschemes for Sublime Text, for such a popular text-editor. Here are some notes that may come handy when doing this yourself. Down at the bottom of this post one will find links to other resources."
---

Somewhat suprised to see how scarces the available information is, around the interwebs and in the docs, on the subject of creating colorschemes for Sublime Text, for such a popular text-editor. Here are some notes that may come handy when doing this yourself. Down at the bottom of this post one will find links to other resources.

<p class="publication-list__item__meta"><time datetime="{!! $page->date_machine !!}">{{ $page->date_human }}</time></p>

On Mac OS X the `colorschemes.tmTheme` files can be found in the following directory from the terminal:

<pre><code class="language-bash">
  $ cd /Users/USERNAME/Library/Application\ Support/Sublime\ Text\ 2/Packages/
</code></pre>

Where `<USERNAME>` is the folder with your own (user)name.

I have this alias in my `.bashrc` for easy access from the terminal.

<pre><code class="language-bash">
alias zsubl='cd  /Users/bram/Library/Application\ Support/Sublime\ Text\ 2/Packages/'
</code></pre>

### Workflow
First of all, having a visual reference for the colorscheme you are working on at hand is indispensable. Something which works really well in my experience is [these kind of colorscheme labs](//codepen.io/atelierbram/pen/JnbIt), which basically are just simple webpages containing colorscheme color-tiles (_using sixteen Sass variables for colors_), and some syntax-highlighted code-samples. In order to make editing the colors less cumbersome, it helps to tweak the values for hue, saturation and lightness in the <span class="small-caps">HSL</span> format. Ones one is happy with the overall balance in the colorvalues, it's not that difficult to convert them to hex-values, (_either from DevTools or some other trustworthy colortool,_) and then manually copy those hex-values over to Base16-schemes.

_Base16?_ A helpful tool [can be this webapp on Heroku](//tmtheme-editor.herokuapp.com/), but this will only get you so far. My workflow for editing the `tmTheme` colorscheme for Sublime continues with editing template files that come with [Base16-builder](//github.com/base16-builder/base16-builder/), of which I host several versions for [Base2Tone](https://github.com/atelierbram/base2tone/tree/master/db/templates) and other variations as well. After running the `base16` command in the folder with the `base16` executable bash-file, a whole lot of syntax-highlighting themes are generated from the commandline in the `output`-folder, as many as there are template files. Next copy those files over from the `output` folder (from the commandline) to the Packages/Color Scheme - folder. (_Also not to forget removing the `*.cache` files in that same folder_).

### Helpful Hints
What you really want when editing, or iterating over an existing colorscheme, is hints for syntax-names which are used by the syntax-highlighting engine. This can be achieved when the command `displayName` is activated, and the function keys `<Ctrl><Shift><P>` are simultaneously pressed, while being with the cursor on a specific tag. This now will show the syntax-name in the left-bottom corner of the Sublime Text app-frame. Which makes me wonder how else one could know that the syntax-name for the “dot” in front of a class-name in <span class="small-caps">CSS</span> belongs to the syntax-group `punctuation.definition.entity.css`.

I have this line `"command": "displayName"` in my `Preferences.sublime-settings` file:

<pre><code class="language-javascript">
"color_scheme": "Packages/Color Scheme - Duotone/base16-duotone-darkspace.dark.tmTheme",
  "command": "displayName",
  "font_face": "FiraMono-Regular",
  "vintage_start_in_command_mode": true,
  "font_size": 14,
  "ignored_packages": [""],
  "theme": "Soda Dark.sublime-theme"
  }
</code></pre>

One thing I found out is that you can be more or less specific with leaving out or adding those suffixes, so `keyword` selects also `keyword.operator`, but `keyword.operator.sass` will override both, which makes sense.

### Screenshots
![screenshot of javaScript file syntax-highlighted with DuoTone Dark colorscheme](//atelierbram.github.io/syntax-highlighting/assets/img/duotones-dark_sublime_960x640.png)
Screenshot of javaScript file, syntax-highlighted with DuoTone Dark colorscheme.

- [darkSea](//atelierbram.github.io/syntax-highlighting/assets/img/duotones-darkSea_sublime_960x640.png)
- [darkSpace](//atelierbram.github.io/syntax-highlighting/assets/img/duotones-darkSpace_sublime_960x640.png)
- [darkEarth](//atelierbram.github.io/syntax-highlighting/assets/img/duotones-darkEarth_sublime_960x640.png)
- [darkForest](//atelierbram.github.io/syntax-highlighting/assets/img/duotones-darkForest_sublime_960x640.png)
- [darkPool](//atelierbram.github.io/syntax-highlighting/assets/img/duotones-darkPool_sublime_960x640.png)

#### Demo
- [Base2Tone on Github](//github.com/atelierbram/Base2Tone/)
- [Base2Tone demos](//base2t.one)
- [Base2Tone demos for Prism](//atelierbram.github.io/Base2Tone-prism/demo/evening/dark/)
- [Base2Tone demo for Prism on Codepen](//codepen.io/atelierbram/pen/WrjVyv)

#### Resources
- [commands for Sublime](//www.sublimetext.com/docs/commands)
- [info on setting for Sublime](https://www.sublimetext.com/docs/3/settings.html)
- [Original DuoTone Themes for Atom on simurai.com](//simurai.com/projects/2016/01/01/duotone-themes/)
- [DuoTones Sublime Colorschemes on Github](https://github.com/atelierbram/duotones-sublime-colorschemes)

<span class="note">This article was also published on [Codepen](//codepen.io/atelierbram/post/colorschemes-sublime/)</span>
