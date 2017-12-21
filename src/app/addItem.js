var React = require('react');
var CreateReactClass = require('create-react-class');

require('./css/addItem.css');


// Create TodoItem component
var AddItem = CreateReactClass({
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Hit me" />
            </form>
        );
    },

    //Custom functions
    handleSubmit: function(e){
        e.preventDefault();
        this.props.myAdd(this.refs.newItem.value);
    }
});// TodoItem component


module.exports = AddItem;