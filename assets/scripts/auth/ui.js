'use strict'

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up input.formclear').val('')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-up input.formclear').val('')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
