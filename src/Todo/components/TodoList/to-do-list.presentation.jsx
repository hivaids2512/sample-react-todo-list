import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import AddTodoContainer from 'Todo/components/AddTodo/add-to-do.container';

export default class TodoListPresentation extends Component {

    constructor() {
        super();
    }

    switchTodo = (todo) => {
        Emitter.emit('todoChanged', todo);
        // console.log(this.props.todoList[1]);
    }

    render() {
        let context = this;
        return (
            <div className="col-md-3">
                <p className="lead">Your Todos <span className="pull-right"> <AddTodoContainer /></span></p>
                <div className="list-group">
                    {this.props.todoList.map(function (todo, i) {
                        return <a href="#" key={i} onClick={context.switchTodo.bind(context, { todo })} className="list-group-item"> {i} {todo.name} </a>;
                    })}
                </div>
            </div>
        );
    }

}