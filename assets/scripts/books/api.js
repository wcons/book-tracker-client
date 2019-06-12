const config = require('../config')
const store = require('../store')

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createBook = bookData => {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'POST',
    data: bookData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getBooks,
  createBook
}
