var React = require('react'),
    Router = require('react-router'),
    Navigation = Router.Navigation,
    Link = Router.Link,
    MenuActions = require('../actions/MenuActions');

var MenuItem = React.createClass({
  mixins: [Navigation],

  _click: function(){
      MenuActions.showMenu(this.props.menu);
  },
  render: function() {
    return (
      <li >
        <Link to={this.props.menu.link} onClick={this._click}>{this.props.menu.name}</Link>
      </li>
    )
  }
});

module.exports = MenuItem;