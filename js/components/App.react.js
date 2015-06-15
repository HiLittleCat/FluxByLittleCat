var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    //React Component
    Header = require('./Header.react'),
    Tabs = require('./Tabs.react'),
    //Store
    MenuStore = require('../stores/MenuStore'),
    BookStore = require('../stores/BookStore'),
    MovieStore = require('../stores/MovieStore');

var App = React.createClass({
  getInitialState: function() {
    return {
      menus:MenuStore.getAll(),
      tabs:MenuStore.getAllTab(),
      movies:MovieStore.getAll(),
      books:BookStore.getAll()
    };
  },
  componentDidMount: function() {
    MenuStore.addChangeListener(this._change);
  },
  componentWillUnmount: function() {
    MenuStore.addChangeListener(this._change);
  },
  render: function() {
    return (
      <div>
        <Header menus={this.state.menus}/>
        <Tabs tabs={this.state.tabs}/>
        <div className="content">
          <RouteHandler data={this.state}/>
        </div>
      </div>
    )
  },
  _change: function(){
    this.setState({
      menus:MenuStore.getAll(),
      tabs:MenuStore.getAllTab(),
      movies:MovieStore.getAll(),
      books:BookStore.getAll()
    });
  }
});

module.exports = App;