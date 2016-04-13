"use strict";

var React = require('react');

var Router = require('react-router');
var DefualtRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var routes = (

  <Route name="app" path="/" handler={require('./components/app')}>
    <DefualtRoute handler={require('./components/homePage')} />
    <Route name="authors" handler={require('./components/authors/authorPage')} />
    <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
    <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
    <Route name="about" handler={require('./components/about/about')} />    
    <NotFoundRoute handler={require('./components/common/notFoundPage')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="awthors" to="about" />
  </Route>
);

module.exports = routes;