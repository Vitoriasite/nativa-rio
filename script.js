/* ==========================================================
   NATIVA RIO — V3
========================================================== */


/* ==========================================================
   HEADER
========================================================== */

const header =
    document.getElementById("header");


function updateHeader() {

    if (window.scrollY > 35) {

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



/* ==========================================================
   MENU MOBILE
========================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


function closeMobileMenu() {

    mobileMenu.classList.remove("active");

    document.body.classList.remove(
        "menu-open"
    );

}


menuButton.addEventListener(
    "click",
    function () {

        mobileMenu.classList.toggle(
            "active"
        );

        document.body.classList.toggle(
            "menu-open"
        );

    }
);


const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu a"
    );


mobileLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    }
);



/* ==========================================================
   REVEAL
========================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: .12,

            rootMargin:
                "0px 0px -40px 0px"

        }

    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);



/* ==========================================================
   PARALLAX DO PRODUTO
========================================================== */

const heroImage =
    document.querySelector(
        ".hero-image"
    );


if (
    heroImage &&
    window.innerWidth > 900
) {

    window.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (
                    event.clientX /
                    window.innerWidth -
                    .5
                ) * 7;


            const y =
                (
                    event.clientY /
                    window.innerHeight -
                    .5
                ) * 5;


            heroImage.style.transform =
                `translate(${x}px, ${y}px) rotate(-4deg)`;

        },
        { passive: true }
    );

}



/* ==========================================================
   ANIMAÇÃO DOS PASSOS
========================================================== */

const steps =
    document.querySelectorAll(
        ".step"
    );


steps.forEach(
    function (step, index) {

        step.style.transitionDelay =
            `${index * 80}ms`;

    }
);



/* ==========================================================
   ANIMAÇÃO DNA
========================================================== */

const dnaCards =
    document.querySelectorAll(
        ".dna-card"
    );


dnaCards.forEach(
    function (card, index) {

        card.style.transitionDelay =
            `${index * 90}ms`;

    }
);



/* ==========================================================
   ANO AUTOMÁTICO
========================================================== */

const copyright =
    document.getElementById(
        "copyright"
    );


if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} NATIVA RIO`;

}



/* ==========================================================
   FECHAR MENU AO REDIMENSIONAR
========================================================== */

window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 700) {

            closeMobileMenu();

        }

    }
);



/* ==========================================================
   SCROLL SUAVE PARA LINKS
========================================================== */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerHeight =
                    header.offsetHeight;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    15;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    }
);
