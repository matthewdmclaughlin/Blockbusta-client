'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onGetDvds = (event) => {
  event.preventDefault()
  api.indexDvds()
    .then(ui.getDvdsSuccess)
    .catch(ui.failure)
}
const onCreateDvds = (event) => {
  event.preventDefault()
  api.createDvd()
    .then(ui.createDvdSuccessful)
    .catch(ui.createDvdFailure)
}
const onClearDvds = (event) => {
  event.preventDefault()
  ui.clearDvds()
}

const onDeleteDvds = (event) => {
  const id = $(event.target).data('id')
  api.deleteDvd(id)
    .then(() => {
      onGetDvds(event)
    })
    .catch(ui.failure)
}

const onEditDvds = (event) => {
  const id = $(event.target).data('id')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.editDvd(formData, id)
    .then(() => {
      onGetDvds(event)
    })
    .catch(ui.failure)
}

module.exports = {
  onGetDvds,
  onCreateDvds,
  onDeleteDvds,
  onClearDvds,
  onEditDvds
}
