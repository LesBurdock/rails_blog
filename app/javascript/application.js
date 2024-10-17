// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('DOMContentLoaded', () => {
    const userMenuButton = document.getElementById('user-menu-button');
    const dropdownMenu = document.getElementById('dropdownbutton');
    console.log(dropdownMenu);
  
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
  