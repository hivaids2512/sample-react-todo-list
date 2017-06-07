import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import CommentListContainer from './components/CommentList/CommentListContainer.jsx';
import TodoStatusContainer from './components/TodoStatus/TodoStatusContainer.jsx';

// remove this subscription afterwards when there is no use for it
let subscription = null;
let currentTodo = {};

export default class TodoDetailPresentation extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="col-md-9">
                <div className="thumbnail">
                    <div className="caption-full">
                        <div className="row">
                            <div className="col-md-6">
                                <h3><a href="#">{this.props.todo.name} </a></h3>
                            </div>
                            <div className="col-md-6">
                                <TodoStatusContainer todo={this.props.todo} />
                            </div>
                        </div>
                        <div className="row padding-left-9">
                            <h5><span>added: {this.props.todo.date}</span></h5>
                        </div>
                        <div className="row padding-left-9">
                            <p>{this.props.todo.content}</p>
                        </div>

                    </div>
                </div>
                <CommentListContainer todo={this.props.todo} commentList={this.props.todo.comments} />
            </div>
        );
    }

}