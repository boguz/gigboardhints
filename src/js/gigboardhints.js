import { addNavEventListeners } from './nav.js'
import { disclaimerInit } from './disclaimer.js'

document.addEventListener('DOMContentLoaded', () => {
  addNavEventListeners()
  disclaimerInit()
})