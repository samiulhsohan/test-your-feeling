import {handleAnswer} from './answer.js'
import {_} from './selector.js'

export const startGame = () => {
  _('#intro').style.display = 'none'
  _('#question').style.display = 'block'
}

export const renderQuestion = question => {
  const {styles, options} = question

  _('.blur-layer').style.backgroundColor = styles.backgroundColor
  const test = _('#test')
  test.innerHTML = ''

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
