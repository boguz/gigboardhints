export const populatePresets = (presetsData) => {
  const presetsContainer = document.querySelector('.section--presets .gearlist')
  presetsContainer.innerHTML = ''
  presetsData.forEach(preset => {
    const presetItem = document.createElement('div')
    presetItem.classList.add('gearlist__item')

    const presetTitle = document.createElement('p')
    presetTitle.classList.add('gearlist__title')
    presetTitle.innerHTML = preset.preset

    const presetBand = document.createElement('p')
    presetBand.classList.add('gearlist__band')
    presetBand.innerHTML = preset.band

    const presetSong = document.createElement('p')
    presetSong.classList.add('gearlist__song')
    presetSong.innerHTML = preset.song

    const presetConfirmed = document.createElement('span')
    presetConfirmed.classList.add('gearlist__confirmed')
    preset.confirmed && presetConfirmed.setAttribute('confirmed', '')

    presetItem.appendChild(presetTitle)
    presetItem.appendChild(presetBand)
    presetItem.appendChild(presetSong)
    presetItem.appendChild(presetConfirmed)

    presetsContainer.appendChild(presetItem)
  })
}