(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    if (window.AOS) {
      AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 80 });
    }

    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initNavbar();
    initBurger();
    initRotatingRole();
    initCounters();
    initBackToTop();
    initScrollSpy();
  });

  function initNavbar() {
    var navbar = document.getElementById("navbar");
    function onScroll() {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initBurger() {
    var burger = document.getElementById("navBurger");
    var menu = document.getElementById("navMenu");
    if (!burger || !menu) return;

    burger.addEventListener("click", function () {
      burger.classList.toggle("open");
      menu.classList.toggle("open");
    });

    menu.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        burger.classList.remove("open");
        menu.classList.remove("open");
      });
    });
  }

  function initRotatingRole() {
    var target = document.getElementById("rotatingRole");
    if (!target) return;

    var roles = window.I18N ? window.I18N.getRoles() : ["Senior Web Developer"];
    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var timer = null;

    function tick() {
      var word = roles[roleIndex % roles.length];
      if (deleting) {
        charIndex--;
      } else {
        charIndex++;
      }
      target.textContent = word.slice(0, charIndex);

      var delay = deleting ? 45 : 90;
      if (!deleting && charIndex === word.length) {
        delay = 1800;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex++;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    }

    function restart() {
      clearTimeout(timer);
      roles = window.I18N ? window.I18N.getRoles() : roles;
      roleIndex = 0;
      charIndex = 0;
      deleting = false;
      tick();
    }

    document.addEventListener("languagechange", restart);
    tick();
  }

  function initCounters() {
    var counters = document.querySelectorAll(".stat-num");
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCount(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var duration = 1600;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initBackToTop() {
    var btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 600);
    }, { passive: true });
  }

  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
    var sections = links
      .map(function (link) {
        return document.querySelector(link.getAttribute("href"));
      })
      .filter(Boolean);
    if (!sections.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
