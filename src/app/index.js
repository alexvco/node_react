var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');

// Create Component (you can do this using ES6 or react way of doing it like below)
// This is how we create a component, essentially we are just creating a react class 
// Inside this react class we pass an object, this object contains everything to do with our component
// Inside this object, we can have a variety of different methods that we can use, the only one required method is the render method.
// This render method is going to be a function that returns some html code, which we will tell to insert it in our index.html.
// Old syntax was React.createClass but since version 16 that has been deprecated and bundled into an external module create-react-class
// Remember React does not like to have 2 top level html tags withing a render, therefore all your code should be wrapped around in 1 parent tag (usually a div)


var TodoComponent = CreateReactClass({
  render: function(){
    return(
      <div>
        <h1>Hello</h1>
        <p>Ninja</p>
        <p>{this.props.mssg}</p>
        <p>{this.props.cheese.name}</p>
      </div>
    );
  }
});


// Insert component into html page (this is where ReactDOM is used)
// The line below will render the TodoComponent in the DOM, 
// first argument is the component, second argument is the location where we insert this component
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));


// Props short for properties, are a way for us to pass data into our components which we want to display on the webpage to the user.
// We want to create dynamic components which may take some data and output them.
// Props are much like html properties such as the href property of an a tag.
// So we will create our own custom property on our TodoComponent and we are going to pass it some data so that we can then use it within this component.
// We reference it using this.props which grabs all the properties of this component. A component can have many properties.
// When we use a variable or object to pass it in as a property we use the {} and dont need the "" anymore.
// this in the component is to reference this component.

var myCheese = {name: 'Camembert'};

ReactDOM.render(<TodoComponent mssg="hav" cheese={myCheese} />, document.getElementById('todo-wrapper'));
