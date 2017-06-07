import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import CommentListView from './CommentListView';
import CommentService from 'services/CommentService';

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
        let commentList = CommentService.getCommentList(this.props.todo);
        this.setState({ commentList: commentList });
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