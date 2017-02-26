const phrasesToType = [
  'I currently live in the Bay Area.',
  'I am a software developer.',
  'Previously, I was a marketer and entrepreneur.',
  'I enjoy showing information in useful ways.'
]
const domNode = document.querySelector('.type-phrase')
const pauseDelay = 500

let phrasesIndex = 0
let currentValue = ''
let deletingPhrase = false

const update = () => {
  // debugger
  let phraseType = phrasesToType[phrasesIndex]
  if(!deletingPhrase && currentValue.length === phraseType.length){
    // debugger
    deletingPhrase = true
    setTimeout(update, pauseDelay)
    return
  }
  if(deletingPhrase && currentValue === ""){
    // debugger
    deletingPhrase = false
    phrasesIndex++
    if(phrasesIndex >= phraseType.length){
      // debugger
      phrasesIndex = 0
    }
    setTimeout(update, pauseDelay)
    return
  }
  if(deletingPhrase){
    // debugger
    currentValue = currentValue.slice(0,-1)
    setTimeout(update, 300 )
  }
  else{
    // debugger
    currentValue = phraseType.slice(0,currentValue.lenth+1)
    setTimeout(update, 200 )
  }
  domNode.innerText = currentValue
}

// const randomTypeDelay = () => {
//   let min = 25, max = 125
//   return Math.random() * (max - min ) + min
// }
//
// const randomDeleteDelay = () => {
//   let min = 25, max = 450
//   return Math.random() * (max - min) + min
// }

update()
