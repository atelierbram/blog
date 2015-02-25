function insertRemove() {
"use strict";

var hTitle= document.getElementById("css-shapes-in-multi-column-layout");
var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

hTitle.classList.add("has-moved-h2","fs-desktop-vw-7_25");

  innerWrap.insertBefore(hTitle, page);
}
insertRemove();
