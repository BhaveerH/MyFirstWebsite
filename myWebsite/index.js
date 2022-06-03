const sText = "Hi! I'm Bhaveer";
const btnDesign = document.getElementById('linkDesign');
const btnBlog = document.getElementById('linkBlog');
const btnPort = document.getElementById('linkPort');
const btnIconDesign = document.getElementById('iconDesignLink');
const btnIconBlog = document.getElementById('iconBlogLink');
const btnIconPort = document.getElementById('iconPortLink');
let iCount = 0;
let currentText = "";
let sCurrentPlace = "";
typing();
function typing() {
sCurrentPlace = sText.slice(0, ++iCount);
document.querySelector(".Hello").textContent = sCurrentPlace;
if (sCurrentPlace.length === sText.length) {
  iCount = 0;
}
setTimeout(typing, 250);
}

function designLinkClick() {
  window.open("myWebsite/design.html", "_blank");
}

function blogLinkClick() {
  window.open("myWebsite/blog.html", "_blank");
}

function portLinkClick() {
  window.open("myWebsite/portfolio.html", "_blank");
}

btnDesign.addEventListener('click', designLinkClick);
btnBlog.addEventListener('click', blogLinkClick);
btnPort.addEventListener('click', portLinkClick);
btnIconDesign.addEventListener('click', designLinkClick);
btnIconBlog.addEventListener('click', blogLinkClick);
btnIconPort.addEventListener('click', portLinkClick);