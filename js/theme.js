// FINAL THEME TOGGLE – NULL SAFE VERSION
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

  // Always apply theme (never null)
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme || "dark");

  // Toggle on click
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "theme-toggle") {
      const current = html.getAttribute("data-theme") || "dark";
      setTheme(current === "dark" ? "light" : "dark");
    }
  });
})();
``
