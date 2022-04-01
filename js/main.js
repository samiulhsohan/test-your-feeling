import {renderQuestion} from './question.js'
import {_} from './selector.js'
import {
  showEffectLayerImages,
  hideEffectLayerImages,
  hideQuestion,
  enableOptions,
  disableOptions,
} from './utils.js'

window.age = 0
window.feeling = {}

_('#start').addEventListener('click', () => {
  disableOptions()

  const startButton = _('#start')
  const startTitle = _('.start-title')
  const ageTitle = _('.age-title')
  const ageForm = _('#age-form')

  startButton.style.opacity = '0'
  startTitle.style.opacity = '0'
  setTimeout(() => {
    startButton.style.display = 'none'
    startTitle.style.display = 'none'
    ageTitle.style.display = 'block'
    ageForm.style.display = 'block'

    setTimeout(() => {
      ageTitle.style.opacity = '1'
      ageForm.style.opacity = '1'
      _('#age').focus()
    }, 500)
  }, 500)
})

_('#age-form').addEventListener('submit', e => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const age = formData.get('age')
  if (!age) return

  hideEffectLayerImages()
  hideQuestion()

  window.age = age
  setTimeout(() => {
    renderQuestion(window.questions[0])
  }, 1000)
})

showEffectLayerImages()
enableOptions()
;(() => {
  fetch('questions.json')
    .then(res => res.json())
    .then(data => {
      window.questions = data
    })
})()
