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
  svgMenu.setAttributeNS(null, 'viewBox', '0 0 16 12');
  svgMenu.setAttributeNS(null, 'width', '16');
  svgMenu.setAttributeNS(null, 'height', '12');

  var symbolHamburgerIcon = document.createElementNS(SVG_NS, 'symbol');

  var symbolHamburgerIconRect1 = document.createElementNS(SVG_NS, 'rect');
  var symbolHamburgerIconRect2 = document.createElementNS(SVG_NS, 'rect');
  var symbolHamburgerIconRect3 = document.createElementNS(SVG_NS, 'rect');

  symbolHamburgerIcon.setAttributeNS(null, 'id','hamburgerIcon');
  symbolHamburgerIcon.setAttributeNS(null, 'viewport','0 0 16 12');
  symbolHamburgerIcon.setAttributeNS(null, 'width','16');
  symbolHamburgerIcon.setAttributeNS(null, 'height','12');
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

  var header = document.getElementById("header");
  var btnMenu = document.getElementById("btnMenu");
  var targetEl = header.firstChild;
  header.insertBefore(svgMenu, targetEl);

  btnMenu.innerHTML="<svg class='shape-icon shape-hamburger' viewBox='0 0 16 12' width='0' height='0' fill='transparent'><use xlink:href='#hamburgerIcon'></use></svg>";

  var homeLink = document.querySelector("#navList li:first-child a");
  homeLink.setAttribute("style","background: #fff url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2040%2040%22%3E%3Cg%3E%3Cpath%20fill%3D%22%234879c9%22%20d%3D%22M33.4%2C36h-9.736C23.299%2C36%2C23%2C35.702%2C23%2C35.334V26h-6v9.334C17%2C35.702%2C16.707%2C36%2C16.34%2C36H6.7%20C6.332%2C36%2C6%2C35.702%2C6%2C35.334V19H4.667c-0.277%2C0-0.526-0.172-0.624-0.433c-0.098-0.261-0.022-0.553%2C0.187-0.737L19.556%2C4.18%20c0.25-0.219%2C0.624-0.219%2C0.874%2C0L24%2C7.277V4.682c0-0.368%2C0.292-0.665%2C0.657-0.665L30.4%2C4.016c0.366%2C0%2C0.6%2C0.299%2C0.6%2C0.667V13%20l4.756%2C4.831c0.208%2C0.184%2C0.285%2C0.476%2C0.187%2C0.737C35.845%2C18.828%2C35.596%2C19%2C35.318%2C19H34v16.334C34%2C35.702%2C33.77%2C36%2C33.4%2C36z%20M25%2C34h7V17l-3-3V6h-3v3.74c0%2C0.261-0.168%2C0.544-0.406%2C0.651c-0.235%2C0.109-0.516%2C0.203-0.969-0.016C24.605%2C10.365%2C20%2C6.5%2C20%2C6.5%20L8%2C17v17h7v-9.33c0-0.369%2C0.293-0.67%2C0.661-0.67h8.663c0.366%2C0%2C0.666%2C0.301%2C0.666%2C0.67L25%2C34z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A') no-repeat 0 0");
}
else {
  document.documentElement.className += ' no-svg';
  btnMenu.setAttribute("style","background:#ddd url(https://lh4.googleusercontent.com/-2kq22Bju9mw/VFQHsrbt-aI/AAAAAAAABC0/C_QHkvw91xo/s800/hamburger-menu_42x32.png) 0 0 no-repeat");
  homeLink.setAttribute("style","width:auto;height:auto;color:#4879c9");
}
supportsSVG();
