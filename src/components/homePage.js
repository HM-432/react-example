"use strict";

var React = require("react");
var Router = require('react-router');
var Link = Router.Link;

var Home = new React.createClass({
  render: function () {
    return ( < div className = "jumbotron" >
              < h1 > Pluralsigth Administration < /h1>  
              < p > React, React router and flux for utrl responsive web apps. < /p> 
              <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            < /div>
            
    );
  }
});

module.exports = Home;