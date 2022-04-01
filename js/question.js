import {_} from './selector.js'
import {handleAnswer} from './answer.js'
import {
  setEffectLayerImages,
  showEffectLayerImages,
  showQuestion,
  enableOptions,
} from './utils.js'

const backgroundColors = {
  '01': '#64bbd6',
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

export const renderQuestion = question => {
  const {styleVariant, options, type, color} = question

  _('.blur-layer').style.backgroundColor = backgroundColors[styleVariant]
  const test = _('#test')

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
