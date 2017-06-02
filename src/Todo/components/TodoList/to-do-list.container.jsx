import React, { Component } from 'react';
import TodoListPresentation from './to-do-list.presentation';

let todoList = [
    {   
        id: 1,
        name: "quy",
        content: "node 1"
    },
    {
        id: 2,
        name: "quy",
        content: "node 1"
    },
    {
        id: 3,
        name: "quy",
        content: "node 1"
    },
    {
        id: 4,
        name: "quy",
        content: "node 1"
    },
    {
        id: 5,
        name: "quy",
        content: "node 1"
    }
];

export default class TodoListContainer extends Component {

    constructor() {
        super();
        this.loadTodoList();
    }

    loadTodoList = () => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
        todoList = JSON.parse(localStorage.getItem('todoList'));
    }

    render() {
        return (
            <TodoListPresentation todoList={todoList} />
        );
    }

}