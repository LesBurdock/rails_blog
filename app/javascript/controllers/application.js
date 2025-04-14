<<<<<<< HEAD

// Import Rails UJS to handle method: :delete, data-remote, etc.

//Stimulus setup (your original code)
=======
// Import Turbo for link handling and page transitions
import "@hotwired/turbo-rails"

// Import Rails UJS to handle method: :delete, data-remote, etc.
import Rails from "@rails/ujs"
Rails.start()

// Stimulus setup (your original code)
>>>>>>> 291e4f3 (fixed error on delete added turbo rails)
import { Application } from "@hotwired/stimulus"

const application = Application.start()
application.debug = false
window.Stimulus = application

export { application }

