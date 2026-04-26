// THEME TOGGLE – FINAL STABLE VERSION
(function () {
  const html = document.documentElement;

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent = theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
    }
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  // Button click handler
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "theme-toggle") {
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    }
  });
})();
