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
    const hamburgerToggleLink = document.querySelector('.menu-links a[href="#night-mode"]'); // Select the hamburger menu link

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('night-mode');
        toggleLink.textContent = "Light Mode";
        if (hamburgerToggleLink) { // Check if the element exists before trying to modify it
            hamburgerToggleLink.textContent = "Light Mode";
        }
    } else {
        toggleLink.textContent = "Night Mode";
        if (hamburgerToggleLink) {
            hamburgerToggleLink.textContent = "Night Mode";
        }
    }
}

function toggleNightMode() {
    const body = document.body;
    const toggleLink = document.getElementById("night-mode-toggle");
    const hamburgerToggleLink = document.querySelector('.menu-links a[href="#night-mode"]'); // Select the hamburger menu link

    body.classList.toggle("night-mode");

    if (body.classList.contains("night-mode")) {
        toggleLink.textContent = "Light Mode";
        if (hamburgerToggleLink) {
            hamburgerToggleLink.textContent = "Light Mode";
        }
    } else {
        toggleLink.textContent = "Night Mode";
        if (hamburgerToggleLink) {
            hamburgerToggleLink.textContent = "Night Mode";
        }
    }
}

window.addEventListener('load', applySystemNightMode);
