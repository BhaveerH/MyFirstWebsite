const btnBlog = document.getElementById('linkBlog');
const btnIndex = document.getElementById('linkIndex');
const btnPort = document.getElementById('linkPort');


function blogLinkClick() {
  window.open("blog.html", "_blank");
}

function homeLinkClick() {
  window.open("../index.html", "_blank");
}

function portLinkClick() {
  window.open("portfolio.html", "_blank");
}

btnBlog.addEventListener('click', blogLinkClick);
btnIndex.addEventListener('click', homeLinkClick);
btnPort.addEventListener('click', portLinkClick);