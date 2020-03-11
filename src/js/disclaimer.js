/**
 * Function to handle to disclaimer behavior:
 *    - open when the 'disclaimer__open-button' is clicked
 *    - close when the 'disclaimer__close-button' is clicked
 */
export const disclaimerInit = () => {
  const disclaimerContainer = document.querySelector('.disclaimer__container')
  const disclaimerOpenButton = document.querySelector('.disclaimer__open-button')
  const disclaimerCloseButton = document.querySelector('.disclaimer__close-button')

  disclaimerOpenButton && disclaimerOpenButton.addEventListener('click', () => {
    disclaimerContainer.setAttribute('visible', '')
  })

  disclaimerCloseButton && disclaimerCloseButton.addEventListener('click', () => {
    disclaimerContainer.removeAttribute('visible')
  })
}