import {renderQuestion} from './utils.js'

export const handleAnswer = (question, answer) => {
  const {feeling, nextQuestionId} = answer
  const nextQuestion = window.questions.filter(q => q.id === nextQuestionId)[0]
  Object.keys(feeling).forEach(key => {
    window.feeling[key] = window.feeling[key]
      ? window.feeling[key] + feeling[key]
      : feeling[key]
  })
  if (nextQuestion) {
    renderQuestion(nextQuestion)
  }
}
