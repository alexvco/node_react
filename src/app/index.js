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


// var TodoComponent = CreateReactClass({
  
//   getInitialState: function(){
//     return {
//       todos: ['wash up', 'eat breakfast', 'take a nap'],
//       age: 30
//     }
//   },

//   render: function(){

//     var mytodos = this.state.todos.map(function(item, index){
//       return(
//         <TodoItem myitem={item} key={index} />
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


// // Create TodoItem component
// var TodoItem = CreateReactClass({
//   render: function(){
//     return(
//       <li>
//         <div className="todo-item">
//           <span className="item-name">{this.props.myitem}</span>
//         </div>
//       </li>
//     )
//   }
// })


// ReactDOM.render(<TodoComponent mssg="hav" />, document.getElementById('todo-wrapper'));


// // We will map out this nested TodoItem component for each element in the array 
// // React strongly recommends adding a unique key property for each component, since all items in the todo array will have the same component name
// // So instead of outputting li's like we did in the previous section, we output new components for each item in the array
// // And hence there lies the li inside the component, so now each item in the array is a React component with a unique key prop that contains the li tag.
// // className is React's way (JSX) of adding a class to an element









//-------------------------------------------------------EVENTS IN REACT-----------------------------------------------------------------//

// //React Events -> https://reactjs.org/docs/events.html


// var TodoComponent = CreateReactClass({
  
//   getInitialState: function(){
//     return {
//       todos: ['wash up', 'eat breakfast', 'take a nap'],
//       age: 30
//     }
//   },

//   render: function(){

//     var mytodos = this.state.todos.map(function(item, index){
//       return(
//         <TodoItem myitem={item} key={index} />
//       );
//     });

//     return(
//       <div id="todo-list">
//         <p onClick={this.uclicked}>The business people have the most leisure</p>
//         <p>{this.state.age}</p>
//         <ul>
//           {mytodos}
//         </ul>

//       </div>
//     );
//   },// render

//   // Custom functions
//   uclicked: function(){
//     console.log('you clicked me');
//   }

// });// TodoComponent


// // Create TodoItem component
// var TodoItem = CreateReactClass({
//   render: function(){
//     return(
//       <li>
//         <div className="todo-item">
//           <span className="item-name">{this.props.myitem}</span>
//         </div>
//       </li>
//     )
//   }
// })


// ReactDOM.render(<TodoComponent mssg="hav" />, document.getElementById('todo-wrapper'));









//-------------------------------------------------------EVENTS IN NESTED COMPONENTS-----------------------------------------------------------------//

// // When we click on an item we want to delete it from our ul.


// var TodoComponent = CreateReactClass({
  
//   getInitialState: function(){
//     return {
//       todos: ['wash up', 'eat breakfast', 'take a nap'],
//       age: 30
//     }
//   },//getInitialState

//   render: function(){
//     var mytodos = this.state.todos.map(function(item, index){
//       return(
//         <TodoItem myitem={item} key={index} myDelete={this.onDelete} />
//       );
//     }.bind(this));

//     return(
//       <div id="todo-list">
//         <p>The business people have the most leisure</p>
//         <p>{this.state.age}</p>
//         <ul>
//           {mytodos}
//         </ul>
//       </div>
//     );
//   },// render

//   // Custom functions
//   onDelete: function(item){
//     var updatedTodos = this.state.todos.filter(function(val, index){
//       return item !== val; // this will return all items that are not equal to the item we want to delete
//     });
//     this.setState({ //this is how we change the state of the component
//       todos: updatedTodos
//     });
//   }

// });// TodoComponent

// // Create TodoItem component
// var TodoItem = CreateReactClass({
//   render: function(){
//     return(
//       <li>
//         <div className="todo-item">
//           <span className="item-name">{this.props.myitem}</span>
//           <span className="item-delete" onClick={this.handleDelete}> x </span>
//         </div>
//       </li>
//     );
//   },

//   handleDelete: function(){
//     this.props.myDelete(this.props.myitem);
//   }

// });// TodoItem component


// ReactDOM.render(<TodoComponent mssg="hav" />, document.getElementById('todo-wrapper'));


