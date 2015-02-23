function insertRemove() {
"use strict";

var hTitle= document.getElementById("site-wide-navigation-with-select-menu");
var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

hTitle.classList.add("has-moved-h2","fs-desktop-vw-4_75");

  innerWrap.insertBefore(hTitle, page);
}
insertRemove();
