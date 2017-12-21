var React = require('react');
var CreateReactClass = require('create-react-class');

require('./css/todoItem.css');


// Create TodoItem component
var TodoItem = CreateReactClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.myitem}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  },

  handleDelete: function(){
    this.props.myDelete(this.props.myitem);
  }

});// TodoItem component


module.exports = TodoItem;