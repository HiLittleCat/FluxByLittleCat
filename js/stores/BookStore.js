var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Constants = require('../constants/Constants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    books = require('../../_json/books.json');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var bookstore = assign({}, EventEmitter.prototype, {
  books: [],
  init: function(){
    this.books = books;
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
    console.log(this);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAll: function() {
    return this.books;
  }
});
bookstore.init();

bookstore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {

    default:;
  }

});

module.exports = bookstore;