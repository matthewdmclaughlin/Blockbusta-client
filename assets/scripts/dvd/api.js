'use strict'

const config = require('../config')
const store = require('../store')
// Create new games on the server. (CREATE) FIX: No POST request to create a new game.

const indexDvds = formData => {
  return $.ajax({
    url: config.apiUrl + '/dvds',
    data: formData,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createDvd = function () {
  return $.ajax({
    url: config.apiUrl + '/dvds',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showDvd = function (id) {
  return $.ajax({
    url: config.apiUrl + '/dvds/:id',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteDvd = function (id) {
  return $.ajax({
    url: config.apiUrl + '/dvds/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editDvd = (formData, id) => {
  return $.ajax({
    url: config.apiUrl + '/dvds/' + id,
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  indexDvds,
  createDvd,
  showDvd,
  deleteDvd,
  editDvd
}
