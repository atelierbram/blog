function insertRemove() {
"use strict";

var hTitle= document.getElementById("interplay-between-css-and-javascript-on-transitions");
var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

hTitle.classList.add("has-moved-h2","fs-desktop-vw-3_75");

  innerWrap.insertBefore(hTitle, page);
}
insertRemove();
