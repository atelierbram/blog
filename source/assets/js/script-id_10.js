function insertRemove() {
"use strict";

var hTitle= document.getElementById("alpha-transparency-in-8-digits-hex-notation");

var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

hTitle.classList.add("has-moved-h2","fs-desktop-vw-9_5","fs-3_5");

  innerWrap.insertBefore(hTitle, page);

}
insertRemove();
