function insert() {
"use strict";

var hTitle= document.getElementById("template-sculpin-netlify");

hTitle.classList.add("fs-desktop-vw-12","fs-3_5");

var note1 = document.getElementById("note-1");
var clonedNote1 = note1.cloneNode(true);
var supLink1 = document.getElementById("supLink1");

supLink1.appendChild(clonedNote1);

clonedNote1.id = "clonedNode1";

}
insert();
