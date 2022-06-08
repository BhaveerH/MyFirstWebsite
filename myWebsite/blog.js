const btnDesign = document.getElementById('linkDesign');
const btnIndex = document.getElementById('linkIndex');
const btnPort = document.getElementById('linkPort');
const bLinkOne = document.getElementById('linkOne');
const bLinkTwo = document.getElementById('linkTwo');
const bLinkThree = document.getElementById('linkThree');
const bLinkFour = document.getElementById('linkFour');
const bLinkFive = document.getElementById('linkFive');
const bLinkSix = document.getElementById('linkSix');
const bLinkSeven = document.getElementById('linkSeven');
const bLinkEight = document.getElementById('linkEight');
const bLinkNine = document.getElementById('linkNine');
const bLinkTen = document.getElementById('linkTen');

function designLinkClick() {
  window.open("design.html", "_blank");
}

function homeLinkClick() {
  window.open("../index.html", "_blank");
}

function portLinkClick() {
  window.open("portfolio.html", "_blank");
}

function bLinkOneClick() {
  window.open("blog.html", "_self");
}

function bLinkTwoClick() {
  window.open("blog2.html", "_self");
}

function bLinkThreeClick() {
  window.open("blog3.html", "_self");
}

function bLinkFourClick() {
  window.open("blog4.html", "_self");
}

function bLinkFiveClick() {
  window.open("blog5.html", "_self");
}

function bLinkSixClick() {
  window.open("blog6.html", "_self");
}

function bLinkSevenClick() {
  window.open("blog7.html", "_self");
}

function bLinkEightClick() {
  window.open("blog8.html", "_self");
}

function bLinkNineClick() {
  window.open("blog9.html", "_self");
}

function bLinkTenClick() {
  window.open("blog10.html", "_self");
}

btnDesign.addEventListener('click', designLinkClick);
btnIndex.addEventListener('click', homeLinkClick);
btnPort.addEventListener('click', portLinkClick);
bLinkOne.addEventListener('click', bLinkOneClick);
bLinkTwo.addEventListener('click', bLinkTwoClick);
bLinkThree.addEventListener('click',bLinkThreeClick);
bLinkFour.addEventListener('click', bLinkFourClick);
bLinkFive.addEventListener('click', bLinkFiveClick);
bLinkSix.addEventListener('click', bLinkSixClick);
bLinkSeven.addEventListener('click', bLinkSevenClick);
bLinkEight.addEventListener('click', bLinkEightClick);
bLinkNine.addEventListener('click', bLinkNineClick);
bLinkTen.addEventListener('click', bLinkTenClick);