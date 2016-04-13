"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function(author) {
    var newAuthor = AuthorApi.saveAuthor(author);
  
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },
  updateAuthor: function(author) {
    //llamar al api para update
    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: author
    });
  },
  deleteAuthor: function(id) {
    //llamar al api para borrar
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    });
  }  
};

module.exports = AuthorActions;