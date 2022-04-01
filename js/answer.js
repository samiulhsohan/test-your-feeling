import {renderQuestion} from './question.js'
import {hideEffectLayerImages, hideQuestion, disableOptions} from './utils.js'

export const handleAnswer = (_question, answer) => {
  disableOptions('default')

  const {feeling, nextQuestionId} = answer

  Object.keys(feeling).forEach(key => {
    window.feeling[key] = window.feeling[key]
      ? window.feeling[key] + feeling[key]
      : feeling[key]
  })

  hideEffectLayerImages()
  hideQuestion()

  if (!nextQuestionId) {
    alert('You are done!')
    return
  }

  setTimeout(() => {
    const nextQuestion = window.questions.filter(
      q => q.id === nextQuestionId,
    )[0]
    renderQuestion(nextQuestion)
  }, 1000)
}
