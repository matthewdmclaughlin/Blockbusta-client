'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const dvdEvents = require('./dvd/events')
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('body').on('click', '#getDvdsButton', dvdEvents.onGetDvds)
  $('body').on('submit', '#createDvdButton', dvdEvents.onGetDvds)
  $('#getDvdsButton').on('click', dvdEvents.onGetDvds)
  $('#clearDvdsButton').on('click', dvdEvents.onClearDvds)
  $('.content').on('click', '.delete-dvd', dvdEvents.onDeleteDvds)
  $('.content').on('submit', '.edit-dvd', dvdEvents.onEditDvds)
  // your JS code goes here
})
