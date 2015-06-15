var React = require('react'),
    Router = require('react-router'),
    Table = require('../public-components/Table'),
    BookStore = require('../stores/BookStore');

var Navigation = Router.Navigation,
    Link = Router.Link,
    RouteHandler = Router.RouteHandler;


var columns = [{
    title: '名称',
    dataIndex: 'name'
}, {
    title: '作者',
    dataIndex: 'author'
}, {
    title: '价格',
    dataIndex: 'price'
}, {
    title: '操作',
    dataIndex: '',
    renderer: function(text, book) {
        return <Link to={"book"} params={{bookId: book.id}}>详情</Link>
    }
}];

var Books = React.createClass({
    render: function() {
        return ( <div>
            <Table columns={columns} data={this.props.data.books} className ="table" />
            <RouteHandler data={this.props.data.books}/>
        </div>);
    }
});

module.exports = Books;