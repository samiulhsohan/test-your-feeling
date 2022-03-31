import {_} from './selector.js'
import {startGame, renderQuestion} from './utils.js'

window.feeling = {}

_('#start').addEventListener('click', () => {
  startGame()
  renderQuestion(window.questions[0])
})
;(() => {
  fetch('/questions.json')
    .then(res => res.json())
    .then(data => (window.questions = data))
})()
