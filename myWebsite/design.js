const btnBlog = document.getElementById('linkBlog');
const btnIndex = document.getElementById('linkIndex');
const btnPort = document.getElementById('linkPort');
const dLinkOne = document.getElementById('linkOne');
const dLinkTwo = document.getElementById('linkTwo');
const dLinkThree = document.getElementById('linkThree');
const dLinkFour = document.getElementById('linkFour');
const dLinkFive = document.getElementById('linkFive');
const dLinkSix = document.getElementById('linkSix');
const dLinkSeven = document.getElementById('linkSeven');


function blogLinkClick() {
  window.open("blog.html", "_blank");
}

function homeLinkClick() {
  window.open("../index.html", "_blank");
}

function portLinkClick() {
  window.open("portfolio.html", "_blank");
}

function dLinkOneClick() {
  window.open("design.html", "_self");
}

function dLinkTwoClick() {
  window.open("design2.html", "_self");
}

function dLinkThreeClick() {
  window.open("design3.html", "_self");
}

function dLinkFourClick() {
  window.open("design4.html", "_self");
}

function dLinkFiveClick() {
  window.open("design5.html", "_self");
}

function dLinkSixClick() {
  window.open("design6.html", "_self");
}

function dLinkSevenClick() {
  window.open("design7.html", "_self");
}


btnBlog.addEventListener('click', blogLinkClick);
btnIndex.addEventListener('click', homeLinkClick);
btnPort.addEventListener('click', portLinkClick);
dLinkOne.addEventListener('click', dLinkOneClick);
dLinkTwo.addEventListener('click', dLinkTwoClick);
dLinkThree.addEventListener('click',dLinkThreeClick);
dLinkFour.addEventListener('click', dLinkFourClick);
dLinkFive.addEventListener('click', dLinkFiveClick);
dLinkSix.addEventListener('click', dLinkSixClick);
dLinkSeven.addEventListener('click', dLinkSevenClick);