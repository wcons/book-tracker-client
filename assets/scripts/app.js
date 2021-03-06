'use strict'

const authEvents = require('./auth/events.js')
const bookEvents = require('./books/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#getBooks').on('click', bookEvents.onGetBooks)
  $('#clearBooks').on('click', bookEvents.onClearBooks)
  $('#createBook').on('submit', bookEvents.onCreateBook)
  $('#content').on('click', '.removeBook', bookEvents.onDeleteBook)
  $('#content').on('submit', '.updateBook', bookEvents.onUpdateBook)
  $('#content').on('click', '.openForm', bookEvents.showForm)
})
