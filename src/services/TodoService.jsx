import React, { Component } from 'react';

class TodoService extends Component {

    constructor() {
        super();
        this.updateStatus = this.updateStatus.bind(this);
    }

    getTodoList() {
        if (localStorage.getItem('todoList')) {
            return JSON.parse(localStorage.getItem('todoList'));
        }
        return [];
    }

    addTodo(newTodo) {
        let todoList = JSON.parse(localStorage.getItem('todoList'));
        todoList.push(newTodo);
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    removeTodo(todo) {
        let todoList = JSON.parse(localStorage.getItem('todoList'));
        todoList.forEach(function (todoItem, index) {
            if (todoItem.id === todo.id) {
                todoList.splice(index, 1);
            }
        });
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    updateStatus(todo) {
        let todoList = JSON.parse(localStorage.getItem('todoList'));
        todoList.forEach(function (todoItem, index) {
            if (todoItem.id === todo.id) {
                if (todo.status) {
                    todoList[index].status = false;
                } else {
                    todoList[index].status = true;
                }
            }
        });
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

}

const instance = new TodoService();

export default instance;