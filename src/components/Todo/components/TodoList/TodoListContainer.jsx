import React, { Component } from 'react';
import TodoListView from './TodoListView';
import Emitter from 'helpers/emitter';
import TodoService from 'services/TodoService';

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
                todoList = TodoService.getTodoList();
            } else {
                todoList = [];
            }
            context.setState({ todoList: todoList });
        }, 1000);
    }

    render() {
        return (
            <TodoListView todoList={this.state.todoList} />
        );
    }

}