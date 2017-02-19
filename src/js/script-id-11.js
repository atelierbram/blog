function insertRemove() {
"use strict";

var hTitle= document.getElementById("lazy-loading-logos");

var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

hTitle.classList.add("has-moved-h2","fs-desktop-vw-10","fs-3_5");

  innerWrap.insertBefore(hTitle, page);

}
insertRemove();
