import React, { Component } from 'react';
import TodoListContainer from './TodoList/TodoListContainer';
import TodoDetailContainer from './TotoDetail/TodoDetailContainer';

export default class Todo extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
                <TodoListContainer />
                <TodoDetailContainer />
            </div>
        );
    }

}