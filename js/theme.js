// FINAL WORKING THEME TOGGLE (GITHUB + VERCEL SAFE)
(function () {
  const html = document.documentElement;

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent =
        theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
    }
  }

  // Apply saved theme (default = dark)
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  // Listen for button clicks (safe for large pages)
  document.addEventListener("click", function (event) {
    if (event.target && event.target.id === "theme-toggle") {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    }
  });
})();
