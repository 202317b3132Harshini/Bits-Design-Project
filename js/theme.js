document.addEventListener("DOMContentLoaded", function () {

  const button = document.getElementById("theme-toggle");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  updateButton(savedTheme);

  button.addEventListener("click", function () {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateButton(newTheme);
  });

  function updateButton(theme) {
    button.textContent =
      theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode";
  }
});
