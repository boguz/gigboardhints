export const populateAmps = (ampsData) => {
  const ampsContainer = document.querySelector('.section--amps .gearlist')
  ampsContainer.innerHTML = ''
  ampsData.forEach(amp => {
    const ampItem = document.createElement('div')
    ampItem.classList.add('gearlist__item')

    const ampTitle = document.createElement('p')
    ampTitle.classList.add('gearlist__title')
    ampTitle.innerHTML = amp.headrushName

    const ampBrand = document.createElement('p')
    ampBrand.classList.add('gearlist__brand')
    ampBrand.innerHTML = amp.brand

    const ampModel = document.createElement('p')
    ampModel.classList.add('gearlist__model')
    ampModel.innerHTML = amp.model

    const ampGenres = document.createElement('p')
    ampGenres.classList.add('gearlist__genres')
    ampGenres.innerHTML = amp.genre.join(', ')

    const ampPower = document.createElement('p')
    ampPower.classList.add('gearlist__power')
    ampPower.innerHTML = amp.power

    const ampConfirmed = document.createElement('span')
    ampConfirmed.classList.add('gearlist__confirmed')
    amp.confirmed && ampConfirmed.setAttribute('confirmed', '')

    ampItem.appendChild(ampTitle)
    ampItem.appendChild(ampBrand)
    ampItem.appendChild(ampModel)
    ampItem.appendChild(ampGenres)
    ampItem.appendChild(ampPower)
    ampItem.appendChild(ampConfirmed)

    ampsContainer.appendChild(ampItem)
  })
}