var Dispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

var MenuActions = {

    showMenu: function(menu) {
        Dispatcher.dispatch({
            type: ActionTypes.SHOW_MENU,
            menu: menu
        });
    },
    closeTab: function(tab) {
        Dispatcher.dispatch({
            type: ActionTypes.CLOSE_TAB,
            tab: tab
        });
    }
};

module.exports = MenuActions;