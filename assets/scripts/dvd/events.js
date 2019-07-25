'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetDvds = (event) => {
  event.preventDefault()
  api.getDvds()
    .then(ui.getDvdSuccess)
    .catch(ui.failure)
}

const onClearDvds = (event) => {
  event.preventDefault()
  ui.clearDvds()
}

const onDeleteDvds = (event) => {
  const id = $(event.target).data('id')
  api.deleteDvds(id)
    .then(() => {
      onGetDvds(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getDvdsButton').on('click', onGetDvds)
  $('#clearDvdsButton').on('click', onClearDvds)
  $('.body').on('click', '.delete-dvd', onDeleteDvds)
}

module.exports = {
  addHandlers
}
