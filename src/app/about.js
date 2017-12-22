var React = require('react');
var CreateReactClass = require('create-react-class');
import {Link} from 'react-router-dom'

var About = CreateReactClass({
  render: function(){
    return(
      <div>
        <Link to={'/'}>Home</Link>
        <h2>All about me</h2>
      </div>
    );
  }
});

module.exports = About;