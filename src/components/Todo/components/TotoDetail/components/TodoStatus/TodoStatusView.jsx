import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import TodoService from 'services/TodoService';

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
        TodoService.updateStatus(todo);
        Emitter.emit('updateList', 'data');
    }

    render() {
        return (
            <div className="pull-right">
                {this.isCompleted(this.props.todo)} <a onClick={this.changeStatus(this.props.todo)} href="#"> change status</a>
            </div>
        );
    }

}