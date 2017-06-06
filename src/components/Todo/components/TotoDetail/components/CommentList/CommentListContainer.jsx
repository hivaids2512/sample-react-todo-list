import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import CommentListView from './CommentListView';

let subscription = null;

export default class CommentListContainer extends Component {

    constructor() {
        super();
        this.state = {
            commentList: []
        }
    }

    componentWillMount() {
        this.loadComment();
        subscription = Emitter.addListener('updateCommentList', (data) => {
            this.loadComment();
        });
    }

    loadComment() {

        let context = this;
        let todoList = JSON.parse(localStorage.getItem('todoList'));
        todoList.forEach(function (todo) {
            if (todo.id === context.props.todo.id) {
                context.setState({ commentList: todo.comments });
            }
        });
    }

    componentWillUnmount() {
        subscription.remove()
    }

    render() {
        return (
            <CommentListView todo={ this.props.todo } commentList={this.state.commentList} />
        );
    }

}