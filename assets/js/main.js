// ============================================
// Furnish — Main JavaScript
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // --- Hero Slider ---
  var heroSwiper = new Swiper("#hero-slider", {
    speed: 800,
    spaceBetween: 100,
    pagination: true,
    navigation: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    effect: "slide",
    loop: false,
    pagination: {
      el: "#hero-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#hero-slider .swiper-button-next",
      prevEl: "#hero-slider .swiper-button-prev",
    },
    breakpoints: {
      480: { slidesPerView: 2 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    },
  });

  // --- Collection Slider ---
  var collectionSwiper = new Swiper("#collection-slider", {
    speed: 400,
    spaceBetween: 30,
    pagination: {
      el: "#collection-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#collection-slider .swiper-button-next",
      prevEl: "#collection-slider .swiper-button-prev",
    },
    autoplay: false,
    effect: "slide",
    loop: false,
    breakpoints: {
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
    },
  });

  // --- Offcanvas focus trap (handled by Bootstrap) ---
  var offcanvasEl = document.getElementById("offcanvasNav");
  if (offcanvasEl) {
    offcanvasEl.addEventListener("show.bs.offcanvas", function () {
      document.body.classList.add("offcanvas-open");
    });
    offcanvasEl.addEventListener("hidden.bs.offcanvas", function () {
      document.body.classList.remove("offcanvas-open");
    });
  }

  // --- Auto-close offcanvas on resize to desktop ---
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth >= 992) {
        var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (offcanvas) {
          offcanvas.hide();
        }
      }
    }, 200);
  });

  // --- Footer copyright year ---
  var yearEl = document.getElementById("copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Newsletter form validation enhancement ---
  var newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      var input = this.querySelector('input[type="email"]');
      if (input && !input.checkValidity()) {
        e.preventDefault();
        input.reportValidity();
      }
    });
  }
});
