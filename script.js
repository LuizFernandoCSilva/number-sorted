const nav = document.getElementsByClassName('nav')[0]
const form = document.getElementsByClassName('show')[0]
const sectionResultN = document.getElementById('resultN')
const divResultN = document.getElementById('resultnumbers')  
const quantity = document.getElementById('quantity')
const min = document.getElementById('min')
const max = document.getElementById('max')
const sorted = document.getElementById('sorted')
const buttonSelect = document.getElementById('select')
const selectToogle = document.getElementsByClassName('select')[0]; // Pega o primeiro elemento da coleção
const buttonReload = document.getElementById('result');


var helpselect = false

buttonSelect.addEventListener('click', () => {
  selectToogle.classList.toggle('active') // Agora funciona, pois selectToogle é um único elemento
  helpselect = !helpselect
})

sorted.addEventListener('click', (event) => {
  event.preventDefault()
  console.log(helpselect)
  const minVal = parseInt(min.value)
  const maxVal = parseInt(max.value)
  const quantityVal = parseInt(quantity.value)
  if (minVal > maxVal) {
    alert('O valor mínimo não pode ser maior que o valor máximo')
  }
  nav.classList.add('hiden')
  form.classList.remove('hiden')
  const numbers = resultNumber(minVal,maxVal,quantityVal,helpselect)
  for (let i = 0; i < numbers.length; i++) {
    const newResult = document.createElement('p')
    newResult.textContent = numbers[i]
    divResultN.appendChild(newResult)
  }
  sectionResultN.insertBefore(divResultN, buttonReload);
  form.appendChild(sectionResultN)
  
  buttonReload.onclick = () => {
    newResult.remove()
    helpselect = false
    nav.classList.remove('hiden')
    form.classList.add('hiden')
  }
})

function resultNumber(minVal, maxVal, quantityVal, helpselect) {
  let numbers = [];
  
  if (helpselect) {
    while (numbers.length < quantityVal) {
      let newNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
      if (!numbers.includes(newNumber)) {
        numbers.push(newNumber);
      }
    }
  } else {
    while (numbers.length < quantityVal) {
      let newNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
      numbers.push(newNumber);
    }
  }
  
  return numbers;
}
