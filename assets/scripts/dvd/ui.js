'use strict'
const showDvdsTemplate = require('../templates/dvd-listing.handlebars')
const store = require('../store')
// const updateDvdsTemplate = require('../templates/dvd-listing.handlebars')
const getDvdsSuccess = (data) => {
  const showDvdsHtml = showDvdsTemplate({ dvds: data.dvds })
  $('.content').html(showDvdsHtml)
}

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  // Clear out our getFormFields
  $('form').trigger('reset')
}

const createDvdSuccessful = responseData => {
  successMessage(`Create game successfully`)
  store.newGame = responseData.game
  $('.container').removeClass('hidden')
}
const createDvdFailure = responseData => {
  failureMessage('Create game failed')
}

module.exports = {
  createDvdSuccessful,
  createDvdFailure,
  getDvdsSuccess
}
