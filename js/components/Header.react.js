var React = require('react'),
    Router = require('react-router'),
    MenuItem = require('./MenuItem.react');

var  Header = React.createClass({
  render: function() {
    var menuItems = this.props.menus.map(function(menu){
        return (<MenuItem menu={menu} />);
    });
    return (
      <div className="header">
        <div className="logo">
          <h1><a>Flux</a></h1>
        </div>
        <ul className="nav">
          {menuItems}
        </ul>
      </div>
    );
  }
});

module.exports = Header;