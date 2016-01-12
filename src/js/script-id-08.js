function insertRemove() {
"use strict";

var hTitle= document.getElementById("on-editing-colorschemes-for-sublime-text");

var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

hTitle.classList.add("has-moved-h2","fs-desktop-vw-6_5","fs-4");

  innerWrap.insertBefore(hTitle, page);

}
insertRemove();
