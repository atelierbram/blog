function insertRemove() {
"use strict";

var hTitle= document.getElementById("colorscheming-for-syntax-highlighting");
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

var note4 = document.getElementById("note-4");
var clonedNote4 = note4.cloneNode(true);
var supLink4 = document.getElementById("supLink4");

supLink1.appendChild(clonedNote1);
supLink2.appendChild(clonedNote2);
supLink3.appendChild(clonedNote3);
supLink4.appendChild(clonedNote4);

// http://stackoverflow.com/questions/12431545/setting-an-attribute-of-a-child-div-inside-a-cloned-node
// clonedNote2.querySelectorAll('[id="note-2"]')[0].id = "new-id";
clonedNote1.id = "clonedNode1";
clonedNote2.id = "clonedNode2";
clonedNote3.id = "clonedNode3";
clonedNote4.id = "clonedNode4";

hTitle.classList.add("has-moved-h2","fs-desktop-vw-7","fs-4");

  innerWrap.insertBefore(hTitle, page);

}
insertRemove();
