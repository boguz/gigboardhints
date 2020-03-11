export const populateCabs = (cabsData) => {
  const cabsContainer = document.querySelector('.section--cabs .gearlist')
  cabsContainer.innerHTML = ''
  cabsData.forEach(cab => {
    const cabItem = document.createElement('div')
    cabItem.classList.add('gearlist__item')

    const cabTitle = document.createElement('p')
    cabTitle.classList.add('gearlist__title')
    cabTitle.innerHTML = cab.headrushName

    const cabBrand = document.createElement('p')
    cabBrand.classList.add('gearlist__brand')
    cabBrand.innerHTML = cab.brand

    const cabModel = document.createElement('p')
    cabModel.classList.add('gearlist__model')
    cabModel.innerHTML = cab.model

    const cabSpeaker = document.createElement('p')
    cabSpeaker.classList.add('gearlist__speaker')
    cabSpeaker.innerHTML = cab.speaker

    const cabConfirmed = document.createElement('span')
    cabConfirmed.classList.add('gearlist__confirmed')
    cab.confirmed && cabConfirmed.setAttribute('confirmed', '')

    cabItem.appendChild(cabTitle)
    cabItem.appendChild(cabBrand)
    cabItem.appendChild(cabModel)
    cabItem.appendChild(cabSpeaker)
    cabItem.appendChild(cabConfirmed)

    cabsContainer.appendChild(cabItem)
  })
}