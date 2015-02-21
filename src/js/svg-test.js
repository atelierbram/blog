// http://sitechop.com/front-end/svg-sprite-social-media-icons-tutorial
// https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course

function insertBtn() {
  "use strict";
  var header = document.getElementById("header");

  var uiGutter = window.document.createElement("div");
  var btnMenu = window.document.createElement("button");

  uiGutter.setAttribute("class", "ui-gutter");

  btnMenu.setAttribute("class", "btn btn-menu");
  btnMenu.setAttribute("id", "btnMenu");

  uiGutter.appendChild(btnMenu);
  header.appendChild(uiGutter);

  btnMenu.onclick= function () {
    document.body.classList.toggle('has-nav-active');
  };
}
insertBtn();

function supportsSVG() {
  "use strict";
  return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;
}
if (supportsSVG()) {
  document.documentElement.className += ' svg';


  var SVG_NS = 'http://www.w3.org/2000/svg';
  var svgMenu = document.createElementNS(SVG_NS, 'svg');
  svgMenu.setAttributeNS(null, "style", "display:none;");
  svgMenu.setAttributeNS(null, 'version', '1.1');

  var symbolHamburgerIcon = document.createElementNS(SVG_NS, 'symbol');

  var symbolHamburgerIconRect1 = document.createElementNS(SVG_NS, 'rect');
  var symbolHamburgerIconRect2 = document.createElementNS(SVG_NS, 'rect');
  var symbolHamburgerIconRect3 = document.createElementNS(SVG_NS, 'rect');

  symbolHamburgerIcon.setAttributeNS(null, 'id','hamburgerIcon');
  symbolHamburgerIcon.setAttributeNS(null, 'viewport','0 0 6 12');
  symbolHamburgerIconRect1.setAttributeNS(null, 'width','16');
  symbolHamburgerIconRect2.setAttributeNS(null, 'width','16');
  symbolHamburgerIconRect3.setAttributeNS(null, 'width','16');
  symbolHamburgerIconRect1.setAttributeNS(null, 'height','2');
  symbolHamburgerIconRect2.setAttributeNS(null, 'height','2');
  symbolHamburgerIconRect3.setAttributeNS(null, 'height','2');
  symbolHamburgerIconRect2.setAttributeNS(null, 'y','5');
  symbolHamburgerIconRect3.setAttributeNS(null, 'y','10');

  symbolHamburgerIcon.appendChild(symbolHamburgerIconRect1);
  symbolHamburgerIcon.appendChild(symbolHamburgerIconRect2);
  symbolHamburgerIcon.appendChild(symbolHamburgerIconRect3);

  svgMenu.appendChild(symbolHamburgerIcon);

  var targetEl = header.firstChild;
  header.insertBefore(svgMenu, targetEl);

  btnMenu.innerHTML="<svg class='shape-icon shape-hamburger'><use xlink:href='#hamburgerIcon'></use></svg><span class='btn-menu__text'>Menu</span>";
}
else {
  document.documentElement.className += ' no-svg';
  btnMenu.style.background = "url(img/hamburger-menu_42x32.png) 0 0 no-repeat"
}
supportsSVG();
