const btnDesign = document.getElementById('linkDesign');
const btnIndex = document.getElementById('linkIndex');
const btnPort = document.getElementById('linkPort');


function designLinkClick() {
  window.open("design.html", "_blank");
}

function homeLinkClick() {
  window.open("../index.html", "_blank");
}

function portLinkClick() {
  window.open("portfolio.html", "_blank");
}

btnDesign.addEventListener('click', designLinkClick);
btnIndex.addEventListener('click', homeLinkClick);
btnPort.addEventListener('click', portLinkClick);
