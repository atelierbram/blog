function insert() {
"use strict";

var hTitle= document.getElementById("css-shapes-in-multi-column-layout");
// var innerWrap = document.getElementById("innerWrap");
// var page = document.getElementById("page");

var note1 = document.getElementById("note-1");
var clonedNote1 = note1.cloneNode(true);
var supLink1 = document.getElementById("supLink1");

var note2 = document.getElementById("note-2");
var clonedNote2 = note2.cloneNode(true);
var supLink2 = document.getElementById("supLink2");

supLink1.appendChild(clonedNote1);
supLink2.appendChild(clonedNote2);

clonedNote1.id = "clonedNode1";
clonedNote2.id = "clonedNode2";

hTitle.classList.add("fs-desktop-vw-5_75");

  // innerWrap.insertBefore(hTitle, page);
}
insert();
