import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import TodoStatusView from './TodoStatusView.jsx';

// remove this subscription afterwards when there is no use for it
let subscription = null;
let currentTodo = {};

export default class TodoStatusContainer extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <TodoStatusView todo={this.props.todo} />
        );
    }

}