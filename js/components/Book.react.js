var React = require('react'),
    Router = require('react-router'),
    Navigation = Router.Navigation;

var Book = React.createClass({
  render: function(){
    var book = {} , books = this.props.data;
    for(var i=0;i<books.length;i++){
        if(books[i].id == this.props.params.bookId){
            book = books[i];
            break;
        }
    }
    return (
        <div className="detail">
            <h3>电影详情</h3>
            <p><label>名称：</label>{book.name}</p>
            <p><label>作者：</label>{book.author}</p>
            <p><label>价格：</label>{book.price}</p>
        </div>
    );
  }
});

module.exports = Book;