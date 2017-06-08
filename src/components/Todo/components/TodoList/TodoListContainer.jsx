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
        this.loadTodoList({mode: 'add'});
        subscription = Emitter.addListener('updateList', (data) => {
            this.loadTodoList(data);
        });
    }

    componentWillUnmount() {
        subscription.remove();
    }

    loadTodoList = (data) => {
        console.log(data);
        let context = this;
        setTimeout(function () {
            todoList = TodoService.getTodoList();
            context.setState({ todoList: todoList });
            if (data.mode === 'add') {
                if (todoList && todoList.length > 0) {
                    context.switchTodo(todoList[todoList.length - 1]);
                }
            } else {
                todoList.forEach(function(element, index) {
                    if(data.todo.id === element.id) {
                        context.switchTodo(element);
                    }
                });
                
            }

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