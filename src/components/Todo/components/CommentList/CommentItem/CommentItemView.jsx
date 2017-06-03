import React, { Component } from 'react';
import Emitter from 'helpers/emitter';

let subscription = null;

export default class CommentItemView extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <span className="glyphicon glyphicon-comment"></span>
                         You:
                            <span className="pull-right">10 days ago</span>
                        <p>{ this.props.comment.content }</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}