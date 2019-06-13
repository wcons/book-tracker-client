'use strict'

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
}
const onCreateBookFailure = responseData => {
  $('#message').text('Create Book Failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#createBook input.formclear').val('')
}

const clearBooks = () => {
  $('.content').empty()
}

module.exports = {
  onGetBooksSuccess,
  failure,
  onCreateBookSuccess,
  onCreateBookFailure,
  clearBooks
}
