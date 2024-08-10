import { Controller } from "@hotwired/stimulus"
import { useClickOutside } from "stimulus-use";

export default class extends Controller {
  static targets = [ "profileButton" ]

  connect() {
    useClickOutside(this)
  }

  clickOutside() {
    this.profileButtonTarget.classList.add('hidden')
  }

  toggle() {
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
