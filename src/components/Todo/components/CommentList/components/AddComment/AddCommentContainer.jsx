import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import AddCommentView from './AddCommentView';
import randomstring from 'randomstring';
let subscription = null;

export default class AddCommentContainer extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        let context = this;   
        subscription = Emitter.addListener('commentAdded', (data) => {
            let todoList = JSON.parse(localStorage.getItem('todoList'));
            todoList.forEach(function (todo) {
                if (todo.id === context.props.todo.id) {
                    todo.comments.push(data);
                }
            });
            localStorage.setItem('todoList', JSON.stringify(todoList));
            Emitter.emit('updateCommentList', 'data');
        });
    }

    componentWillUnmount() {
        subscription.remove()
    }

    render() {
        return (
            <AddCommentView todo={this.props.todo} />
        );
    }

}