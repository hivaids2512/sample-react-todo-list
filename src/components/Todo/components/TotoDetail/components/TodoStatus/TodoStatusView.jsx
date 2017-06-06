import React, { Component } from 'react';
import Emitter from 'helpers/emitter';

// remove this subscription afterwards when there is no use for it
let subscription = null;
let currentTodo = {};

export default class TodoStatusView extends Component {

    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);
    }

    isCompleted(todo) {
        if (todo && todo.status) {
            return <span className="label label-success">Archived</span>;
        }
        return <span className="label label-danger">Not Archive</span>
    }

    changeStatus(todo) {
        let context = this;
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
        Emitter.emit('updateList', 'data');
    }

    render() {
        return (
            <div>
                {this.isCompleted(this.props.todo)} <a onClick={this.changeStatus(this.props.todo)} href="#"> change status</a>
            </div>
        );
    }

}