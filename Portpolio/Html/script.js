document.addEventListener("DOMContentLoaded", () => {
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
});