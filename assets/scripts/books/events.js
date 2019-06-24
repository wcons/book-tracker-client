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

const onUpdateBook = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const bookData = getFormFields(form)
  api.updateBook(bookData, id)
    .then(ui.onUpdateBookSuccess)
    .catch(ui.onUpdateBookFailure)
}

const onDeleteBook = event => {
  const id = $(event.target).data('id')
  api.deleteBook(id)
    .then(function (data) {
      onGetBooks(event)
    })
    .catch(ui.failure)
}

const showForm = event => {
  $(event.target).parent().parent().children('.book_update').show()
  //  $('.book-info').hide()
  // $('.book-update').show()
}

module.exports = {
  onGetBooks,
  onCreateBook,
  onDeleteBook,
  onClearBooks,
  onUpdateBook,
  showForm
}
