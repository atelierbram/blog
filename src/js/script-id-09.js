function insertRemove() {
"use strict";

var hTitle= document.getElementById("switching-color-modes-in-svg");

var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

hTitle.classList.add("has-moved-h2","fs-desktop-vw-9","fs-4");

  innerWrap.insertBefore(hTitle, page);

}
insertRemove();
