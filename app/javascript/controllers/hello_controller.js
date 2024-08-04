import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "profileButton" ]

  connect() {
  }

  toggle() {
    console.log("hi")
    if (this.profileButtonTarget.classList.contains('hidden')) {
      this.profileButtonTarget.classList.remove('hidden')
    } else {
      this.profileButtonTarget.classList.add('hidden')
    }
  }

  closePopUp(event) {
    event.preventDefault()
    this.profileButtonTarget.classList.add('hidden')
  }
}
