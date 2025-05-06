// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll effect for nav links
    const navLinks = document.querySelectorAll(".nav-links a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  
    // Fade in sections when they appear on screen
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1
    });
  
    document.querySelectorAll(".section").forEach(section => {
      section.classList.add("fade-in");
      observer.observe(section);
    });
  });


  const images = document.querySelectorAll('.gallery-img');
const fullscreen = document.getElementById('fullscreen-view');
const fullscreenImg = document.getElementById('fullscreen-img');
const closeBtn = document.getElementById('close-btn');

images.forEach(img => {
  img.addEventListener('click', () => {
    fullscreenImg.src = img.src;
    fullscreen.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  fullscreen.style.display = 'none';
});

