const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

const attrsToString = (obj = {}) => {
const keys = Object.keys(obj)
const attrs = []

  for(let i = 0; i < keys.length; i++) {
    let attr = keys[i]
    attrs.push(`${attr}="${obj[attr]}"`)
  }

  const string = attrs.join(' ')
  return string
}

const tagAttrs = (obj) => (content = '') => `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`
  
const tag = t => {
  if(typeof t === 'string') {
    return tagAttrs({tag: t})
  }
    return tagAttrs(t)
}
const tableRowTag = tag('tr')
const tableCell = tag('td')

const tableRow = items => compose(tableRowTag, tableCells)(items)
const tableCells = items => items.map(tableCell).join('')

// <button class="btn btn-outline-danger" onclick="removeItem(index)">
//  <i class="fas fa-trash-alt"></i>
//</button>
const trashIcon = tag({tag: 'i', attrs: {class: 'fas fa-trash-alt'}})('')

let description = document.getElementById('description')
let calories = document.getElementById('calories')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')

let list = []

const validateInputs = () => {

  description.value ? '' : description.classList.add('is-invalid')
  calories.value ? '' : calories.classList.add('is-invalid')
  carbs.value ? '' : carbs.classList.add('is-invalid')
  protein.value ? '' : protein.classList.add('is-invalid')

  if(description.value && calories.value && carbs.value && protein.value) {
    add()
  } 
  cleanInputs()
  updateTotals()
  renderItems() 
}

const add = () => {
  const newItem = {
    //en el caso de que no quieres usar parsInt(), lo puedes remplazar por +
    // ejemplo: calories: parsInt(calories.value) a +calories.value,
    description: description.value,
    calories: +calories.value,
    carbs: +carbs.value,
    protein: +protein.value
  }

  let list = (localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []
    list = [...list, newItem]
    localStorage.setItem('list', JSON.stringify(list))
}

const updateTotals = () => {
  let calories = 0, carbs = 0, protein = 0
  let list = (localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []

  list.forEach(item => {
    calories += item.calories,
    carbs += item.carbs,
    protein += item.protein
  })

  document.getElementById('totalCalories').innerHTML = calories
  document.getElementById('totalCarbs').innerHTML = carbs
  document.getElementById('totalProteins').innerHTML = protein
}

const cleanInputs = () => {
  description.value = ''
  calories.value = ''
  carbs.value = ''
  protein.value = ''
}

const renderItems = () => {
  let list = (localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []
  const tbody = document.querySelector('tbody')

  tbody.innerHTML = ''
  
  list.forEach((item, index )=> {

    const row = document.createElement('tr')

    const removeButton = tag({
      tag: 'button',
      attrs: {
        class: 'btn btn-outline-danger',
        onclick: `removeItem(${index})`
      }
    })(trashIcon)
    row.innerHTML = tableRow([
      item.description,
      item.calories,
      item.carbs,
      item.protein,
      removeButton
    ])
    tbody.appendChild(row)

  })
}

const removeItem = (index) => {
  let list = (localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []

  list.splice(index, 1)
  localStorage.setItem('list', JSON.stringify(list))
  
  updateTotals()
  renderItems()
}

document.addEventListener("DOMContentLoaded", renderItems);
