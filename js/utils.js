import {handleAnswer} from './answer.js'
import {_} from './selector.js'

const backgroundColors = {
  '02': '#d79496',
  '03': '#e8ba80',
  '04': '#bed5e5',
  '05': '#ebb671',
  '06': '#da8e98',
  '07': '#d79496',
  '08': '#555692',
  '09': '#fcba4d',
  10: '#73a4b5',
  11: '#d6646a',
  12: '#6f8eaf',
  13: '#33a9b1',
  14: '#dd7c72',
  15: '#ebb671',
  16: '#daa962',
  17: '#d6aa73',
}

export const startGame = () => {
  _('#intro').style.display = 'none'
  _('#question').style.display = 'block'
}

export const renderQuestion = question => {
  const {styleVariant, options} = question

  _('.blur-layer').style.backgroundColor = backgroundColors[styleVariant]
  const test = _('#test')

  setTimeout(() => {
    setEffectLayerImages(styleVariant)
    setTimeout(() => {
      showEffectLayerImages()
      showQuestion()
    }, 50)
  }, 1000)

  let optionsHtml = ''
  const questionHtml = `<p class="question-text">${question.question}</p>`

  options.forEach((option, idx) => {
    optionsHtml += `<button class="option" data-index="${idx}">${option.label}</button>`
  })

  test.innerHTML = `
  ${questionHtml}
  <div class="options">
    ${optionsHtml}
  </div>
  `

  options.forEach((option, idx) => {
    const optionEl = _(`.option[data-index="${idx}"]`)
    optionEl.addEventListener('click', () => {
      handleAnswer(question, option)
    })
  })
}

const setEffectLayerImages = styleVariant => {
  const effectLayer = _('#effect-layer')
  const images = `
    <img class="bounce-1" src="img/${styleVariant}/01.png" alt="" />
    <img class="bounce-2" src="img/${styleVariant}/02.png" alt="" />
    <img class="bounce-3" src="img/${styleVariant}/03.png" alt="" />
    <img class="bounce-4" src="img/${styleVariant}/04.png" alt="" />
  `
  effectLayer.innerHTML = images
}

export const hideEffectLayerImages = () => {
  Array.from(Array(4)).forEach((i, idx) => {
    _(`.bounce-${idx + 1}`).style.opacity = '0'
  })
}

export const showEffectLayerImages = () => {
  Array.from(Array(4)).forEach((i, idx) => {
    _(`.bounce-${idx + 1}`).style.opacity = '1'
  })
}

export const hideQuestion = () => {
  _('#test').style.opacity = '0'
}

export const showQuestion = () => {
  _('#test').style.opacity = '1'
}

export const disableOptions = () => {
  const optionElements = document.querySelectorAll('.option')
  optionElements.forEach(optionElement => {
    optionElement.style.cursor = 'default'
    optionElement.disabled = true
  })
}
