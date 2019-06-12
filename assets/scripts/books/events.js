'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetBooks = event => {
  event.preventDefault()
  api.getBooks()
    .then(ui.onGetBooksSuccess)
    .catch(ui.failure)
}

const onCreateBook = event => {
  event.preventDefault()

  const form = event.target
  const bookData = getFormFields(form)

  api.createBook(bookData)
    .then(ui.onCreateBookSuccess)
    .catch(ui.onCreateBookFailure)
}

module.exports = {
  onGetBooks,
  onCreateBook
}
