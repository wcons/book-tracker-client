'use strict'

const showBooksTemplate = require('../templates/books.handlebars')

const onGetBooksSuccess = (data) => {
  console.log(data)
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
module.exports = {
  onGetBooksSuccess,
  failure,
  onCreateBookSuccess,
  onCreateBookFailure
}