// // The individual items are in the TodoItem component, so that's where the click event should happen
// // When someone clicks on the x, handleDelete function is going to fire.
// // We want this function to delete whatever item we clicked on from the mytodos array
// // The data however is stored in the state of the TodoComponent, the parent component
// // So what we need to do is pass this handleDelete event back to the parent (TodoComponent), 
// // to another function in the TodoComponent so that this other function can delete the item from the state
// // because we can't directly delete it from this nested component, so we need to find a way to pass this item back up to the TodoComponent so we can delete that item
// // So the way we are going to do that is by passing a function (onDelete) which we will create in the TodoComponent as a prop down to the TodoItem component, so that we can access that function.





//-------------------------------------------------------Modularizing Our Code-----------------------------------------------------------------//



// // Module requires
// var TodoItem = require('./todoItem');
// require('./css/index.css');

// var TodoComponent = CreateReactClass({
  
//   getInitialState: function(){
//     return {
//       todos: ['wash up', 'eat breakfast', 'take a nap'],
//       age: 30
//     }
//   },//getInitialState

//   render: function(){
//     var mytodos = this.state.todos.map(function(item, index){
//       return(
//         <TodoItem myitem={item} key={index} myDelete={this.onDelete} />
//       );
//     }.bind(this));

//     return(
//       <div id="todo-list">
//         <p>The business people have the most leisure</p>
//         <p>{this.state.age}</p>
//         <ul>
//           {mytodos}
//         </ul>
//       </div>
//     );
//   },// render

//   // Custom functions
//   onDelete: function(item){
//     var updatedTodos = this.state.todos.filter(function(val, index){
//       return item !== val; // this will return all items that are not equal to the item we want to delete
//     });
//     this.setState({ //this is how we change the state of the component
//       todos: updatedTodos
//     });
//   }

// });// TodoComponent


// ReactDOM.render(<TodoComponent mssg="hav" />, document.getElementById('todo-wrapper'));


// // Modularizing our code -> split it up into separate modules so that we can keep on top of it better
// // Ideally we want to give each component its own module 
// // The parent component can stay in the index file because thats kind of like the root component
// // So we will move the TodoItem out of this file and into a separate component file
// // Once moved into new file, we need to tell this index file that we require to use the TodoItem component as well
// // So we will do module requires, we can do the requires because we are using webpack
// // We also need to export what we want to be available in this index.js file
// // We also need to require React in our todoItem.js file, since we are using React and CreateReactClass in this file as well
// // Everything still works but our code is more manageable and maintainable

// // We will do the same with the css, we will insert them where we need them
// // Basically compartmentalize and load the css into each component when its rendered in the DOM, 
// // Essentially each component will have its own css file, just like it has its own js file rather than just one big file
// // We can import css into javascript files, then insert that css into the DOM
// // To import a css file into this file, you do a require similar to js requires, however we need to put the .css extension
// // You need to install the css loaders, npm install style-loader css-loader --save-dev









//-------------------------------------------------------Adding items to our todo (input references)-----------------------------------------------------------------//



// // Module requires
// var TodoItem = require('./todoItem');
// var AddItem = require('./addItem');
// require('./css/index.css');

// var TodoComponent = CreateReactClass({
  
//   getInitialState: function(){
//     return {
//       todos: ['wash up', 'eat breakfast', 'take a nap'],
//       age: 30
//     }
//   },//getInitialState

//   render: function(){
//     var mytodos = this.state.todos.map(function(item, index){
//       return(
//         <TodoItem myitem={item} key={index} myDelete={this.onDelete} />
//       );
//     }.bind(this));

//     return(
//       <div id="todo-list">
//         <p>The business people have the most leisure</p>
//         <p>{this.state.age}</p>
//         <ul>
//           {mytodos}
//         </ul>
//         <AddItem myAdd={this.onAdd} />
//       </div>
//     );
//   },// render

//   // Custom functions
//   onDelete: function(item){
//     var updatedTodos = this.state.todos.filter(function(val, index){
//       return item !== val; // this will return all items that are not equal to the item we want to delete
//     });
//     this.setState({ //this is how we change the state of the component
//       todos: updatedTodos
//     });
//   },

//   onAdd: function(item){
//     var updatedTodos = this.state.todos;
//     updatedTodos.push(item);
//     this.setState({
//       todos: updatedTodos
//     })
//   }

// });// TodoComponent


// ReactDOM.render(<TodoComponent mssg="hav" />, document.getElementById('todo-wrapper'));


