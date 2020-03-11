export const populateMics = (micsData) => {
  const micsContainer = document.querySelector('.section--mics .gearlist')
  micsContainer.innerHTML = ''
  micsData.forEach(mic => {
    const micItem = document.createElement('div')
    micItem.classList.add('gearlist__item')

    const micTitle = document.createElement('p')
    micTitle.classList.add('gearlist__title')
    micTitle.innerHTML = mic.headrushName

    const micBrand = document.createElement('p')
    micBrand.classList.add('gearlist__brand')
    micBrand.innerHTML = mic.brand

    const micModel = document.createElement('p')
    micModel.classList.add('gearlist__model')
    micModel.innerHTML = mic.model

    const micType = document.createElement('p')
    micType.classList.add('gearlist__type')
    micType.innerHTML = mic.type

    const micConfirmed = document.createElement('span')
    micConfirmed.classList.add('gearlist__confirmed')
    mic.confirmed && micConfirmed.setAttribute('confirmed', '')

    micItem.appendChild(micTitle)
    micItem.appendChild(micBrand)
    micItem.appendChild(micModel)
    micItem.appendChild(micType)
    micItem.appendChild(micConfirmed)

    micsContainer.appendChild(micItem)
  })
}