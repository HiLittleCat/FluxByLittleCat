var React = require('react'),
    Router = require('react-router'),
    Table = require('../public-components/Table'),
    MovieStore = require('../stores/MovieStore');

var Navigation = Router.Navigation,
    Link = Router.Link,
    RouteHandler = Router.RouteHandler;


var columns = [{
    title: '名称',
    dataIndex: 'name'
}, {
    title: '类型',
    dataIndex: 'type'
}, {
    title: '时长',
    dataIndex: 'duration'
}, {
    title: '操作',
    dataIndex: '',
    renderer: function(text, movie) {
        return <Link to={"movie"} params={{movieId: movie.id}}>详情</Link>
    }
}];

var Movies = React.createClass({
    render: function() {
        return ( <div>
            <Table columns={columns} data={this.props.data.movies} className ="table" />
            <RouteHandler data={this.props.data.movies}/>
        </div>);
    }
});

module.exports = Movies;