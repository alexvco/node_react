var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

// Create Component (you can do this using ES6 or react way of doing it like below)
// This is how we create a component, essentially we are just creating a react class 
// Inside this react class we pass an object, this object contains everything to do with our component
// Inside this object, we can have a variety of different methods that we can use, the only one required method is the render method.
// This render method is going to be a function that returns some html code, which we will tell to insert it in our index.html.
// Old syntax was React.createClass but since version 16 that has been deprecated and bundled into an external module create-react-class

var TodoComponent = CreateReactClass({
  render: function(){
    return(
      <h1>Hello</h1>  
    );
  }
});


// Insert component into html page (this is where ReactDOM is used)
// The line below will render the TodoComponent in the DOM, 
// first argument is the component, second argument is the location where we insert this component
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));