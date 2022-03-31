import {handleAnswer} from './answer.js'
import {_} from './selector.js'

const backgroundColors = {
  '02': '#d79496',
  '03': '#e8ba80',
}

export const startGame = () => {
  _('#intro').style.display = 'none'
  _('#question').style.display = 'block'
}

export const renderQuestion = question => {
  const {styleVariant, options} = question

  _('.blur-layer').style.backgroundColor = backgroundColors[styleVariant]
  const test = _('#test')

  setEffectLayerImages(styleVariant)

  let optionsHtml = ''
  const questionHtml = `<p class="question-text">${question.question}</p>`

  options.forEach((option, idx) => {
    optionsHtml += `<div role="button" class="option" data-index="${idx}">${option.label}</div>`
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
