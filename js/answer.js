import {renderQuestion} from './utils.js'

export const handleAnswer = (_question, answer) => {
  const {feeling, nextQuestionId} = answer

  Object.keys(feeling).forEach(key => {
    window.feeling[key] = window.feeling[key]
      ? window.feeling[key] + feeling[key]
      : feeling[key]
  })

  const nextQuestion = window.questions.filter(q => q.id === nextQuestionId)[0]
  if (nextQuestion) {
    renderQuestion(nextQuestion)
  }
}
