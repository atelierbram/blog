---
    title:          On Editing Colorschemes for Sublime Text
    short-title:    Sublime
    type:           page
    page-id:        id-08
    id:             id-08
    sortOrder:      5
    description:    Some things learned when editing colorschemes for Sublime Text
---

## On Editing Colorschemes for Sublime Text

Here are some notes which can be helpful with editing colorschemes for Sublime Text. Somehow I was suprised that, for such a popular text-editor, how scarces the information is that can be found around the interwebs, and in the docs on the subject. Down the bottom of the post one will find links to resources which helped me crack this nut.

On Mac OS X the `colorschemes.tmTheme` files can be found in the following directory from the terminal:

<pre><code class="language-bash">$ cd /Users/USERNAME/Library/Application\ Support/Sublime\ Text\ 2/Packages/
</code></pre>

Where `<USERNAME>` is the folder with your own (user)name.

I have this alias in my `.bashrc` for easy access from the terminal.

<pre><code class="language-bash">alias zsubl='cd  /Users/bram/Library/Application\ Support/Sublime\ Text\ 2/Packages/'
</code></pre>

### Workflow
First of all, a visual reference for the colorscheme you are working on is indispensable. Something which works really well in my experience is [these kind of colorscheme labs](http://localhost/~bram/syntax-highlighting/duotones/demo/dark/), which basically is just a webpage containing colorscheme color-tiles (_using sixteen Sass variables for colors_), some code-samples in a few different languages, and Prism being used as a syntax-highlighter. In order to make editing the colors less cumbersome, it helps to tweak the values for saturation and lightness in the HSL format. Ones happy with the colorvalues, it's not that difficult to convert them to hex-values, either from DevTools, or some other trustworthy colortool, and then manually copy those hex-values over to the Base16-schemes.

![demotiles for DuoTones dark colorscheme](http://atelierbram.github.io/syntax-highlighting/assets/img/svg/duotones-dark_1200x300.svg)
[demotiles for DuoTones dark colorscheme](http://atelierbram.github.io/syntax-highlighting/duotones/demo/dark)

_Base16?_ A helpful tool [can be this webapp on Heroku](http://tmtheme-editor.herokuapp.com/), but this will only get you so far. What I do is editing template files that come with [Base16-builder](http://github.com/chriskempson/base16-builder/), of which I host a separate version for [DuoTones](https://github.com/atelierbram/syntax-highlighting/tree/master/duotones). After running the `base16` command in the folder with the `base16` executable bash-file, a whole lot of syntax-highlighting themes are generated from the commandline in the `output`-folder, as many as there are template files. Next copy those files over from the `output` folder (from the commandline) to the Packages/Color Scheme - folder. (_Also not to forget removing the `*.cache` files in that same folder_).

### Helpful Hints
What you really want when editing, or iterating over an existing colorscheme, is hints for syntax-names which are used by the syntax-highlighting engine. This can be achieved when the command `displayName` is activated, and the function keys `<Ctrl><Shift><P>` are simultaneously pressed, while being with the cursor on a specific tag. This now will show the syntax-name in the left-bottom corner of the Sublime Text app-frame. Which makes me wonder how else one could know that the syntax-name for the “dot” in front of a class-name in `CSS` belongs to the syntax-group `punctuation.definition.entity.css`.

I have this line `"command": "displayName"` in my `Preferences.sublime-settings` file:

<pre><code class="language-javascript">{
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
![screenshot of javaScript file syntax-highlighted with DuoTone Dark colorscheme](http://atelierbram.github.io/syntax-highlighting/assets/img/duotones-dark_sublime_960x640.png)
Screenshot of javaScript file, syntax-highlighted with DuoTone Dark colorscheme.

- [darkSea](http://atelierbram.github.io/syntax-highlighting/assets/img/duotones-darkSea_sublime_960x640.png)
- [darkSpace](http://atelierbram.github.io/syntax-highlighting/assets/img/duotones-darkSpace_sublime_960x640.png)
- [darkEarth](http://atelierbram.github.io/syntax-highlighting/assets/img/duotones-darkEarth_sublime_960x640.png)
- [darkForest](http://atelierbram.github.io/syntax-highlighting/assets/img/duotones-darkForest_sublime_960x640.png)
- [darkPool](http://atelierbram.github.io/syntax-highlighting/assets/img/duotones-darkPool_sublime_960x640.png)

#### Demo
- [DuoTones on Github](http://atelierbram.github.io/syntax-highlighting/duotones/)
- [Demo for Prism](http://atelierbram.github.io/syntax-highlighting/duotones/demo/dark/)
- [Demo for Prism on Codepen](http://codepen.io/atelierbram/pen/WrjVyv)

#### Resources
- [DuoTones Sublime Colorschemes on Github](https://github.com/atelierbram/duotones-sublime-colorschemes)
- [commands for Sublime](http://www.sublimetext.com/docs/commands)
- [info on setting for Sublime](https://www.sublimetext.com/docs/3/settings.html)
- [Original DuoTone Themes for Atom on simurai.com](http://simurai.com/projects/2016/01/01/duotone-themes/)


<span class="note">This article was also published on [Codepen](http://codepen.io/atelierbram/post/colorschemes-sublime/)</span>

<div class="prevnext">
  <h5><a href="../{{url.post-id--07}}" rel="prev"><i class="icon icon-8 icon-arrow-left"><svg class="shape-icon" viewBox="0 0 8 12"><use xlink:href="#shape-arrow-point" transform="rotate(180,4,6)"></use></svg></i> {{name.post-id--07}}</a></h5>
</div>

