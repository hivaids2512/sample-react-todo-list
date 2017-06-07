import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import AddCommentView from './AddCommentView';
import randomstring from 'randomstring';
import CommentService from 'services/CommentService';

let subscription = null;

export default class AddCommentContainer extends Component {

    constructor() {
        super();
        this.addComment = this.addComment.bind(this);
    }

    addComment(todo, comment) {
        CommentService.addComment(todo, comment);
        Emitter.emit('updateCommentList', 'data');
    }
    
    render() {
        return (
            <AddCommentView addComment={this.addComment} todo={this.props.todo} />
        );
    }

}