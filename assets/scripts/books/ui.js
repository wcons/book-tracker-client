'use strict'

const api = require('./api.js')

const showBooksTemplate = require('../templates/books.handlebars')

const onGetBooksSuccess = (data) => {
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('#content').html(showBooksHtml)
}

const failure = (error) => {
  console.error(error)
}

const onCreateBookSuccess = responseData => {
  $('#message').text('Created Book Successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#createBook input.formclear').val('')
  clearBooks()
  api.getBooks()
    .then(onGetBooksSuccess)
    .catch(failure)
}

const onCreateBookFailure = responseData => {
  $('#message').text('Create Book Failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#createBook input.formclear').val('')
}

const onUpdateBookSuccess = responseData => {
  $('#message').text('Updated Book Successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.book_update').hide()
  clearBooks()
  api.getBooks()
    .then(onGetBooksSuccess)
    .catch(failure)
}

const onUpdateBookFailure = responseData => {
  $('#message').text('Update Book Failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const clearBooks = () => {
  $('.content').empty()
}

module.exports = {
  onGetBooksSuccess,
  failure,
  onCreateBookSuccess,
  onCreateBookFailure,
  onUpdateBookSuccess,
  onUpdateBookFailure,
  clearBooks
}