// We will need to create a new component for the form
// When the user clicks add, it will fire up an event to add the data to our todos (aka in the state of the parent component)
// the way we are going to grab that data from this input field is by using input refs
// We will nest this AddItem component (aka a static, stateless class) into our TodoComponent
// We will add an onSubmit event handler, which will grab the input ref, and its going to pass it back up into
// the parent component (TodoComponent), which is going to add that item to the data in state in the todos array
// In React we can use ref="something" on an input field, which can act like an id from which we can grab its value
// We access it by saying this.refs.something or its value by this.refs.something
// The way we are going to do this is by creating a function in the TodoComponent that will pass down as a prop into our AddItem component, so that we can use it and alter the todos data










//-------------------------------------------------------Component Life-cycle methods-----------------------------------------------------------------//



// // Module requires
// var TodoItem = require('./todoItem');
// var AddItem = require('./addItem');
// require('./css/index.css');

// var TodoComponent = CreateReactClass({
  
//   getInitialState: function(){
//     return {
//       todos: ['wash up', 'eat breakfast', 'take a nap'],
//       age: 30
//     }
//   },//getInitialState

//   render: function(){
//     var mytodos = this.state.todos.map(function(item, index){
//       return(
//         <TodoItem myitem={item} key={index} myDelete={this.onDelete} />
//       );
//     }.bind(this));

//     return(
//       <div id="todo-list">
//         <p>The business people have the most leisure</p>
//         <p>{this.state.age}</p>
//         <ul>
//           {mytodos}
//         </ul>
//         <AddItem myAdd={this.onAdd} />
//       </div>
//     );
//   },// render

//   // Custom functions
//   onDelete: function(item){
//     var updatedTodos = this.state.todos.filter(function(val, index){
//       return item !== val; // this will return all items that are not equal to the item we want to delete
//     });
//     this.setState({ //this is how we change the state of the component
//       todos: updatedTodos
//     });
//   },

//   onAdd: function(item){
//     var updatedTodos = this.state.todos;
//     updatedTodos.push(item);
//     this.setState({
//       todos: updatedTodos
//     })
//   },


//   // lifecycle functions
//   componentWillMount: function(){
//     console.log('componentWillMount');
//   },

//   componentDidMount: function(){
//     console.log('componentDidMount');
//     //any grabbing of external data
//   },

//   componentWillUpdate: function(){
//     console.log('componentWillUpdate');
//   },

// });// TodoComponent


// ReactDOM.render(<TodoComponent mssg="hav" />, document.getElementById('todo-wrapper'));


// // getInitialState and render are 2 different life-cycle functions, 
// // basically they happen at a particular point in time during the life cycle of this component
// // They dont just fire all at once, react doesnt do that, they fire in a particular order
// // getInitialState fires before render, and it sets up the state of the component
// // then render fires, and it renders the code to the browser using the data in the initial state
// // There are many more life-cycle functions which make up the component life-cycle

// // Mounting Lifecycle Functions (these are functions that occur when a component is mounted to the DOM, aka when the DOM is loaded/ready or page refresh)
// // 1. getInitialState        -> Set the initial state of the component, sets up the initial data
// // 2. componentWillMount     -> Any last minute prep before component mounts, called right before render
// // 3. Render                 -> Returns HTML to add to the DOM, the only required function
// // 4. componentDidMount      -> Fires after component mounts to the DOM, Good place to load in external data


// // We also have Updating Lifecycle Functions (these fire when the DOM is changed/updated, when we add or delete a todo)
// // 1. componentWillReceiveProps    -> Called before a component receives any new props, can compare the current and new props and change state
// // 2. shouldComponentUpdate        -> Basically if we dont want to update the component we return false and it wont fire the remaining 3 functions, otherwise return true
// // 3. componentWillUpdate          -> We can do last minute preps before the component is rendered
// // 4. render
// // 5. componentDidUpdate           -> Operate on the DOM or perform network requests, similar to componentDidMount


// // You can read more about component life-cycle on react official docs












//-------------------------------------------------------Routing-----------------------------------------------------------------//

// ES2015 syntax to import components from 'react-router'
// import { Router, Route, browserHistory } from 'react-router'; //Note there have been changes for v4+ and hence i am using the following line, 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; //You need this for react-router v4 +
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

// Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');


require('./css/index.css');


// SETUP ROUTING
var App = CreateReactClass({
  render: function(){
    return(
      <Router>
        <Switch>   
          <Route exact={true} path={'/'} component={TodoComponent}></Route>
          <Route path={'/about'} component={About}></Route>
        </Switch>
      </Router>
    );
  }
});


var TodoComponent = CreateReactClass({
  
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat breakfast', 'take a nap'],
      age: 30
    }
  },//getInitialState

  render: function(){
    var mytodos = this.state.todos.map(function(item, index){
      return(
        <TodoItem myitem={item} key={index} myDelete={this.onDelete} />
      );
    }.bind(this));

    return(
      <div id="todo-list">
        <p>The business people have the most leisure</p>
        <p><a href="/about">About Page</a></p>
        <Link to={'/about'}>Different link to about page</Link>
        <p>{this.state.age}</p>
        <ul>
          {mytodos}
        </ul>
        <AddItem myAdd={this.onAdd} />
      </div>
    );
  },// render

  // Custom functions
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val; // this will return all items that are not equal to the item we want to delete
    });
    this.setState({ //this is how we change the state of the component
      todos: updatedTodos
    });
  },

  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  },


  // lifecycle functions
  componentWillMount: function(){
    console.log('componentWillMount');
  },

  componentDidMount: function(){
    console.log('componentDidMount');
    //any grabbing of external data
  },

  componentWillUpdate: function(){
    console.log('componentWillUpdate');
  }

});// TodoComponent


// ReactDOM.render(<TodoComponent mssg="hav" />, document.getElementById('todo-wrapper'));
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));


// So far our application consists only of this 1 view or 1 page, but we might have several different pages we want to show to the user
// To control different views/pages, we can use routing on the front end in React, 
// we can do this on the server as well, but alot of time we would like to do this on the front end
// React router is not automatically installed with react, we need to install that separately for us to use it.  
// npm install react-router --save
// Once installed react router gives us 2 components to work with
// 1. The router component which keeps the url in sync with the UI of the application
// 2. The route component which is going to match our routes to the app component
// This time we will use ES2015 to import react router
// The way i like to setup routes is by creating new react class (called App in this case)
// And the JSX that we are going to return is going to be our routes (see return above)
// Inside the Route tags we can attach attributes, to say how we want them to work
// For example how we want each Route to render a different component
// So if I wanted a Route which matches the root path ('/') and we also need to put the component we want to render, -> <Route path={'/'} component={TodoComponent}></Route>
// Next we need to go to package.json and basically add to our build a history-api-fallback flag
// "build": "webpack -d && webpack-dev-server --content-base src/ --inline --hot --port 1234 --history-api-fallback"
// So what that is going to do is, when we type a route in the url, it will look in the server for that route,
// and if that route cant be found, then its going to fall back to the index page, where our App component is being rendered
// ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
// When we hit a 404, for example /about which does not exist yet, 
// it will return this index file to us and then React is going to pick up that route and render the About component in the todo-wrapper id
// There's 1 more thing we need to import and that's the browserHistory, (note this is only for react-router v3, for v4 check syntax above)
// which is used to keep track of the forward and back buttons in your browser (note: react-router v3, for v4 check syntaxt above)
// So now when we go to '/', it will render the TodoComponent and when you go to '/about', it will render the About component only aka the "about" page.

// Now we can go to the about page by creating an a tag with an href='/about'
// but in this example we will use a different way/trick which is useful if you are using hashHistory instead of browserHistory
// but sometimes you might want to just use this way instead of anchor tags 

// The basic difference is that the hashHistory uses URLs like: 
// http://myurl.com/#page/another_page/another_page

// With BrowserHistory you get normal urls (no hash): 
// http://myurl.com/page/another_page/another_page

// In order to use this different way trick,
// We are now going to require the Link module as well
// This will allow us to link to different views or different components if you like within the application
// Check syntax for Link above and in the about.js file











// // Syntax for importing react modules

// // using ES6 modules
// import { BrowserRouter, Route, Link } from 'react-router-dom'

// // using CommonJS modules
// var BrowserRouter = require('react-router-dom').BrowserRouter
// var Route = require('react-router-dom').Route
// var Link = require('react-router-dom').Link



