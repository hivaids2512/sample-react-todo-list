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
                        <h3><a href="#">{this.props.todo.name} </a></h3> <TodoStatusContainer todo={this.props.todo}/>
                        <h5><span>added: {this.props.todo.date}</span></h5>
                        <p>{this.props.todo.content}</p>
                    </div>
                </div>
                <CommentListContainer todo={this.props.todo} commentList={this.props.todo.comments} />
            </div>
        );
    }

}