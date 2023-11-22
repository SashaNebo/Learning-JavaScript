import variables from './variables.js'
import { handleFormSubmit, handleInput, openNote } from './expenses.js'

const { noteForm, allNoteInput } = variables

noteForm.addEventListener('submit', handleFormSubmit)
allNoteInput.forEach(input => input.addEventListener('input', handleInput))
put.addEventListener('click', openNote)
