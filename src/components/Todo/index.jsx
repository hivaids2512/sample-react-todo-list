import React, { Component } from 'react';
import TodoListContainer from './components/TodoList/TodoListContainer';
import TodoDetailContainer from './components/TotoDetail/TodoDetailContainer';

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