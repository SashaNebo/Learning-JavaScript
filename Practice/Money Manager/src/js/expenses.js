import variables from './variables.js'
import { data, mark } from '../index.js'

const { listContainer, noteForm, allNoteInput, put, overlay } = variables

function handleFormSubmit(e) {
  e.preventDefault()
  data.push(mark)
  allNoteInput.forEach(input => (input.value = ''))
  renderNoteList(mark)
  openNote()
}

function handleInput() {
  switch (this.dataset.id) {
    case 'input-value':
      mark.value = this.value
      break
    case 'input-description':
      mark.description = this.value
      break
    case 'input-date':
      mark.date = new Date(this.value).toLocaleString()
      break
  }

  mark.id = Date.now()
}

function renderNoteList(mark) {
  // const { value, description, date, id } = mark
  // const listItemHTML = `
  //   <div class="list-item" data-id="${id}">
  //     <div class="number">${data.length}.</div>
  //     <div class="description">${description}</div>
  //     <div class="date">${date}</div>
  //     <div class="value">$${value}</div>
  //   </div>
  // `
  // listContainer.insertAdjacentHTML('beforeend', listItemHTML)
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

export { handleFormSubmit, handleInput, renderNoteList, openNote }
