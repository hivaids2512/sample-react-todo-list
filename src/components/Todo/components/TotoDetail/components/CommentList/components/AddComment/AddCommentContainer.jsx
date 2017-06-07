import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import AddCommentView from './AddCommentView';
import randomstring from 'randomstring';
import CommentService from 'services/CommentService';

let subscription = null;

export default class AddCommentContainer extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        let context = this;   
        subscription = Emitter.addListener('commentAdded', (data) => {
            CommentService.addComment(context.props.todo, data);
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