---
title:          Select Menu
long_title:     Site-wide Navigation with Select Menu using window.onhashchange event
index_title:    Site-wide Navigation with Select Menu
slug:           select-menu-hashchange
description:    Have a select-option with the right value on page refresh
page_type:      post
id:             id_02
script:         script-id_02-js.inc
date_human:     September 2014
date_machine:   2014_09_18
generator:      pagination
pagination:
  max_per_page: 12
use: [posts]

---

When one is already using jQuery, easiest way is to use Ben Alman's great ["hashchange plugin"](https://github.com/cowboy/jquery-hashchange) to get a select-menu to display the right `option` when using a select-menu for site-wide navigation (_maybe for small screens_), for otherwise, with each page refresh, the `select` will always jump to the top option when there is no `selected` attribute with a value of `selected` set for the corresponding page on that corresponding option. This is how I would do it, probably could me less verbose, but it works:
<p class="publication-list__item__meta"><time datetime="{{ page.date_machine|replace({'_':'-'}) }}">{{ page.date_human }}</time></p>

- set an `id` on all the individual option items, something like `<option id="sm-home">` for the homepage `<option id="sm-blog">`  for the blog-page, and so on
- for the next bit to work, we will have to add the page#target (to the id) to the end of the `url` of the `href`s `option` values, like so `blog/index.html#sm-blog`, or maybe `blog/index.php#sm-blog`

```language-markup
<select name="menu-items" onchange="location = this.options[this.selectedIndex].value;" id="menu-select-menu" class="select-menu">
  <option id="sm-menu" value="">Menu</option>
  <option id="sm-home" value="http://mydomain.com/index.html#sm-home">Home</option>
  <option id="sm-blog" value="http://mydomain.com/blog/index.html#sm-blog">Blog</option>
```

-   Bind an event to window.onhashchange (with the help of the plugin) that, when the hash changes, sets a class on the body with the same name as the #hash-tag
- target the option which has the same/corresponding id as the class set on the body, setting the "selected" attribute as-appropriate.

```language-javascript
$(function(){

  // Bind an event to window.onhashchange that, when the hash changes, sets the
  // class on the body with the same name as the #hash-tag
  $(window).hashchange( function(){
    var hash = location.hash;

    // add an class on the body with the same name as the #hash-tag
    $('body').addClass(' ' + ( hash.replace( /^#/, '' ) || 'blank' ));

    // target the option which has the same/corresponding id as the class set on the body, setting the "selected" attribute as-appropriate.
    $('.sm-home #sm-home').attr('selected',true).siblings('option').removeAttr('selected');
    $('.sm-blog #sm-blog').attr('selected',true).siblings('option').removeAttr('selected');
  })

  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).hashchange();

});
```

### Simplifying

Maybe one is overcomplicating things a bit when doing it like above, because if it is possible to set a class on the pages’ `body`-tags, and give the `select` `option`’s `id`’s like so:

```language-markup
<option id="sm-blog" value="http://mydomain.com/blog">Blog</option>
```

Then in that case you don't need the hashchange plugin after all, for you can target those options on the corresponding pages like this:

```language-javascript
$(function(){
  $('.home-page #sm-home').attr('selected',true).siblings('option').removeAttr('selected');
  $('.blog-page #sm-blog').attr('selected',true).siblings('option').removeAttr('selected');
    .....
});
```
When on WordPress, one should really use the classes that are set by WordPress on the different `body`-tags. (_one can check for this in Devtools/Firebug_) ...

For example a blogroll-page can have this `page-id-882` class set on the `body`-tag, so with jQuery javascript you can set the `selected` attribute on the `option id="sm-blog"` like this:

```language-javascript
$(function(){
  $('.page-id-882 #sm-blog').attr('selected',true).siblings('option').removeAttr('selected');
});
```

###Fix for iOS
This doesn't seem to work on iOS, at least on my iPad it will always show the most top option, even if there **is** a `selected` attribute set. To make this work in our advantage I tried the following: leave the top option (, where it used to say _"Menu"_,) empty, and also give that one an `id` :

```language-markup
<option id="sm-top" value="#!"></option>
```

Now we can insert some text in this option with javascript, using the same classes on the `body`-tags we set earlier, with jQuery's `.prepend` method for "_inside DOM Insertion_":

```language-javascript
  $('.home-page #sm-top').prepend('Home');
  $('.blog-page #sm-top').prepend('Blog');
```

Now also on iOS, we have our current page right in the top of the `select`-menu. On desktop it still goes to the `option` with the `selected` attribute, so having this extra option on top there may be redundant, but it wouldn't bother me that much.

<del>P.S. This doesn't seem to work on iOS, at least on my iPad it always shows the most top option ... but there are all kinds of issues with select-menus on iOS, so well ...</del> Fixed, see above.

#### Examples
- [demo on Codepen](http://codepen.io/atelierbram/pen/GjLvw)
- [a demo with the jQuery hashtag plugin](http://bramdeh.home.xs4all.nl/playground/ui-patterns/select-nav/) parked on my provider's site.
- [a simplified version with some small Jquery javascript](http://bramdeh.home.xs4all.nl/playground/ui-patterns/sitewide-selectnav/) parked on provider's site.
- [a Github Gist](https://gist.github.com/atelierbram/18d7489b81dc9acf0747)

<span class="note">This article was also published on [Codepen](http://codepen.io/atelierbram/post/select-menu-hashchange)</span>
