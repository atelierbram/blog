function insertRemove() {
"use strict";

var hTitle= document.getElementById("generate-a-static-website-with-assemble");
var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

hTitle.classList.add("has-moved-h2","fs-desktop-vw-6_75","fs-3_75");

  innerWrap.insertBefore(hTitle, page);
}
insertRemove();
