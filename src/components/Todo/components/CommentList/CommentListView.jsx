import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import CommentItemContainer from './CommentItem/CommentItemContainer';

let subscription = null;

export default class CommentListView extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="well">
                <div className="text-right">
                    <a className="btn btn-success">Leave a Comment</a>
                </div>

                <hr></hr>
                {
                    this.props.commentList.map(function(comment, index){
                        return  <CommentItemContainer key={index} />
                    })
                }
            </div>
        );
    }
}