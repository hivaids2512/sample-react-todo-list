import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import CommentListView from './CommentListView';

export default class CommentListContainer extends Component {

    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        return (
            <CommentListView commentList={this.props.commentList} />
        );
    }

}