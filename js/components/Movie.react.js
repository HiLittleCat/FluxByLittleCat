var React = require('react'),
    Router = require('react-router'),
    Navigation = Router.Navigation;

var Movie = React.createClass({
  render: function(){
    var movie = {} , movies = this.props.data;
    for(var i=0;i<movies.length;i++){
        if(movies[i].id == this.props.params.movieId){
            movie = movies[i];
            break;
        }
    }
    return (
        <div className="detail">
            <h3>电影详情</h3>
            <p><label>名称：</label>{movie.name}</p>
            <p><label>类型：</label>{movie.type}</p>
            <p><label>时长：</label>{movie.duration}</p>
        </div>
    );
  }
});

module.exports = Movie;