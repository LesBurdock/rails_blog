// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"  
import "trix"
import "@rails/actiontext"


document.addEventListener('turbo:load', () => {
    const userMenuButton = document.getElementById('user-menu-button');
    const dropdownMenu = document.getElementById('dropdownbutton');

  
    userMenuButton.addEventListener('click', () => {
      const isExpanded = userMenuButton.getAttribute('aria-expanded') === 'true' || false;
      userMenuButton.setAttribute('aria-expanded', !isExpanded);
      dropdownMenu.classList.toggle('hidden');
    });
  
    // Close the dropdown when clicking outside
    window.addEventListener('click', (event) => {
      if (!userMenuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        userMenuButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.add('hidden');
      }
    });
  });

  document.addEventListener('turbo:load', function() {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
  
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", function() {
        // Toggle the mobile menu
        mobileMenu.classList.toggle("hidden");
        
        // Optionally, change the button's aria-expanded attribute
        const isExpanded = mobileMenu.classList.contains("hidden") ? "false" : "true";
        mobileMenuButton.setAttribute("aria-expanded", isExpanded);
      });
    }
  });