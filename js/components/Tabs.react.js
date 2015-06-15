var React = require('react'),
    Router = require('react-router'),
    TabItem = require('./TabItem.react');
var  Tabs = React.createClass({
  render: function() {
    var tabs = '';
    if(!this.props.tabs || !this.props.tabs.map) {
        tabItems = '';
    }else{
      tabItems = this.props.tabs.map(function(tab){
        return (<TabItem tab={tab} />);
      });
    }
    return (
      <ul className="tabs">{tabItems}</ul>
    );
  }

});

module.exports = Tabs;