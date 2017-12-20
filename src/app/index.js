var React = require('react');
var ReactDOM = require('react-dom');
var CreateReactClass = require('create-react-class');



//--------------------------------------------------PROPS-----------------------------------------------------------------//

// // Create Component (you can do this using ES6 or react way of doing it like below)
// // This is how we create a component, essentially we are just creating a react class 
// // Inside this react class we pass an object, this object contains everything to do with our component
// // Inside this object, we can have a variety of different methods that we can use, the only one required method is the render method.
// // This render method is going to be a function that returns some html code, which we will tell to insert it in our index.html.
// // Old syntax was React.createClass but since version 16 that has been deprecated and bundled into an external module create-react-class
// // Remember React does not like to have 2 top level html tags withing a render, therefore all your code should be wrapped around in 1 parent tag (usually a div)


// // var TodoComponent = React.createClass({ // this is the old way
// var TodoComponent = CreateReactClass({
//   render: function(){
//     return(
//       <div>
//         <h1>Hello</h1>
//         <p>Ninja</p>
//         <p>{this.props.mssg}</p>
//         <p>{this.props.cheese.price}</p>
//       </div>
//     );
//   }
// });


// // Insert component into html page (this is where ReactDOM is used)
// // The line below will render the TodoComponent in the DOM, 
// // first argument is the component, second argument is the location where we insert this component
// // ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));


// // Props short for properties, are a way for us to pass data into our components which we want to display on the webpage to the user.
// // We want to create dynamic components which may take some data and output them.
// // Props are much like html properties such as the href property of an a tag.
// // So we will create our own custom property on our TodoComponent and we are going to pass it some data so that we can then use it within this component.
// // We reference it using this.props which grabs all the properties of this component. A component can have many properties.
// // When we use a variable or object to pass it in as a property we use the {} and dont need the "" anymore.
// // this in the component is to reference this component.

// var myCheese = {name: 'Camembert', smellFactor: 'extreme', price: '3.5'};

// ReactDOM.render(<TodoComponent mssg="hav" cheese={myCheese} />, document.getElementById('todo-wrapper'));



// // There are 2 main ways we can work with data in react: 
// // 1) props
// // 2) state











//-----------------------------------------------------STATE-----------------------------------------------------------------//


// // Unlike props we dont pass state into the component, we define the state inside the component itself.
// // And then we can access state properties in that component

// // We start off by defining an initial state of the component


// var TodoComponent = CreateReactClass({
  
//   getInitialState: function(){
//     return {
//       todos: ['wash up', 'eat breakfast', 'take a nap'],
//       age: 30
//     }
//   },

//   render: function(){
//     var ager = setTimeout(function(){
//       // this.setState is not referring to the component, because we are in the setTimeout function, 
//       // so what we need to do is bind the value of this to this function, so it carries it inside the function with it.
//       // outside the setTimeout function, inside the render: function(){ this -> refers to the component}, 
//       // so we are binding the value of this at the component stage, to the setTimeout function, and we are carrying that in with us.
//       this.setState({
//         age: 35
//       });

//     }.bind(this), 5000);

//     var mytodos = this.state.todos.map(function(item, index){
//       return(
//         <li>{item}</li>
//       );
//     });

//     return(
//       <div id="todo-list">
//         <p>The business people have the most leisure</p>
//         <p>{this.state.age}</p>
//         <ul>
//           {mytodos}
//         </ul>

//       </div>
//     );
//   }// render

// });// TodoComponent


// var myCheese = {name: 'Camembert', smellFactor: 'extreme', price: '3.5'};

// ReactDOM.render(<TodoComponent mssg="hav" cheese={myCheese} />, document.getElementById('todo-wrapper'));


// // getInitialState whcich is going to initialize the data of the state of this component.
// // It returns an object is going to be all of our data aka our state for this component
// // Now we can access this data on the state of the component, within this render function, if we want to output it to the screen
// // To access data on the state, it is similar to how we access data on the props. 
// // this.state to reference the state object, and then whatever property we want to grab in this case todos
// // So what we've done up to now is initialize our state by using the getInitialState method and got some data on that state which we then accessed using this.state.name_of_property_on_that_object
// // To change the data on the state, we cant just say this.state.todos = new_value, react wont let us do that, we have to use a method called setState.
// // this.setState takes an object and what we do is pass in a property from the state that we want to change, dont need to pass them all in just the one we want to change.

// // React uses the virtual DOM to update the data in the browser
// // Our website has the DOM, which is a tree of data, 
// // say in our react code we change the age variable and we want to update that variable in the DOM
// // Instead of directly re-rendering the whole DOM, because that's expensive, it takes a long time to do, we use the virtual DOM
// // The virtual DOM is an abstraction away from the virtual DOM, its a representation of it, but when we update the virtual DOM, it is much quicker which is what React does.
// // So basically we make a change in the age with React and that recreates the virtual DOM with the new value, then it takes that virtual DOM and compares it to the actual DOM and looks where the changes are.
// // And where those changes are, it updates only that portion, so we are not re-rendering the whole DOM, we are just changing the sections which have been changed in the virtual DOM.
// // That is why React is so quick because we are using this virtual DOM, and that is much better than working with the DOM directly


// // When do i use state, when do i use props?
// // Most of the time you can use them in tandem, but usually you use props for nested components








//-------------------------------------------------------NESTED COMPONENTS-----------------------------------------------------------------//


var TodoComponent = CreateReactClass({
  
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat breakfast', 'take a nap'],
      age: 30
    }
  },

  render: function(){

    var mytodos = this.state.todos.map(function(item, index){
      return(
        <TodoItem myitem={item} key={index} />
      );
    });

    return(
      <div id="todo-list">
        <p>The business people have the most leisure</p>
        <p>{this.state.age}</p>
        <ul>
          {mytodos}
        </ul>

      </div>
    );
  }// render

});// TodoComponent


// Create TodoItem component
var TodoItem = CreateReactClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.myitem}</span>
        </div>
      </li>
    )
  }
})


ReactDOM.render(<TodoComponent mssg="hav" />, document.getElementById('todo-wrapper'));


// We will map out this nested TodoItem component for each element in the array 
// React strongly recommends adding a unique key property for each component, since all items in the todo array will have the same component name
// So instead of outputting li's like we did in the previous section, we output new components for each item in the array
// And hence there lies the li inside the component, so now each item in the array is a React component with a unique key prop that contains the li tag.
// className is React's way (JSX) of adding a class to an element




















