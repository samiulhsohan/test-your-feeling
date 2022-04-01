import {_} from './selector.js'
import {handleAnswer} from './answer.js'
import {
  setEffectLayerImages,
  showEffectLayerImages,
  showQuestion,
  enableOptions,
} from './utils.js'

export const renderQuestion = question => {
  const {styleVariant, options, type, color} = question

  const test = _('#test')

  // new question transition
  setTimeout(() => {
    setEffectLayerImages(styleVariant)
    setTimeout(() => {
      showEffectLayerImages()
      showQuestion()
      enableOptions()
    }, 50)
  }, 1000)

  let optionsHtml = ''
  const questionHtml = `
  ${
    type === 'color'
      ? `<div style="background-color: ${color}" class="color-question"></div>`
      : ''
  }
  <p class="question-text">${question.question}</p>
  `

  options.forEach((option, idx) => {
    optionsHtml += `<button disabled class="option" data-index="${idx}">${option.label}</button>`
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
