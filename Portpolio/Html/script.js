AOS.init({
  once: false,
  mirror: true,
  duration: 1500,
  offset: 150,
  easing: 'ease-in-out'
});

// Reset animation when elements scroll out of view
window.addEventListener("scroll", () => {
  document.querySelectorAll("[data-aos]").forEach(el => {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.remove("aos-animate");
    }
  });
});

setTimeout(() => AOS.refreshHard(), 400);

  // 🔹 Typewriter Effect
  const texts = ["Good", "Fast Learner", "Sometimes Bad", "Short Term"];
  const colors = ["#b74b4b", "#ff8c00", "#00bfff", "#32cd32"];
  let count = 0;
  let index = 0;

  (function type() {
    if (count === texts.length) count = 0;
    const currentText = texts[count];
    const letter = currentText.slice(0, ++index);
    const typeEl = document.querySelector(".typewriter-text");

    if (typeEl) {
      typeEl.textContent = letter;
      typeEl.style.color = colors[count];
    }

    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1500);
    } else {
      setTimeout(type, 100);
    }
  })();

  // 🔹 Dropdown Menu
  const hamburg = document.querySelector(".hamburg");
  const cancel = document.querySelector(".cancel");
  const dropdown = document.querySelector(".dropdown");

  function showDropdown() {
    dropdown.classList.add("active");
    hamburg.style.opacity = "0";
    cancel.style.opacity = "1";
    hamburg.style.pointerEvents = "none";
    cancel.style.pointerEvents = "auto";
  }

  function hideDropdown() {
    dropdown.classList.remove("active");
    hamburg.style.opacity = "1";
    cancel.style.opacity = "0";
    hamburg.style.pointerEvents = "auto";
    cancel.style.pointerEvents = "none";
  }

  hamburg.addEventListener("click", showDropdown);
  cancel.addEventListener("click", hideDropdown);
  document.querySelectorAll(".dropdown a").forEach(link =>
    link.addEventListener("click", hideDropdown)
  );

  // 🔹 Reset styles on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      dropdown.classList.remove("active");
      hamburg.style.opacity = "0";
      cancel.style.opacity = "0";
      hamburg.style.pointerEvents = "none";
      cancel.style.pointerEvents = "none";
    } else {
      hideDropdown();
    }
  });

  // 🔹 Highlight Active Nav Link on Scroll
  const sections = document.querySelectorAll("section[id]");
  const allLinks = document.querySelectorAll(".links a, .dropdown a");
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    let current = "";
    const navHeight = nav.offsetHeight;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 50;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    allLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });


const reveals = document.querySelectorAll('.title');
    const spans = document.querySelectorAll('.title span');

    function titleOnScroll() {
        reveals.forEach((el, i) => {
            const top = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top < windowHeight - 100) {
                el.classList.add('active');
                spans[i].classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', titleOnScroll);
    titleOnScroll();
    window.addEventListener('load', titleOnScroll);

// Skill Bar Animation on Scroll
const skillBars = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const bar = entry.target;

      // Get final width
      const finalWidth = bar.getAttribute('data-width');

      // Reset width first
      bar.style.width = "0%";
      bar.style.transition = "none";

      // Animate to final width
      setTimeout(() => {
        bar.style.transition = "width 2s ease";
        bar.style.width = finalWidth;
      }, 150);

      // Run animation only once
      observer.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => observer.observe(bar));