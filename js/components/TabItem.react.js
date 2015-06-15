var React = require('react'),
    Router = require('react-router'),
    Navigation = Router.Navigation,
    Link = Router.Link,
    MenuActions = require('../actions/MenuActions');

var TabItem = React.createClass({
  mixins: [Navigation],
  render: function() {
    if(this.props.tab.fixed){
      return(
        <li>
          <Link to={this.props.tab.link} onClick={this._click}>{this.props.tab.name}</Link>
        </li>
      )
    }else{
      return (
        <li>
          <Link to={this.props.tab.link} onClick={this._click}>{this.props.tab.name}</Link>
          <i className="close" onClick={this._close}>x</i>
        </li>
      )
    }
  },
  _click: function(){
      MenuActions.showMenu(this.props.tab);
  },
  _close: function(){
      MenuActions.closeTab(this.props.tab);
      if(this.props.tab.active){
        this.transitionTo('home');
      }
  }
});

module.exports = TabItem;