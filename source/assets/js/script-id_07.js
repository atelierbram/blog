function insertRemove() {
"use strict";

var hTitle= document.getElementById("differentiate-between-code-examples");

var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

hTitle.classList.add("has-moved-h2","fs-desktop-vw-5_5","fs-3");

  innerWrap.insertBefore(hTitle, page);

}
insertRemove();
