import React, { Component } from 'react';
import AddTodoView from './AddTodoView';
import Emitter from 'helpers/emitter';
import TodoService from 'services/TodoService';

let subscription = null;

export default class AddTodoContainer extends Component {

    constructor() {
        super();
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(newTodo) {
        TodoService.addTodo(newTodo);
        Emitter.emit('updateList', 'data');
    }

    render() {
        return (
            <AddTodoView addTodo = {this.addTodo} />
        );
    }

}