import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoDetail from './components/TotoDetail';

export default class Todo extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
                <TodoList />
                <TodoDetail />
            </div>
        );
    }

}