function insertRemove() {
"use strict";

var hTitle= document.getElementById("interplay-between-css-and-javascript-on-transitions");
var innerWrap = document.getElementById("innerWrap");
var page = document.getElementById("page");

var note1 = document.getElementById("note-1");
var clonedNote1 = note1.cloneNode(true);
var supLink1 = document.getElementById("supLink1");

var note2 = document.getElementById("note-2");
var clonedNote2 = note2.cloneNode(true);
var supLink2 = document.getElementById("supLink2");

var note3 = document.getElementById("note-3");
var clonedNote3 = note3.cloneNode(true);
var supLink3 = document.getElementById("supLink3");

supLink1.appendChild(clonedNote1);
supLink2.appendChild(clonedNote2);
supLink3.appendChild(clonedNote3);

clonedNote1.id = "clonedNode1";
clonedNote2.id = "clonedNode2";
clonedNote3.id = "clonedNode3";

hTitle.classList.add("has-moved-h2","fs-desktop-vw-5_25");

  innerWrap.insertBefore(hTitle, page);
}
insertRemove();
