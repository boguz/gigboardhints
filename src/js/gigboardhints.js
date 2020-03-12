// import needed functions
import {gigboardHintsStore} from './store'
import {disclaimerInit} from './disclaimer'
import {burger} from './burger'
import {populateAmps} from './amps'
import {populateCabs} from './cabs'
import {populateMics} from './mics'
import {populateFxs} from './fxs'
import {populatePresets} from './presets'

import {closeNav} from './burger'

// Create a store to use
const store = gigboardHintsStore

// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  addEventListeners()
  disclaimerInit()
  burger()

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

  // Select inputs
  const selectInputs = document.querySelectorAll('.filters__select')
  selectInputs.forEach(selectInput => {
    selectInput.addEventListener('change', handleSelectInputChange)
  })
}

// Handle change on select input
const handleSelectInputChange = event => {
  const contentType = event.target.getAttribute('contentType')
  const orderBy = event.target.value
  console.log('value', event.target.value)
  const orderedData = getOrderedData(contentType, orderBy)
  if (contentType === 'amps') {
    populateAmps(orderedData)
  } else if (contentType === 'cabs') {
    populateCabs(orderedData)
  } else if (contentType === 'mics') {
    populateMics(orderedData)
  } else if (contentType === 'fxs') {
    populateFxs(orderedData)
  } else if (contentType === 'presets') {
    populatePresets(orderedData)
  }
}

// Handle click on a nav link
const handleNavButtonClick = event => {
  const newPage = event.target.getAttribute('pageName')
  if (newPage !== store.page) {
    setNewPage(newPage)
  }
  closeNav()
}

// Handle click on a home page button
const handleHomePageButtonClick = event => {
  const newPage = event.currentTarget.getAttribute('pageName')
  setNewPage(newPage)
}

// Handle click on the nav logo
const handleNavLogoClick = () => {
  setNewPage('homePage')
  closeNav()
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

const getOrderedData = (contentType, orderBy) => {
  const dataName = `${contentType}Data`
  const originalData = [...store[dataName]]
  const orderedData = originalData.sort((a, b) => {
    // console.table('a', a, a[orderBy], 'b', b, b[orderBy], a[orderBy] < b[orderBy], a[orderBy] === '-', typeof a[orderBy])
    console.table({
      'orderBy': orderBy,
      'a': a,
      'a[orderBy]': a[orderBy],
      'b': b,
      'b[orderBy]': b[orderBy],
      'a[orderBy] < b[orderBy]': a[orderBy] < b[orderBy],
      'a[orderBy] === "-"': a[orderBy] === '-',
      'typeof a[orderBy]': typeof a[orderBy]
    })

    if (typeof a[orderBy] === 'object') {
      return -1
    }
    if (typeof b[orderBy] === 'object') {
      return 1
    }
    if (a[orderBy] === '-') {
      return 1
    }
    if (b[orderBy] === '-') {
      return -1
    }
    if (a[orderBy] < b[orderBy]) {
      return -1
    }
    if (a[orderBy] > b[orderBy]) {
      return 1
    }

    return 0
  })

  return orderedData
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

  if (store.page !== 'home' && store.page !== 'links') {
    populateGearList(store.page)
  }
}