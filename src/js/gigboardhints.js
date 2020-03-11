// import needed function
import {gigboardHintsStore} from './store'
import {disclaimerInit} from './disclaimer'
import {populateAmps} from './amps'
import {populateCabs} from './cabs'
import {populateMics} from './mics'
import {populateFxs} from './fxs'
import {populatePresets} from './presets'

// Create a store to use
const store = gigboardHintsStore

// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  addEventListeners()
  disclaimerInit()

  update()
})


// Add needed event listeners
const addEventListeners = () => {
  // Nav menu items
  const navButtons = document.querySelectorAll('.nav__item')
  navButtons.forEach(navButton => {
    navButton.addEventListener('click', handleNavButtonClick)
  })

  // Page buttons on the home page
  const homePageButtons = document.querySelectorAll('.home__button')
  homePageButtons.forEach(homePageButton => {
    homePageButton.addEventListener('click', handleHomePageButtonClick)
  })

  // Nav Logo click
  document.querySelector('.nav__title').addEventListener('click', handleNavLogoClick)
}


// Handle click on a nav link
const handleNavButtonClick = event => {
  const newPage = event.target.getAttribute('pageName')
  if (newPage !== store.page) {
    setNewPage(newPage)
  }
}

// Handle click on a home page button
const handleHomePageButtonClick = event => {
  const newPage = event.currentTarget.getAttribute('pageName')
  setNewPage(newPage)
}

// Handle click on the nav logo
const handleNavLogoClick = () => {
  setNewPage('homePage')
}


// set a new page on the store object
const setNewPage = newPage => {
  store.page = newPage
  update()
}


// update active navigation items
const updateNav = () => {
  const oldSelectedNav = document.querySelector('.nav__item[active]')
  oldSelectedNav && oldSelectedNav.removeAttribute('active')

  if (store.page !== 'homePage') {
    document.querySelector(`.nav__item[pageName="${store.page}"]`).setAttribute('active', '')
  }
}


// update visible page
const updatePage = () => {
  const oldPage = document.querySelector('.section:not([hidden])')
  oldPage && oldPage.setAttribute('hidden', '')
  document.querySelector(`#${store.page}`).removeAttribute('hidden')
}


const populateGearList = pageType => {
  if (pageType === 'ampsPage') {
    populateAmps(store.ampsData)
  } else if (pageType === 'cabsPage') {
    populateCabs(store.cabsData)
  } else if (pageType === 'micsPage') {
    populateMics(store.micsData)
  } else if (pageType === 'fxsPage') {
    populateFxs(store.fxsData)
  } else if (pageType === 'presetsPage') {
    populatePresets(store.presetsData)
  }
}


// set of action to take when page needs to be uploaded
const update = () => {
  updateNav()
  updatePage()

  if (store.page !== 'home') {
    populateGearList(store.page)
  }
}