# FluxByLittleCat

使用facebook提供的Dispatcher，路由使用的是react-router。
App.react.js作为Controller-View，监听所有store的变化，改变自身state来重新render自己，将数据以props形式传递到子组件。
子组件只接收props来render自己，用户操作组件的时候发出action 去改变store。
Action抽象封装 Component 中可能出现的操作。
store维护数据，执行action，并触发store改变的事件。
由于只是静态Demo，没有ajax相关的操作，真实环境中，与服务器的交互放在action中还是store中由开发者自己考量。

flux commit
