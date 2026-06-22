document.addEventListener('DOMContentLoaded', function () {

    console.log("Naba Siksha School Website Loaded");

});

document.querySelector('.custom-toggler').addEventListener('click', function () {
    this.classList.toggle('active');
});


/* Active */

document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

        const linkPage = link.getAttribute("href");

        if(linkPage === currentPage){
            link.classList.add("active");
        }
    });

});

/* Social Arrow icon */
const toggleBtn = document.querySelector(".social-toggle");
const socialMenu = document.querySelector(".social-menu");

toggleBtn.addEventListener("click", () => {

    socialMenu.classList.toggle("show");

});
