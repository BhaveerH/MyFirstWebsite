const btnDesign = document.getElementById('linkDesign');
const btnIndex = document.getElementById('linkIndex');
const btnBlog = document.getElementById('linkBlog'); 
const btnPort = document.getElementById('linkPort'); 



function homeLinkClick() {
window.open("../index.html", "_blank");
}

function blogLinkClick() {
window.open("blog.html", "_blank");
}

function portLinkClick() {
    window.open("portfolio.html", "_blank");
}

function designLinkClick() {
    window.open("design.html", "_blank");
}

function mobileNav() {

const bars = document.querySelector(".bars");
const header = document.getElementById('HeaderNav');

bars.addEventListener('click', e => {

header.classList.toggle("mover");

});

}
mobileNav();


function nameCheck() {
    const  path = window.location.pathname;
    const page = path.split("/").pop();

    if (page === "portfolio.html") {                                // links to click for portfolio page
        btnIndex.addEventListener('click', homeLinkClick);
        btnDesign.addEventListener('click', designLinkClick);
        btnBlog.addEventListener('click', blogLinkClick);
    }
    else if (page[0] === 'd'){                                      // links for the design pages
        btnIndex.addEventListener('click', homeLinkClick);
        btnBlog.addEventListener('click', blogLinkClick);
        btnPort.addEventListener('click', portLinkClick);
    }
    else if (page[0] === 'b'){                                      // links for blog pages
        btnIndex.addEventListener('click', homeLinkClick);
        btnDesign.addEventListener('click', designLinkClick);
        btnPort.addEventListener('click', portLinkClick);
    }

}

nameCheck();

//links where done in this way as they did not want to work all togther without the if and else statements.
//The index page was left seperate for the navigation as gitHub requires the Index page to be outside the 
//website folder which changes how the links work only for the Index page



/*btnIndex.addEventListener('click', homeLinkClick);
btnPort.addEventListener('click', portLinkClick);
btnDesign.addEventListener('click', designLinkClick);
btnBlog.addEventListener('click', blogLinkClick); */
