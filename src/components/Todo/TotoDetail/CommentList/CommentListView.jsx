import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import CommentItemContainer from './CommentItem/CommentItemContainer';
import AddCommentContainer from './AddComment/AddCommentContainer';

let subscription = null;

export default class CommentListView extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="well">
                <AddCommentContainer todo = {this.props.todo}/>
                <hr></hr>
                {
                    this.props.commentList.map(function(comment, index){
                        return  <CommentItemContainer key={index} comment={comment}/>
                    })
                }
            </div>
        );
    }
}