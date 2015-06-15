var AppDispatcher = require('../dispatcher/AppDispatcher'),
    Constants = require('../constants/Constants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    menus = require('../../_json/menus.json');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var MenuStore = assign({}, EventEmitter.prototype, {
  menus: [],
  tabs: [],
  init: function(){
    this.menus = menus;
    for(var i=0;i<menus.length;i++){
      menus[i].fixed && this.tabs.push(menus[i]);
    }
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
    return this.menus;
  },
  getAllTab: function() {
    return this.tabs;
  },
  showMenu: function(curMenu){
    this.menus.map(function(menu){
        menu.id == curMenu.id ? menu.active =true : menu.active = false;
    });
  },
  showMenuById: function(curId){
    this.menus.map(function(menu){
        menu.id == curId ? menu.active =true : menu.active = false;
    });
  },
  showTab: function(menu) {
    var bool = false;
    for(var i=0;i<this.tabs.length;i++){
      if(this.tabs[i].id == menu.id){
        this.tabs[i].active = true;
        bool = true;
      }else{
        this.tabs[i].active = false;
      }
    }
    !bool && this.tabs.push(menu);
  },
  closeTabById: function(id) {
    for(var i=0;i<this.tabs.length;i++){
      if(this.tabs[i].id == id){
        this.tabs.splice(i,1);
        break;
      }
    }
  }
});
MenuStore.init();

MenuStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.SHOW_MENU:
      MenuStore.showMenu(action.menu);
      MenuStore.showTab(action.menu);
      MenuStore.emitChange();
      break;
    case ActionTypes.CLOSE_TAB:
      MenuStore.closeTabById(action.tab.id);
      MenuStore.emitChange();
      break;
    default:;
  }

});

module.exports = MenuStore;