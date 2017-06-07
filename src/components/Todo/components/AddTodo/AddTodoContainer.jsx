import React, { Component } from 'react';
import AddTodoView from './AddTodoView';
import Emitter from 'helpers/emitter';
import TodoService from 'services/TodoService';

let subscription = null;

export default class AddTodoContainer extends Component {

    constructor () {
        super();
    }

    componentWillMount() {
        subscription = Emitter.addListener('todoAdded', (data) => {
            TodoService.addTodo(data);
            Emitter.emit('updateList', 'data');
        });
    }

    componentWillUnmount() {
        subscription.remove()
    }

    render () {
        return (
            <AddTodoView />
        );
    }

}