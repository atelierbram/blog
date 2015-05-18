// http://sitechop.com/front-end/svg-sprite-social-media-icons-tutorial
// https://developer.mozilla.org/en-US/docs/Web/SVG/Namespaces_Crash_Course

function insertBtn() {
  "use strict";
  var header = document.getElementById("header");

  var uiGutter = window.document.createElement("div");
  var btnMenu = window.document.createElement("button");
  var pageWrap = document.getElementById("pageWrap");

  uiGutter.setAttribute("class", "ui-gutter");

  btnMenu.setAttribute("class", "btn btn-menu");
  btnMenu.setAttribute("id", "btnMenu");
  btnMenu.setAttribute("style", "display:inline-block;-webkit-appearance:none;background-image:none;background-color:transparent;border:1px solid transparent");

  uiGutter.appendChild(btnMenu);
  header.appendChild(uiGutter);

  btnMenu.onclick= function () {
    document.body.classList.toggle('has-nav-active');
  };
  pageWrap.onclick= function () {
    document.body.classList.remove('has-nav-active');
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
  svgMenu.setAttributeNS(null, 'viewBox', '0 0 42 42');
  svgMenu.setAttributeNS(null, 'width', '42');
  svgMenu.setAttributeNS(null, 'height', '42');

  var symbolAirventIcon = document.createElementNS(SVG_NS, 'symbol');

  var symbolAirventIconOuterRing = document.createElementNS(SVG_NS, 'path');
  var symbolAirventIconBg = document.createElementNS(SVG_NS, 'circle');
  var symbolAirventIconFan = document.createElementNS(SVG_NS, 'path');
  var symbolAirventIconMiddot = document.createElementNS(SVG_NS, 'circle');
  var symbolAirventRotate = document.createElementNS(SVG_NS, 'animateTransform');

  symbolAirventIcon.setAttributeNS(null, 'id','AirventIcon');
  symbolAirventIcon.setAttributeNS(null, 'viewport','0 0 42 42');
  symbolAirventIcon.setAttributeNS(null, 'width','42');
  symbolAirventIcon.setAttributeNS(null, 'height','42');

  symbolAirventIconOuterRing.setAttributeNS(null, 'fill','#adb2c4');
  symbolAirventIconOuterRing.setAttributeNS(null, 'd','M21,0C9.402,0,0,9.402,0,21c0,11.598,9.402,21,21,21c11.598,0,21-9.402,21-21C42,9.402,32.598,0,21,0z M21,38c-9.389,0-17-7.611-17-17S11.611,4,21,4c9.389,0,17,7.611,17,17S30.389,38,21,38z');

  symbolAirventIconBg.setAttributeNS(null, 'fill','#ffffff');
  symbolAirventIconBg.setAttributeNS(null, 'cx','21');
  symbolAirventIconBg.setAttributeNS(null, 'cy','21');
  symbolAirventIconBg.setAttributeNS(null, 'r','17');

  symbolAirventIconFan.setAttributeNS(null, 'fill','#dfe2f1');
  symbolAirventIconFan.setAttributeNS(null, 'd','M34.09,19.289c-2.55-1.46-5.265-0.164-7.939-0.539c-3.75-0.425-3.925-3.175-3.96-3.698 c-0.122-1.825,0.716-3.534,1.51-4.477C25.825,8.05,29.25,8.15,28.301,7c-0.544-0.658-3.75-2-7.3-2c-2.4,0-7.914,1.8-8,5.5 c-0.05,2.15,1.3,3.6,3.15,6.5c1.794,2.813,0.845,6.527-4,6.9c-4.55,0.35-6.136-3.886-6.926-2.25 c-0.371,0.769,0.136,4.248,1.905,7.325c1.196,2.081,5.471,6.058,8.755,4.194c3.832-2.175,3.915-11.536,10.416-7.72 c2.393,1.405,3.133,4.584,2.633,8.05c-0.007,0.047,0,0.867,0.574,0.801c0.848-0.098,3.602-2.257,5.369-5.335 C36.071,26.884,37.25,21.101,34.09,19.289z');
  symbolAirventRotate.setAttributeNS(null, 'attributeName','transform');
  symbolAirventRotate.setAttributeNS(null, 'type','rotate');
  symbolAirventRotate.setAttributeNS(null, 'from','0 21 21');
  symbolAirventRotate.setAttributeNS(null, 'to','360 21 21');
  symbolAirventRotate.setAttributeNS(null, 'begin','0s');
  symbolAirventRotate.setAttributeNS(null, 'dur','2s');
  symbolAirventRotate.setAttributeNS(null, 'repeatCount','indefinite');

  symbolAirventIconFan.appendChild(symbolAirventRotate);

  symbolAirventIconMiddot.setAttributeNS(null, 'fill','#adb2c4');
  symbolAirventIconMiddot.setAttributeNS(null, 'cx','21');
  symbolAirventIconMiddot.setAttributeNS(null, 'cy','21');
  symbolAirventIconMiddot.setAttributeNS(null, 'r','4');

  symbolAirventIcon.appendChild(symbolAirventIconOuterRing);
  symbolAirventIcon.appendChild(symbolAirventIconBg);
  symbolAirventIcon.appendChild(symbolAirventIconFan);
  symbolAirventIcon.appendChild(symbolAirventIconMiddot);

  svgMenu.appendChild(symbolAirventIcon);

  var header = document.getElementById("header");
  var btnMenu = document.getElementById("btnMenu");
  var targetEl = header.firstChild;
  header.insertBefore(svgMenu, targetEl);

  btnMenu.innerHTML="<svg class='shape-airvent' viewBox='0 0 42 42' width='0' height='0' fill='transparent'><use xlink:href='#AirventIcon'></use></svg>";

  var homeLink = document.querySelector("#navList li:first-child a");
  homeLink.setAttribute("style","background: #fff url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2040%2040%22%3E%3Cg%3E%3Cpath%20fill%3D%22%234879c9%22%20d%3D%22M33.4%2C36h-9.736C23.299%2C36%2C23%2C35.702%2C23%2C35.334V26h-6v9.334C17%2C35.702%2C16.707%2C36%2C16.34%2C36H6.7%20C6.332%2C36%2C6%2C35.702%2C6%2C35.334V19H4.667c-0.277%2C0-0.526-0.172-0.624-0.433c-0.098-0.261-0.022-0.553%2C0.187-0.737L19.556%2C4.18%20c0.25-0.219%2C0.624-0.219%2C0.874%2C0L24%2C7.277V4.682c0-0.368%2C0.292-0.665%2C0.657-0.665L30.4%2C4.016c0.366%2C0%2C0.6%2C0.299%2C0.6%2C0.667V13%20l4.756%2C4.831c0.208%2C0.184%2C0.285%2C0.476%2C0.187%2C0.737C35.845%2C18.828%2C35.596%2C19%2C35.318%2C19H34v16.334C34%2C35.702%2C33.77%2C36%2C33.4%2C36z%20M25%2C34h7V17l-3-3V6h-3v3.74c0%2C0.261-0.168%2C0.544-0.406%2C0.651c-0.235%2C0.109-0.516%2C0.203-0.969-0.016C24.605%2C10.365%2C20%2C6.5%2C20%2C6.5%20L8%2C17v17h7v-9.33c0-0.369%2C0.293-0.67%2C0.661-0.67h8.663c0.366%2C0%2C0.666%2C0.301%2C0.666%2C0.67L25%2C34z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A') no-repeat 0 0");
}


else {
  document.documentElement.className += ' no-svg';
  btnMenu.setAttribute("style","background:#ddd url(https://lh4.googleusercontent.com/-2kq22Bju9mw/VFQHsrbt-aI/AAAAAAAABC0/C_QHkvw91xo/s800/hamburger-menu_42x32.png) 0 0 no-repeat");
  homeLink.setAttribute("style","width:auto;height:auto;color:#4879c9");
}


 function addListeners(){
  document.getElementById('btnMenu').addEventListener("mouseout", btn1func);
  document.getElementById('btnMenu').addEventListener("mouseover", btn2func);
  function btn1func(){
    symbolAirventRotate.setAttributeNS(null, 'dur','1s');
  }
  function btn2func(){
    symbolAirventRotate.setAttributeNS(null, 'dur','0.5s');
  }
}
window.addEventListener("load", addListeners);

supportsSVG();
