import React, { Component } from 'react';
import TodoListContainer from './components/TodoList/to-do-list.container';
import TodoDetailContainer from './components/TotoDetail/to-do-detail.container';

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