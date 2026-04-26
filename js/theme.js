// FINAL THEME TOGGLE – CLICK SAFE VERSION
(function () {
  const html = document.documentElement;

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent =
        theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
    }
  }

  // Apply initial theme (never null)
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  // ✅ FIX: use closest() so clicks on text/emoji also work
  document.addEventListener("click", function (event) {
    const toggleBtn = event.target.closest("#theme-toggle");
    if (!toggleBtn) return;

    const current = html.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  });
})();
