import {renderQuestion} from './question.js'
import {showResult} from './result.js'
import {hideEffectLayerImages, hideQuestion, disableOptions} from './utils.js'

export const handleAnswer = (_question, answer) => {
  disableOptions()

  const {feeling, nextQuestionId} = answer

  Object.keys(feeling).forEach(key => {
    window.feeling[key] = window.feeling[key]
      ? window.feeling[key] + feeling[key]
      : feeling[key]
  })

  hideEffectLayerImages()
  hideQuestion()

  if (!nextQuestionId) {
    setTimeout(() => {
      showResult()
    }, 1000)
    return
  }

  setTimeout(() => {
    const nextQuestion = window.questions.filter(
      q => q.id === nextQuestionId,
    )[0]
    renderQuestion(nextQuestion)
  }, 1000)
}
