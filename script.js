function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function applySystemNightMode() {
  const body = document.body;
  const toggleLinks = document.querySelectorAll("#night-mode-toggle"); // Select ALL elements

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('night-mode');
      toggleLinks.forEach(link => link.textContent = "Light Mode"); // Update ALL links - link => link.textConte... is a condensed function
  } else {
      toggleLinks.forEach(link => link.textContent = "Night Mode"); 
  }
}

function toggleNightMode() {
  const body = document.body;
  const toggleLinks = document.querySelectorAll("#night-mode-toggle"); // Select ALL elements

  body.classList.toggle("night-mode");

  const newText = body.classList.contains("night-mode") ? "Light Mode" : "Night Mode";
  toggleLinks.forEach(link => link.textContent = newText); // Update ALL links
}

window.addEventListener('load', applySystemNightMode);