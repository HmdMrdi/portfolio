function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to check and apply night mode based on system preference
function applySystemNightMode() {
  const body = document.body;
  const toggleLink = document.getElementById("night-mode-toggle");
  // Check if the user prefers dark mode
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('night-mode');
    toggleLink.textContent = "Light Mode"; // Set the button text to "Light Mode" if dark mode is applied
  } else {
    toggleLink.textContent = "Night Mode"; // Set the button text to "Night Mode" if dark mode is not applied
  }
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

//window.addEventListener('load', applySystemNightMode);
