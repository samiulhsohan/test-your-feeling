import {_} from './selector.js'
import {
  startGame,
  renderQuestion,
  showEffectLayerImages,
  hideEffectLayerImages,
  hideQuestion,
} from './utils.js'

window.age = 0
window.feeling = {}

_('#start').addEventListener('click', () => {
  startGame()
  showEffectLayerImages()
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
;(() => {
  fetch('questions.json')
    .then(res => res.json())
    .then(data => (window.questions = data))
})()
