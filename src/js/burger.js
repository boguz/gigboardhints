/**
 * Show and hide menu on smaller devices
 */
export const burger = () => {
  let burgerState = false

  document.querySelector('.burger__button').addEventListener('click', () => {
    burgerState = !burgerState
    burgerState ? openNav() : closeNav()
  })

  document.querySelector('.nav__scrim').addEventListener('click', () => {
    burgerState = false
    closeNav()
  })

  let mql = window.matchMedia('(max-width: 921px)')
  mql.addEventListener( 'change', (event) => {
    if (!event.matches && burgerState) {
      burgerState = false
      closeNav()
    }
  })

}

/**
 * Open nav add update all related element
 */
const openNav = () => {
  document.querySelector('.burger__button').classList.add('burger__button--active')
  document.querySelector('.nav').classList.add('nav--active')
  document.querySelector('.nav__scrim').classList.add('nav__scrim--active')
}

/**
 * Close nav and update all related elements
 */
export const closeNav = () => {
  document.querySelector('.burger__button').classList.remove('burger__button--active')
  document.querySelector('.nav').classList.remove('nav--active')
  document.querySelector('.nav__scrim').classList.remove('nav__scrim--active')
}