/* =====================================================
   NATIVA RIO — V2
   ===================================================== */


/* =====================================================
   HEADER
===================================================== */

const header = document.getElementById("header");


function updateHeader() {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


updateHeader();



/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


function closeMenu() {

    mobileMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

}


menuToggle.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle("active");

        document.body.classList.toggle(
            "menu-open"
        );

    }
);



/* FECHAR AO CLICAR EM LINK */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu a"
    );


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        closeMenu
    );

});



/* =====================================================
   REVEAL AO ROLAR
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   PARALLAX LEVE NO HERO
===================================================== */

const heroProduct =
    document.querySelector(
        ".hero-product"
    );


if (heroProduct && window.innerWidth > 900) {

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    .5) * 10;


            const y =
                (event.clientY /
                    window.innerHeight -
                    .5) * 8;


            heroProduct.style.transform =
                `translate(${x}px, ${y}px) rotate(-3deg)`;

        },
        { passive: true }
    );

}



/* =====================================================
   ANO AUTOMÁTICO
===================================================== */

const year =
    document.querySelector(
        ".footer-bottom span:nth-child(2)"
    );


if (year) {

    year.textContent =
        `© ${new Date().getFullYear()} NATIVA RIO`;

}



/* =====================================================
   FECHAR MENU AO REDIMENSIONAR
===================================================== */

window.addEventListener(
    "resize",
    () => {

        if (window.innerWidth > 700) {

            closeMenu();

        }

    }
);



/* =====================================================
   ANIMAÇÃO DOS CARDS DE DNA
===================================================== */

const dnaItems =
    document.querySelectorAll(
        ".dna-item"
    );


dnaItems.forEach(
    (item, index) => {

        item.style.transitionDelay =
            `${index * 80}ms`;

    }
);



/* =====================================================
   ANIMAÇÃO DOS PASSOS
===================================================== */

const steps =
    document.querySelectorAll(
        ".step"
    );


steps.forEach(
    (step, index) => {

        step.style.transitionDelay =
            `${index * 80}ms`;

    }
);



/* =====================================================
   PREVENIR CLIQUES VAZIOS
===================================================== */

const emptyLinks =
    document.querySelectorAll(
        'a[href="#"]'
    );


emptyLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            event.preventDefault();

        }
    );

});
