import Typewriter from "typewriter-effect/dist/core";

/**
 * Reusable function to apply typewriter effect
 * @param {string} selector - The DOM selector (e.g., "#typewriter-text")
 * @param {string[]} strings - Array of strings to type
 * @param {object} options - Extra config like delay, loop, etc.
 */
export function runTypewriter(selector, strings, options = {}) {
  const el = document.querySelector(selector);
  if (!el) return;

  const typewriter = new Typewriter(el, {
    delay: 50,
    loop: false,
    ...options,
  });

  strings.forEach((str) => {
    typewriter.typeString(str).pauseFor(500);
  });

  typewriter.start();
}
