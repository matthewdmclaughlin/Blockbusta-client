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
  $('form').trigger('reset')
}

const createDvdSuccessful = responseData => {
  successMessage(`Created DVD successfully`)
  $('.container').removeClass('hidden')
  setTimeout(function () {
    $('#message').removeClass('success')
    $('#message').text('')
  }, 2500)
}
const createDvdFailure = responseData => {
  failureMessage('Create DVD failed')
  setTimeout(function () {
    $('#message').removeClass('failure')
    $('#message').text('')
  }, 2500)
}

module.exports = {
  createDvdSuccessful,
  createDvdFailure,
  getDvdsSuccess
}
