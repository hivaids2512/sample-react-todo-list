import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import AddTodoContainer from 'components/Todo/components/AddTodo/AddTodoContainer';

export default class TodoListPresentation extends Component {

    constructor() {
        super();
    }

    render() {
        let context = this;
        return (
            <div className="col-md-3">
                <div className="row">
                    <div className="col-md-6">
                        <p className="lead">Your Todos </p>
                    </div>
                    <div className="col-md-6">
                        <span className="pull-right"> <AddTodoContainer /></span>
                    </div>
                </div>
                <div className="list-group">
                    {
                        this.props.todoList.map(function (todo, i) {
                            return <a href="#" key={i} onClick={() => context.props.switchTodo({ todo })} className="list-group-item"> {i + 1}. {todo.name} </a>;
                        })
                    }
                </div>
            </div>
        );
    }

}