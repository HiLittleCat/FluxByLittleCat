/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react'),
  Router = require('react-router'),
  RouteHandler = Router.RouteHandler,
  Route = Router.Route,
  Link = Router.Link,
  DefaultRoute = Router.DefaultRoute,
  Navigation = Router.Navigation,
  App = require('./components/App.react'),
  Books = require('./components/Books.react'),
  Book = require('./components/Book.react'),
  Movies = require('./components/Movies.react'),
  Movie = require('./components/Movie.react');
  Home = require('./components/Home.react'),
  About = require('./components/About.react');
// declare our routes and their hierarchy
var routes = (
    <Route path="/" handler={App}>
      <Route path="home" name="home" handler={Home}>
      </Route>
      <Route path="books" name="bookList" handler={Books}>
        <Route path=":bookId" name="book" handler={Book}/>
      </Route>
      <Route path="movies" name="movieList" handler={Movies}>
        <Route path=":movieId" name="movie" handler={Movie}/>
      </Route>
      <Route path="about" name="about" handler={About}>
      </Route>
      <DefaultRoute handler={Home}/>
    </Route>
);

Router.run(routes, Router.HashLocation, function(Root){
    React.render(<Root />, document.body);
});