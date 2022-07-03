/*const btnDesign = document.getElementById('linkDesign');
const btnIndex = document.getElementById('linkIndex');
const btnBlog = document.getElementById('linkBlog'); */


 $(document).ready(function () {
        $(".wrapper").slick({
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: true,
        });
      });

/*function designLinkClick() {
  window.open("design.html", "_blank");
}

function homeLinkClick() {
  window.open("../index.html", "_blank");
}

function blogLinkClick() {
  window.open("blog.html", "_blank");
}

function mobileNav() {

  const bars = document.querySelector(".bars");
  const header = document.getElementById('HeaderNav');

  bars.addEventListener('click', e => {

    header.classList.toggle("mover");

  });

}
  mobileNav();

btnDesign.addEventListener('click', designLinkClick);
btnIndex.addEventListener('click', homeLinkClick);
btnBlog.addEventListener('click', blogLinkClick); */
