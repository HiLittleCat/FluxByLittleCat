var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Constants = require('../constants/Constants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    movies = require('../../_json/movies.json');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var MovieStore = assign({}, EventEmitter.prototype, {
  movies: [],
  init: function(){
    this.movies = movies;
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
    return this.movies;
  }
});
MovieStore.init();

MovieStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {

    default:;
  }

});

module.exports = MovieStore;