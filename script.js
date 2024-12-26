function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleNightMode() {
  const body = document.body;
  const toggleLink = document.getElementById("night-mode-toggle");

  body.classList.toggle("night-mode");

  if (body.classList.contains("night-mode")) {
    toggleLink.textContent = "Light Mode";
  } else {
    toggleLink.textContent = "Night Mode";
  }
}
