import React, { Component } from 'react';
import AddTodoPresentation from './add-to-do.presentation';
import Emitter from 'helpers/emitter';

let subscription = null;

export default class AddTodoContainer extends Component {

    constructor () {
        super();
    }

    componentWillMount() {
        subscription = Emitter.addListener('todoAdded', (data) => {
            let todoList = JSON.parse(localStorage.getItem('todoList'));
            todoList.push(data);
            localStorage.setItem('todoList', JSON.stringify(todoList));
            Emitter.emit('updateList', 'data');
        });
    }

    componentWillUnmount() {
        subscription.remove()
    }

    render () {
        return (
            <AddTodoPresentation />
        );
    }

}