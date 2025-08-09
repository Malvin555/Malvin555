import AOS from "aos";
import { runTypewriter } from "./typewriter";

// Loading Screen
document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const typewriterText = document.getElementById("typewriter-text");
  const text = "loading";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typewriterText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();

  // Auto-hide after 1.5 seconds
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "opacity 0.3s ease-out";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  }, 1500);

  document.body.style.overflow = "hidden";
});

// Aos Module
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");

  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        const id = visibleSections[0].target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("text-primary");
          link.classList.add("text-secondary");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.remove("text-secondary");
            link.classList.add("text-primary");
          }
        });
      }
    },
    {
      root: null,
      rootMargin: "0px 0px -30% 0px", // Show early near bottom
      threshold: [0.3, 0.6, 1], // Multiple thresholds to improve accuracy
    },
  );

  sections.forEach((section) => observer.observe(section));
});

// Navbar Menu
window.addEventListener("DOMContentLoaded", () => {
  function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const btn = document.getElementById("mobile-menu-btn");

    if (menu && btn) {
      if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        btn.innerHTML = '<span class="font-mono text-sm">close</span>';
      } else {
        menu.classList.add("hidden");
        btn.innerHTML = '<span class="font-mono text-sm">menu</span>';
      }
    }
  }

  // Expose to window so HTML onclick works
  window.toggleMobileMenu = toggleMobileMenu;

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const href = anchor.getAttribute("href");
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
});

// TypeWriter Effect
window.addEventListener("DOMContentLoaded", () => {
  const allowedPaths = ["/"];
  const currentPath = window.location.pathname;

  if (!allowedPaths.includes(currentPath)) return;

  const target = document.getElementById("typewriter");
  if (!target) return;

  const texts = [
    "Full-Stack Developer",
    "Back-End Developer",
    "Front-End Developer",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function typeWriter() {
    const currentText = texts[textIndex];

    if (isPaused) {
      setTimeout(typeWriter, 2000);
      isPaused = false;
      return;
    }

    if (isDeleting) {
      target.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    } else {
      target.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isPaused = true;
        isDeleting = true;
      }
    }

    const typingSpeed = isDeleting ? 50 : 75;
    setTimeout(typeWriter, typingSpeed);
  }

  typeWriter();
});

document.addEventListener("DOMContentLoaded", () => {
  runOnVisible("#about-title", () =>
    runTypewriter("#about-title", ["cat /proc/self/status"]),
  );

  runOnVisible("#project-title", () =>
    runTypewriter("#project-title", ["contact --help"]),
  );

  runOnVisible("#skill-title", () =>
    runTypewriter("#skill-title", ["ls -la /home/malvin/"]),
  );

  runOnVisible("#preview-title", () =>
    runTypewriter("#preview-title", ["ls -la /home/malvin/projects/"]),
  );
});

// Helper: run only when visible
function runOnVisible(selector, callback) {
  const el = document.querySelector(selector);
  if (!el) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
        // observer.unobserve(entry.target); Run Only Once
      }
    });
  });

  observer.observe(el);
}

// Arrow Button
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("back-to-top");
  if (!backToTop) return;

  if (window.scrollY > 300) {
    backToTop.classList.remove("opacity-0", "pointer-events-none");
    backToTop.classList.add("opacity-100");
  } else {
    backToTop.classList.add("opacity-0", "pointer-events-none");
    backToTop.classList.remove("opacity-100");
  }
});
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast("Copied to clipboard!");
    })
    .catch(() => {
      showToast("Failed to copy");
    });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.remove("opacity-0");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    if (!toast) return;
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0");
  }, 2000);
}

// Make functions globally available
window.copyToClipboard = copyToClipboard;
window.showToast = showToast;
