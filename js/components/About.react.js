var React = require('react'),
    Router = require('react-router'),
    Navigation = Router.Navigation;

var About = React.createClass({
  render: function(){
    return (
        <div>
            <h3>flux的基本概念:</h3>
            <ul>
            <li>1、使用facebook提供的Dispatcher，路由使用的是react-router。</li>

                <li>2、App.react.js作为Controller-View，监听所有store的变化，改变自身state来重新render自己，将数据以props形式传递到子组件。</li></li>

                <li>3、子组件只接收props来render自己，用户操作组件的时候发出action 去改变store。</li>

                <li>4、Action抽象封装 Component 中可能出现的操作。</li>

                <li>5、store维护数据，执行action，并触发store改变的事件。</li>

                <li>由于只是静态Demo，没有ajax相关的操作，真实环境中，与服务器的交互放在action中还是store中由开发者自己考量。</li>
            </ul>
        </div>
    );
  }
});

module.exports = About;