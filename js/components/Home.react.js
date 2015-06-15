var React = require('react'),
    Router = require('react-router'),
    Navigation = Router.Navigation;

var Home = React.createClass({
  render: function(){
    return (
      <p>这是一个flux + react + react-route 的示例</p>
    );
  }
});

module.exports = Home;