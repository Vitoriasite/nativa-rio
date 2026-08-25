/* =========================================================
   NATIVA RIO - V4
   ========================================================= */


/* =========================================================
   WHATSAPP
   ========================================================= */

const WHATSAPP = "552492887705";

const WHATSAPP_MESSAGE =
  "Olá! Conheci a Nativa Rio pelo site e gostaria de fazer um orçamento.";


function whatsappUrl(message = WHATSAPP_MESSAGE) {

  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

}


/* Coloca o link correto em todos os botões */

document.querySelectorAll(".js-whatsapp").forEach(link => {

  const label = link.textContent.trim().toLowerCase();

  let message = WHATSAPP_MESSAGE;

  if (label.includes("chinelo")) {

    message =
      "Olá! Gostaria de saber mais sobre os chinelos personalizados da Nativa Rio.";

  }

  if (label.includes("vestuário")) {

    message =
      "Olá! Gostaria de saber mais sobre o vestuário personalizado da Nativa Rio.";

  }

  if (label.includes("criar")) {

    message =
      "Olá! Tenho uma ideia e gostaria de criar um produto personalizado com a Nativa Rio.";

  }

  link.href = whatsappUrl(message);

});


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", () => {

    const open =
      mobileMenu.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(open)
    );

  });


  document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

}


/* =========================================================
   HERO SLIDER
   ========================================================= */

const slides =
  [...document.querySelectorAll(".hero-slide")];

const dots =
  [...document.querySelectorAll("#heroDots button")];

let currentSlide = 0;

let heroTimer;


function showSlide(index) {

  if (!slides.length) return;

  currentSlide =
    (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {

    slide.classList.toggle(
      "active",
      i === currentSlide
    );

  });


  dots.forEach((dot, i) => {

    dot.classList.toggle(
      "active",
      i === currentSlide
    );

  });

}


function startHero() {

  clearInterval(heroTimer);

  heroTimer = setInterval(() => {

    showSlide(currentSlide + 1);

  }, 4200);

}


dots.forEach((dot, i) => {

  dot.addEventListener("click", () => {

    showSlide(i);

    startHero();

  });

});


showSlide(0);

startHero();


/* =========================================================
   GALERIA DINÂMICA
   ========================================================= */

const galleryMain =
  document.getElementById("galleryMainImage");

const galleryLabel =
  document.getElementById("galleryLabel");

const galleryCount =
  document.getElementById("galleryCount");

const thumbs =
  [...document.querySelectorAll(".gallery-thumb")];

let galleryIndex = 0;

let galleryTimer;


function showGallery(index) {

  if (
    !galleryMain ||
    !galleryLabel ||
    !galleryCount ||
    !thumbs.length
  ) {
    return;
  }


  galleryIndex =
    (index + thumbs.length) % thumbs.length;


  const thumb =
    thumbs[galleryIndex];


  galleryMain.style.opacity = "0";


  setTimeout(() => {

    galleryMain.src =
      thumb.dataset.image;

    galleryMain.alt =
      `Nativa Rio — ${thumb.dataset.label}`;

    galleryLabel.textContent =
      thumb.dataset.label;

    galleryCount.textContent =
      `0${galleryIndex + 1} / 0${thumbs.length}`;

    galleryMain.style.opacity = "1";

  }, 180);


  thumbs.forEach((t, i) => {

    t.classList.toggle(
      "active",
      i === galleryIndex
    );

  });

}


function startGallery() {

  clearInterval(galleryTimer);

  galleryTimer = setInterval(() => {

    showGallery(galleryIndex + 1);

  }, 5000);

}


thumbs.forEach((thumb, i) => {

  thumb.addEventListener("click", () => {

    showGallery(i);

    startGallery();

  });

});


showGallery(0);

startGallery();


/* =========================================================
   ANIMAÇÕES AO ROLAR
   ========================================================= */

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
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    revealObserver.observe(element);

  });


/* =========================================================
   EFEITO DE CURSOR
   ========================================================= */

const cursorGlow =
  document.querySelector(".cursor-glow");


if (cursorGlow) {

  window.addEventListener(
    "pointermove",
    event => {

      cursorGlow.style.left =
        `${event.clientX}px`;

      cursorGlow.style.top =
        `${event.clientY}px`;

    },
    {
      passive: true
    }
  );

}


/* =========================================================
   HEADER AO ROLAR
   ========================================================= */

const header =
  document.getElementById("header");


if (header) {

  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 80) {

        header.classList.add("scrolled");

      } else {

        header.classList.remove("scrolled");

      }

    },
    {
      passive: true
    }
  );

}


/* =========================================================
   PAUSA SLIDERS QUANDO A ABA NÃO ESTÁ VISÍVEL
   ========================================================= */

document.addEventListener(
  "visibilitychange",
  () => {

    if (document.hidden) {

      clearInterval(heroTimer);
      clearInterval(galleryTimer);

    } else {

      startHero();
      startGallery();

    }

  }
);
