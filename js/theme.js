// GLOBAL THEME TOGGLE (100% RELIABLE)

window.toggleTheme = function () {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.textContent =
      next === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
  }
};

// Apply saved theme on load
(function () {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);

  const btn = document.getElementById("theme-toggle");
  if (btn) {
    btn.textContent =
      saved === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
  }
})();
``
