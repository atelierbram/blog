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
  // btnMenu.setAttribute("style", "display:inline-block;-webkit-appearance:none;background-image:none;background-color:transparent;border:1px solid transparent");

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

  // var symbolAirventIconOuter= document.createElementNS(SVG_NS, 'path');
  var symbolAirventIconBg = document.createElementNS(SVG_NS, 'circle');
  var symbolAirventIconFan = document.createElementNS(SVG_NS, 'path');
  var symbolAirventIconMiddot = document.createElementNS(SVG_NS, 'circle');
  // var symbolAirventRotate = document.createElementNS(SVG_NS, 'animateTransform');
  // var symbolAirventIconGrate= document.createElementNS(SVG_NS, 'path');

  symbolAirventIcon.setAttributeNS(null, 'id','AirventIcon');
  symbolAirventIcon.setAttributeNS(null, 'viewport','0 0 42 42');
  symbolAirventIcon.setAttributeNS(null, 'width','42');
  symbolAirventIcon.setAttributeNS(null, 'height','42');

  // symbolAirventIconOuter.setAttributeNS(null, 'fill','#c9cddf');
  // symbolAirventIconOuter.setAttributeNS(null, 'd','M40.5,39c-0.025,0.177-0.229,0.729-0.5,1s-0.728,0.432-1,0.5c-3.25,0.812-16.992,1.506-18,1.5 c-1.02-0.006-15.267-0.684-18-1.5c-0.272-0.082-0.866-0.384-1-0.5c-0.167-0.134-0.547-0.578-0.7-1C0.35,36.383-0.001,22.021,0,21 C0.002,20.005,0.788,6.4,1.5,3C1.521,2.899,1.729,2.271,2,2s0.848-0.458,1-0.5C6.463,0.538,19.98,0.008,21,0 c0.996-0.008,14.554,0.782,18,1.5c0.273,0.057,0.729,0.229,1,0.5s0.465,0.757,0.5,1C41,6.425,42,19.992,42,21S41,35.6,40.5,39z');

  symbolAirventIconBg.setAttributeNS(null, 'fill','#ffffff');
  symbolAirventIconBg.setAttributeNS(null, 'cx','21');
  symbolAirventIconBg.setAttributeNS(null, 'cy','21');
  symbolAirventIconBg.setAttributeNS(null, 'r','17');

  symbolAirventIconFan.setAttributeNS(null, 'fill','#dfe2f1');
  symbolAirventIconFan.setAttributeNS(null, 'd','M34.09,19.289c-2.55-1.46-5.265-0.164-7.939-0.539c-3.75-0.425-3.925-3.175-3.96-3.698 c-0.122-1.825,0.716-3.534,1.51-4.477C25.825,8.05,29.25,8.15,28.301,7c-0.544-0.658-3.75-2-7.3-2c-2.4,0-7.914,1.8-8,5.5 c-0.05,2.15,1.3,3.6,3.15,6.5c1.794,2.813,0.845,6.527-4,6.9c-4.55,0.35-6.136-3.886-6.926-2.25 c-0.371,0.769,0.136,4.248,1.905,7.325c1.196,2.081,5.471,6.058,8.755,4.194c3.832-2.175,3.915-11.536,10.416-7.72 c2.393,1.405,3.133,4.584,2.633,8.05c-0.007,0.047,0,0.867,0.574,0.801c0.848-0.098,3.602-2.257,5.369-5.335 C36.071,26.884,37.25,21.101,34.09,19.289z');
  // symbolAirventRotate.setAttributeNS(null, 'attributeName','transform');
  // symbolAirventRotate.setAttributeNS(null, 'type','rotate');
  // symbolAirventRotate.setAttributeNS(null, 'from','0 21 21');
  // symbolAirventRotate.setAttributeNS(null, 'to','360 21 21');
  // symbolAirventRotate.setAttributeNS(null, 'begin','0s');
  // symbolAirventRotate.setAttributeNS(null, 'dur','2s');
  // symbolAirventRotate.setAttributeNS(null, 'repeatCount','indefinite');
  //
  // symbolAirventIconFan.appendChild(symbolAirventRotate);

  symbolAirventIconMiddot.setAttributeNS(null, 'fill','#d7daea');
  symbolAirventIconMiddot.setAttributeNS(null, 'cx','21');
  symbolAirventIconMiddot.setAttributeNS(null, 'cy','21');
  symbolAirventIconMiddot.setAttributeNS(null, 'r','4');

  // symbolAirventIconGrate.setAttributeNS(null, 'id','grate');
  // symbolAirventIconGrate.setAttributeNS(null, 'fill','#202746');
  // symbolAirventIconGrate.setAttributeNS(null, 'opacity','0.4');
  // symbolAirventIconGrate.setAttributeNS(null, 'd','M40.5,3c-0.035-0.243-0.229-0.729-0.5-1s-0.727-0.443-1-0.5C35.554,0.783,21.995-0.008,21,0 C19.98,0.009,6.462,0.538,3,1.5C2.848,1.542,2.271,1.729,2,2S1.521,2.899,1.5,3C0.788,6.4,0.001,20.005,0,21 c-0.001,1.021,0.35,15.384,1.3,18c0.153,0.422,0.534,0.867,0.7,1c0.133,0.117,0.727,0.419,1,0.5c2.733,0.816,16.98,1.494,18,1.5 c1.008,0.006,14.75-0.688,18-1.5c0.272-0.068,0.729-0.229,1-0.5s0.474-0.822,0.5-1C41,35.601,42,22.008,42,21S41,6.425,40.5,3z M30,28H12v-2h18V28z M30,22H12v-2h18V22z M30,16H12v-2h18V16z');
  //
  // symbolAirventIcon.appendChild(symbolAirventIconOuter);
  symbolAirventIcon.appendChild(symbolAirventIconBg);
  symbolAirventIcon.appendChild(symbolAirventIconFan);
  symbolAirventIcon.appendChild(symbolAirventIconMiddot);
  // symbolAirventIcon.appendChild(symbolAirventIconGrate);

  svgMenu.appendChild(symbolAirventIcon);

  var header = document.getElementById("header");
  var btnMenu = document.getElementById("btnMenu");
  var targetEl = header.firstChild;
  header.insertBefore(svgMenu, targetEl);

  btnMenu.innerHTML="<svg class='shape-airvent' viewBox='0 0 42 42' width='0' height='0' fill='transparent'><use xlink:href='#AirventIcon'></use></svg>";

  var homeLink = document.querySelector("#navList li:first-child a");
  homeLink.setAttribute("style","background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2040%2040%22%3E%3Cg%3E%3Cpath%20fill%3D%22%234879c9%22%20d%3D%22M33.4%2C36h-9.736C23.299%2C36%2C23%2C35.702%2C23%2C35.334V26h-6v9.334C17%2C35.702%2C16.707%2C36%2C16.34%2C36H6.7%20C6.332%2C36%2C6%2C35.702%2C6%2C35.334V19H4.667c-0.277%2C0-0.526-0.172-0.624-0.433c-0.098-0.261-0.022-0.553%2C0.187-0.737L19.556%2C4.18%20c0.25-0.219%2C0.624-0.219%2C0.874%2C0L24%2C7.277V4.682c0-0.368%2C0.292-0.665%2C0.657-0.665L30.4%2C4.016c0.366%2C0%2C0.6%2C0.299%2C0.6%2C0.667V13%20l4.756%2C4.831c0.208%2C0.184%2C0.285%2C0.476%2C0.187%2C0.737C35.845%2C18.828%2C35.596%2C19%2C35.318%2C19H34v16.334C34%2C35.702%2C33.77%2C36%2C33.4%2C36z%20M25%2C34h7V17l-3-3V6h-3v3.74c0%2C0.261-0.168%2C0.544-0.406%2C0.651c-0.235%2C0.109-0.516%2C0.203-0.969-0.016C24.605%2C10.365%2C20%2C6.5%2C20%2C6.5%20L8%2C17v17h7v-9.33c0-0.369%2C0.293-0.67%2C0.661-0.67h8.663c0.366%2C0%2C0.666%2C0.301%2C0.666%2C0.67L25%2C34z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A')");
}


else {
  document.documentElement.className += ' no-svg';
  btnMenu.setAttribute("style","background:#ddd url(https://lh4.googleusercontent.com/-2kq22Bju9mw/VFQHsrbt-aI/AAAAAAAABC0/C_QHkvw91xo/s800/hamburger-menu_42x32.png) 0 0 no-repeat");
  homeLink.setAttribute("style","width:auto;height:auto;color:#4879c9");
}


// function addListeners(){
//   document.getElementById('btnMenu').addEventListener("mouseout", btn1func);
//   document.getElementById('btnMenu').addEventListener("mouseover", btn2func);
//   function btn1func(){
//     symbolAirventRotate.setAttributeNS(null, 'dur','1s');
//   }
//   function btn2func(){
//     symbolAirventRotate.setAttributeNS(null, 'dur','0.5s');
//   }
// }
// window.addEventListener("load", addListeners);
//
supportsSVG();
