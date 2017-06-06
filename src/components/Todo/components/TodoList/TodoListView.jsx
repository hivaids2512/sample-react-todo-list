import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import AddTodoContainer from 'components/Todo/components/AddTodo/AddTodoContainer';

export default class TodoListPresentation extends Component {

    constructor() {
        super();
        this.switchTodo = this.switchTodo.bind(this);
    }

    switchTodo(todo) {
        Emitter.emit('todoChanged', todo);
    }

    render() {
        let context = this;
        return (
            <div className="col-md-3">
                <p className="lead">Your Todos <span className="pull-right"> <AddTodoContainer /></span></p>
                <div className="list-group">
                    {
                        this.props.todoList.map(function (todo, i) {
                            return <a href="#" key={i} onClick={() => context.switchTodo({todo})} className="list-group-item"> {i + 1}. {todo.name} </a>;
                        })
                    }
                </div>
            </div>
        );
    }

}