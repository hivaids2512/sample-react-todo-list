import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import TodoDetailView from './TodoDetailView';

// remove this subscription afterwards when there is no use for it
let subscription = null;
let currentTodo = {};

export default class TodoDetailContainer extends Component {

    constructor() {
        super();
        this.state = { };
    }

    componentWillMount() {
        subscription = Emitter.addListener('todoChanged', (data) => {
            currentTodo = data.todo;
            this.setState(currentTodo);
        });
    }

    componentWillUnmount() {
        subscription.remove()
    }

    render() {
        return (
            <TodoDetailView todo={ this.state } />
        );
    }

}