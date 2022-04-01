import {_} from './selector.js'

const colors = {
  depressed: '#8F00FF',
  happy: '#E1007A',
  angry: '#EF0039',
  fearful: '#3300FF',
}

export const showResult = () => {
  const feeling = window.feeling
  const highestFeeling = Object.keys(feeling).reduce((a, b) => {
    return feeling[a] > feeling[b] ? a : b
  })
  _('#result-container').style.display = 'block'
  _('#result-container').style.backgroundColor = 'transparent'
  _('.result').style.backgroundImage = `url(img/feelings/${highestFeeling}.png)`
  _('.result .feeling').innerHTML = highestFeeling
  setTimeout(() => {
    _('#result-container').style.backgroundColor = colors[highestFeeling]
    _('.result').style.opacity = '1'
  }, 100)
  _('.top-cta').innerHTML = '<a href="index.html">Test again</a>'
}
