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

const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

const onCreateBook = event => {
  event.preventDefault()

  const form = event.target
  const bookData = getFormFields(form)

  api.createBook(bookData)
    .then(ui.onCreateBookSuccess)
    .catch(ui.onCreateBookFailure)
}

const onDeleteBook = event => {
  const id = $(event.target).data('id')
  api.deleteBook(id)
    .then(function (data) {
      onGetBooks(event)
    })
    .catch(ui.failure)
}

module.exports = {
  onGetBooks,
  onCreateBook,
  onDeleteBook,
  onClearBooks
}
