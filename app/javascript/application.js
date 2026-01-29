// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";


// Function to initialize dropdown and mobile menu functionality
function initializeNavbar() {
  const userMenuButton = document.getElementById('user-menu-button');
  const dropdownMenu = document.getElementById('user-dropdown'); 
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
document.addEventListener("turbo:load", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // ---- DEFAULT TAB ON LOAD ----
  const firstButton = tabButtons[0];
  if (firstButton) {
    const firstTabId = firstButton.dataset.tab;
    tabContents.forEach(c => c.classList.add("hidden")); // hide all first
    document.getElementById(firstTabId).classList.remove("hidden");
    firstButton.classList.add("tab-active");
    firstButton.classList.remove("text-grayishBlue50");
  }

  // ---- TAB CLICK HANDLERS ----
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.add("hidden"));

      // Reset all buttons
      tabButtons.forEach((btn) => {
        btn.classList.remove("tab-active", "text-textRed");
        btn.classList.add("text-grayishBlue50");
      });

      // Activate selected
      document.getElementById(target).classList.remove("hidden");
      button.classList.add("tab-active");
      button.classList.remove("text-grayishBlue50");
    });
  });
});

document.addEventListener("turbo:load", () => {
  const fileInput = document.querySelector('input[type="file"][name="user[avatar]"]');
  const fileNameDisplay = document.getElementById("avatar-file-name");

  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = fileInput.files[0].name;
      } else {
        fileNameDisplay.textContent = "No file chosen";
      }
    });
  }
});


document.addEventListener("turbo:load", () => {
  const fileInput = document.querySelector('input[type="file"][name="blog_post[photo]"]');
  const fileNameDisplay = document.getElementById("photo-file-name");

  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener("change", () => {
      fileNameDisplay.textContent = fileInput.files.length > 0 ? fileInput.files[0].name : "No file chosen";
    });
  }
});


// Initialize on turbo:load (full page load or Turbo Frame replace)
document.addEventListener('turbo:load', initializeNavbar);

// Initialize on turbo:frame-render (when content is dynamically replaced via Turbo Frames)
document.addEventListener('turbo:frame-render', initializeNavbar);
