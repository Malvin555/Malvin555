import AOS from "aos";
import { runTypewriter } from "./typewriter";

let reposLoaded = false;
let repos = [];

function initScripts() {
  // ======================
  //  AOS Animation
  // ======================
  AOS.init({
    duration: 800,
    once: false,
    mirror: true,
  });

  // ======================
  //  Nav Active Section
  // ======================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSections = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visibleSections.length > 0) {
        const id = visibleSections[0].target.id;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "text-primary",
            link.getAttribute("href") === `#${id}`,
          );
          link.classList.toggle(
            "text-secondary",
            link.getAttribute("href") !== `#${id}`,
          );
        });
      }
    },
    { rootMargin: "0px 0px -30% 0px", threshold: [0.3, 0.6, 1] },
  );
  sections.forEach((section) => observer.observe(section));

  // ======================
  //  Mobile Menu
  // ======================
  const menu = document.getElementById("mobile-menu");
  const btn = document.getElementById("mobile-menu-btn");
  window.toggleMobileMenu = () => {
    if (!menu || !btn) return;
    menu.classList.toggle("hidden");
    btn.innerHTML = menu.classList.contains("hidden")
      ? `<span class="font-mono text-sm">menu</span>`
      : `<span class="font-mono text-sm">close</span>`;
  };

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ======================
  //  Hero Typewriter
  // ======================
  if (window.location.pathname === "/") {
    const target = document.getElementById("typewriter");
    if (target) {
      const texts = [
        "Full-Stack Developer",
        "Back-End Developer",
        "Front-End Developer",
      ];
      let textIndex = 0,
        charIndex = 0,
        isDeleting = false,
        isPaused = false;

      (function typeWriter() {
        const currentText = texts[textIndex];
        if (isPaused) {
          setTimeout(() => {
            isPaused = false;
            typeWriter();
          }, 2000);
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
        setTimeout(typeWriter, isDeleting ? 50 : 75);
      })();
    }
  }

  // ======================
  //  Section Title Typewriter
  // ======================
  const runOnVisible = (selector, cb) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) cb();
      });
    });
    obs.observe(el);
  };
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

  // ======================
  //  Back To Top Button
  // ======================
  const backToTop = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (!backToTop) return;
    const visible = window.scrollY > 300;
    backToTop.classList.toggle("opacity-0", !visible);
    backToTop.classList.toggle("pointer-events-none", !visible);
    backToTop.classList.toggle("opacity-100", visible);
  });

  // ======================
  //  Clipboard + Toast
  // ======================
  window.copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast("Copied to clipboard!"))
      .catch(() => showToast("Failed to copy"));
  };
  window.showToast = (msg) => {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.remove("opacity-0");
    toast.classList.add("opacity-100");
    setTimeout(() => {
      toast.classList.remove("opacity-100");
      toast.classList.add("opacity-0");
    }, 2000);
  };

  // ======================
  //  Tab Switching
  // ======================
  window.switchTab = (tab) => {
    const skillsTab = document.getElementById("skills-tab");
    const projectsTab = document.getElementById("projects-tab");
    const skillsContent = document.getElementById("skills-content");
    const projectsContent = document.getElementById("projects-content");

    if (!skillsTab || !projectsTab || !skillsContent || !projectsContent) {
      return;
    }

    if (tab === "skills") {
      skillsTab.classList.add("border-green-400", "text-primary");
      skillsTab.classList.remove("border-transparent", "text-secondary");
      projectsTab.classList.add("border-transparent", "text-secondary");
      projectsTab.classList.remove("border-green-400", "text-primary");

      skillsContent.classList.remove("hidden");
      projectsContent.classList.add("hidden");
    } else {
      projectsTab.classList.add("border-green-400", "text-primary");
      projectsTab.classList.remove("border-transparent", "text-secondary");
      skillsTab.classList.add("border-transparent", "text-secondary");
      skillsTab.classList.remove("border-green-400", "text-primary");

      projectsContent.classList.remove("hidden");
      skillsContent.classList.add("hidden");

      if (!reposLoaded) {
        loadGitHubRepos();
      }
    }
  };

  window.loadGitHubRepos = async () => {
    const dataElement = document.getElementById("projects-data");
    const errorElement = document.getElementById("projects-error");

    if (!dataElement || !errorElement) return;

    errorElement.classList.add("hidden");

    try {
      const response = await fetch("/api/github");

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const allRepos = await response.json();

      if (!Array.isArray(allRepos)) {
        throw new Error("Invalid response format");
      }

      repos = allRepos
        .filter((repo) => !repo.fork && !repo.archived)
        .sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
        )
        .slice(0, 6)
        .map((repo) => ({
          name: repo.name,
          description: repo.description || "No description available",
          language: repo.language || "Unknown",
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updated: new Date(repo.updated_at).toLocaleDateString(),
          url: repo.html_url,
          topics: repo.topics || [],
        }));

      renderRepos();

      reposLoaded = true;

      const countElements = document.querySelectorAll(
        "#project-count, #project-count-display",
      );
      countElements.forEach((el) => {
        if (el) el.textContent = repos.length.toString();
      });

      dataElement.classList.remove("hidden");
    } catch (error) {
      console.error("Failed to load GitHub repos:", error);

      errorElement.classList.remove("hidden");

      const countElements = document.querySelectorAll(
        "#project-count, #project-count-display",
      );
      countElements.forEach((el) => {
        if (el) el.textContent = "error";
      });
    }
  };

  function getLanguageColor(language) {
    const colors = {
      JavaScript: "text-yellow-400",
      TypeScript: "text-blue-400",
      Python: "text-primary",
      PHP: "text-purple-400",
      Shell: "text-secondary",
      HTML: "text-orange-400",
      CSS: "text-blue-300",
      Unknown: "text-gray-500",
    };
    return colors[language] || "text-gray-500";
  }

  function renderRepos() {
    const mobileContainer = document.getElementById("mobile-repos");
    const desktopContainer = document.getElementById("desktop-repos");

    if (!mobileContainer || !desktopContainer) return;

    mobileContainer.innerHTML = repos
      .map(
        (repo) => `
    <div class="border border-gray-800 bg-[#111111] p-4 active:scale-[0.98] active:bg-[#1a1a1a]">
      <div class="mb-2 flex items-center justify-between">
        <h3 class="truncate pr-2 text-lg font-bold text-green-300">${repo.name}</h3>
        <div class="flex items-center gap-2 text-xs">
          <div class="h-2 w-2 rounded-full bg-current ${getLanguageColor(repo.language)}"></div>
          <span class="text-secondary">${repo.language}</span>
        </div>
      </div>
      <p class="mb-3 text-sm leading-relaxed text-gray-300">${repo.description}</p>
      ${
        repo.topics.length > 0
          ? `
        <div class="mb-4">
          <div class="flex flex-wrap gap-1">
            ${repo.topics
              .slice(0, 3)
              .map(
                (topic) => `
              <span class="rounded-sm border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-green-200">${topic}</span>
            `,
              )
              .join("")}
          </div>
        </div>
      `
          : ""
      }
      <a href="${repo.url}" target="_blank" class="flex w-full items-center justify-center gap-2 border border-muted-dark px-6 py-3 text-primary hover:text-black font-medium  transition-colors hover:bg-muted-dark">
        View Code →
      </a>
    </div>
  `,
      )
      .join("");

    desktopContainer.innerHTML = repos
      .map(
        (repo) => `
    <div class="group border border-gray-800 bg-min p-4 transition-all duration-300 hover:border-muted-dark hover:bg-gradient-to-br hover:from-[#0f0f0f] hover:to-[#1a1a1a] hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
      <div class="mb-3 flex items-center justify-between">
        <div class="flex items-center gap-2 text-xs">
          <span class="text-gray-500">rwxr-xr-x</span>
          <span class="text-primary">1</span>
          <span class="text-secondary">malvin</span>
        </div>
        <span class="text-xs text-gray-500">${repo.updated}</span>
      </div>
      <div class="mb-3">
        <h3 class="flex items-center gap-2 font-bold text-green-300">
          <span class="text-green-600">📁</span>
          <span class="truncate transition-colors hover:text-white">${repo.name}</span>
        </h3>
      </div>
      <div class="mb-4">
        <p class="mb-1 text-xs text-gray-500">$ cat README.md</p>
        <p class="text-sm leading-relaxed text-gray-300">${repo.description}</p>
      </div>
      ${
        repo.topics.length > 0
          ? `
        <div class="mb-4">
          <p class="mb-2 text-xs text-gray-500">$ grep -r "dependencies"</p>
          <div class="flex flex-wrap gap-1">
            ${repo.topics
              .slice(0, 4)
              .map(
                (topic) => `
              <span class="border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-green-200">${topic}</span>
            `,
              )
              .join("")}
          </div>
        </div>
      `
          : ""
      }
      <div class="mb-4 flex items-center gap-4 text-xs">
        <div class="flex items-center gap-1">
          <span class="h-2 w-2 rounded-full ${getLanguageColor(repo.language).replace("text-", "bg-")}"></span>
          <span class="text-secondary">${repo.language}</span>
        </div>
        ${
          repo.stars > 0
            ? `
          <div class="flex items-center gap-1">
            <span class="text-yellow-400">⭐</span>
            <span class="text-secondary">${repo.stars}</span>
          </div>
        `
            : ""
        }
        ${
          repo.forks > 0
            ? `
          <div class="flex items-center gap-1">
            <span class="text-blue-400">🔀</span>
            <span class="text-secondary">${repo.forks}</span>
          </div>
        `
            : ""
        }
      </div>
      <a href="${repo.url}" target="_blank" class="w-full text-primary  font-medium inline-block border border-muted-dark px-6 py-3 text-center transition hover:bg-muted-dark hover:text-black">
        <span>📂</span> open
      </a>
    </div>
  `,
      )
      .join("");
  }
}

// Run on first load & Astro navigation
document.addEventListener("DOMContentLoaded", () => {
  initScripts();
  loadGitHubRepos();
});
document.addEventListener("astro:page-load", () => {
  reposLoaded = false; // Reset so it reloads
  initScripts();
});
