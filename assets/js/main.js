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

 

 /* Notice */  

        const filterBtns = document.querySelectorAll('.filter-btn');
        const noticeItems = document.querySelectorAll('.notice-item');

        filterBtns.forEach(btn => {

            btn.addEventListener('click', () => {

                filterBtns.forEach(b =>
                    b.classList.remove('active'));

                btn.classList.add('active');

                const filter =
                    btn.dataset.filter;

                noticeItems.forEach(item => {

                    if (
                        filter === 'all' ||
                        item.classList.contains(filter)
                    ) {

                        item.style.display = 'block';

                    } else {

                        item.style.display = 'none';

                    }

                });

            });

        });

  
