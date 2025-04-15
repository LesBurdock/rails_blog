// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import "trix";
import "@rails/actiontext";

// Function to initialize dropdown and mobile menu functionality
function initializeNavbar() {
  const userMenuButton = document.getElementById('user-menu-button');
  const dropdownMenu = document.getElementById('dropdownbutton');
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  // User menu dropdown
  if (userMenuButton && dropdownMenu) {
    userMenuButton.addEventListener('click', () => {
      const isExpanded = userMenuButton.getAttribute('aria-expanded') === 'true';
      userMenuButton.setAttribute('aria-expanded', !isExpanded);
      dropdownMenu.classList.toggle('hidden', isExpanded); // Toggle visibility
    });

    // Close the dropdown when clicking outside
    window.addEventListener('click', (event) => {
      if (!userMenuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        userMenuButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.add('hidden');
      }
    });
  }

  // Mobile menu toggle
  if (mobileMenuButton && mobileMenu) {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.addEventListener("click", function() {
      // Toggle the mobile menu
      mobileMenu.classList.toggle("hidden");

      // Optionally, change the button's aria-expanded attribute
      const isExpanded = mobileMenu.classList.contains("hidden") ? "false" : "true";
      mobileMenuButton.setAttribute("aria-expanded", isExpanded);
    });
  }
}

// Initialize on turbo:load (full page load or Turbo Frame replace)
document.addEventListener('turbo:load', initializeNavbar);

// Initialize on turbo:frame-render (when content is dynamically replaced via Turbo Frames)
document.addEventListener('turbo:frame-render', initializeNavbar);
