import React, { Component } from 'react';

export default class TodoItemView extends Component {

    constructor(){     
        super();  
    }

    render() {
        return (
            <a href="#" onClick={() => this.props.switchTodo(this.props.todo)} className="list-group-item"> {this.props.order} . {this.props.todo.name} </a>
        );
    }

}