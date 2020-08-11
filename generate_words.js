function trash(sentence) {
  const randomIndex = Math.floor(Math.random() * sentence.length)
  return sentence[randomIndex]
}


function generateWords(option) {
  const target = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
  }
  const phrase = ['很簡單阿!', '很容易阿!', '很快阿!', '很正常阿!']

  let result = ''
  if (option === 'engineer') {
    result += `身為一個${target.engineer}，${trash(task.engineer)}，${trash(phrase)}`
  }
  if (option === 'designer') {
    result += `身為一個${target.designer}，${trash(task.designer)}，${trash(phrase)}`
  }
  if (option === 'entrepreneur') {
    result += `身為一個${target.entrepreneur}，${trash(task.entrepreneur)}，${trash(phrase)}`
  }

  if (result.length === 0) {
    result += `Please select at least one option.`
  }
  return result

}

module.exports = generateWords


