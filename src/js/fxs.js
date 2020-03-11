export const populateFxs = (fxsData) => {
  const fxsContainer = document.querySelector('.section--fxs .gearlist')
  fxsContainer.innerHTML = ''
  fxsData.forEach(fx => {
    const fxItem = document.createElement('div')
    fxItem.classList.add('gearlist__item')

    const fxTitle = document.createElement('p')
    fxTitle.classList.add('gearlist__title')
    fxTitle.innerHTML = fx.headrushName

    const fxBrand = document.createElement('p')
    fxBrand.classList.add('gearlist__brand')
    fxBrand.innerHTML = fx.brand

    const fxModel = document.createElement('p')
    fxModel.classList.add('gearlist__model')
    fxModel.innerHTML = fx.model

    const fxsType = document.createElement('p')
    fxsType.classList.add('gearlist__type')
    fxsType.innerHTML = fx.type

    const fxConfirmed = document.createElement('span')
    fxConfirmed.classList.add('gearlist__confirmed')
    fx.confirmed && fxConfirmed.setAttribute('confirmed', '')

    fxItem.appendChild(fxTitle)
    fxItem.appendChild(fxBrand)
    fxItem.appendChild(fxModel)
    fxItem.appendChild(fxsType)
    fxItem.appendChild(fxConfirmed)

    fxsContainer.appendChild(fxItem)
  })
}