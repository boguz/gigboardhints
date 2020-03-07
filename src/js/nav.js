/**
 * Add Event Listeners to the menu items
 */
export const addNavEventListeners = () => {
  const navItems = document.querySelectorAll('.nav__item')
  navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      handleMenuClick(event)
    })
  });
}

/**
 * Toggle active menu item on click
 */
const handleMenuClick = event => {
  const clickedItem = event.target
  const currentActive = document.querySelector('.nav__item[active]')
  if (clickedItem.hasAttribute != currentActive) {
    currentActive && currentActive.removeAttribute('active');
    clickedItem.setAttribute('active', '')
  }
}