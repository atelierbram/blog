function insertRemove() {
"use strict";

var hTitle= document.getElementById("assembling");
var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

hTitle.classList.add("has-moved-h2","fs-desktop-vw-15_75","fs-3_75");

  innerWrap.insertBefore(hTitle, page);
}
insertRemove();
