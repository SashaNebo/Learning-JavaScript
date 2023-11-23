import { elementDOM_var, expense_var } from './variables.js'

const { put, overlay } = elementDOM_var
const { noteForm, allNoteInput, removeButton } = expense_var

export let dataNote = []

const mark = {
  id: 0,
  category: '',
  value: 0,
  date: '',
}

function handleNoteForm(e) {
  e.preventDefault()
  dataNote.push({ ...mark })
  allNoteInput.forEach(input => (input.value = ''))
  addMark(mark)
  openNote()
}

function handleNoteInput() {
  switch (this.dataset.id) {
    case 'input-category':
      mark.category = this.value
      break
    case 'input-value':
      mark.value = this.value
      break
    case 'input-date':
      mark.date = new Date(this.value).toLocaleString()
      break
  }

  mark.id = Date.now()
}

function addMark(mark) {
  const expenseContent = document.getElementById('expense-content')
  const { id, category, value, date } = mark

  if (!expenseContent) return

  const markHTML = `
    <div class="expense-field" id="${id}">
      <div class="expense-field__info" id="place">${dataNote.length}</div>
      <div class="expense-field__info">${category}</div>
      <div class="expense-field__info">$${value}</div>
      <div class="expense-field__info">${date}</div>
      <button class="expense-field__button expense-field__button_info">More Info</button>
      <button class="expense-field__button expense-field__button_edit">Edit</button>
      <button class="expense-field__button expense-field__button_remove">Remove</button>
    </div>
  `

  expenseContent.insertAdjacentHTML('beforeend', markHTML)
  haveMark()
}

function openNote() {
  noteForm.classList.toggle('none')
  overlay.classList.toggle('none')

  if (!noteForm.closest('.none')) {
    put.children[0].textContent = 'x'
  } else {
    put.children[0].textContent = '+'
  }
}

const haveMark = () => {
  if (removeButton().length < 1) return

  removeButton().forEach(button => button.addEventListener('click', removeMark))
}

function removeMark(e) {
  const numFieldAll = document.querySelectorAll('#place')
  const currentField = this.closest('.expense-field')
  const currentFieldId = +currentField.id
  const currentFieldNum = +currentField.children[0].textContent

  dataNote.forEach(({ id }, i) => (id === currentFieldId ? dataNote.splice(i, 1) : 0))
  currentField.remove()

  numFieldAll.forEach((num, i) => (i + 1 > currentFieldNum ? (num.innerText = i) : 0))

  console.log(numFieldAll)
}

export { handleNoteForm, handleNoteInput, addMark, openNote, haveMark, removeMark }
