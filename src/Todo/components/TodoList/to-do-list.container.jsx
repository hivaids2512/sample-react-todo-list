import React, { Component } from 'react';
import TodoListPresentation from './to-do-list.presentation';
import Emitter from 'helpers/emitter';

let a = [];
let todoList = [];

let subscription = null;

export default class TodoListContainer extends Component {

    constructor() {
        super();
        this.state = { todoList: [] };
        localStorage.setItem('todoList', JSON.stringify([]));
    }

    componentWillMount() {
        subscription = Emitter.addListener('updateList', (data) => {
            this.loadTodoList();
        });
    }

    componentDidMount() {
        this.loadTodoList();
    }

    componentWillUnmount() {
        subscription.remove()
    }

    loadTodoList = () => {
        let context = this;
        setTimeout(function () {
            if (localStorage.getItem('todoList')) {
                todoList = JSON.parse(localStorage.getItem('todoList'));
            } else {
                todoList = [];
            }
            context.setState({ todoList: todoList });
        }, 1000);
    }

    render() {
        return (
            <TodoListPresentation todoList={this.state.todoList} />
        );
    }

}