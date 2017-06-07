import React, { Component } from 'react';
import TodoListView from './TodoListView';
import Emitter from 'helpers/emitter';
import TodoService from 'services/TodoService';

let todoList = [];
let subscription = null;

export default class TodoListContainer extends Component {

    constructor() {
        super();
        this.state = { todoList: [] };
        this.switchTodo = this.switchTodo.bind(this);
        localStorage.setItem('todoList', JSON.stringify([]));
    }

    componentDidMount() {
        this.loadTodoList();
        subscription = Emitter.addListener('updateList', (data) => {
            this.loadTodoList();
        });
    }

    componentWillUnmount() {
        subscription.remove();
    }

    loadTodoList = () => {
        let context = this;
        setTimeout(function () {
            todoList = TodoService.getTodoList();
            context.setState({ todoList: todoList });
        }, 500);
    }

    switchTodo(todo) {
        Emitter.emit('todoChanged', todo);
    }

    render() {
        return (
            <TodoListView switchTodo={this.switchTodo} todoList={this.state.todoList} />
        );
    }

}