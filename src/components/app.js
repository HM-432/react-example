$ = jQuery = require('jquery'); //Global so bootstrap can find jquery

var React = require('react');
var Header = require('./common/header.js');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render: function () {
    var Child;

    return (
      <div>
        <Header />
        <RouteHandler />      
      </div>
    );
  }
});

module.exports = App;