import React, { Component } from 'react';

class CommentService extends Component {

    constructor() {
        super();
    }

    getCommentList(todo) {
        let commentList = [];
        let todoList = JSON.parse(localStorage.getItem('todoList'));
        todoList.forEach(function (todoItem, index) {
            if (todo.id === todoItem.id) {
                commentList = todoItem.comments;
            }
        });
        return commentList;
    }

    addComment(todo, comment) {
        let todoList = JSON.parse(localStorage.getItem('todoList'));
        todoList.forEach(function (todoItem, index) {
            if (todo.id === todoItem.id) {
                todoItem.comments.push(comment);
            }
        });
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

}

const instance = new CommentService();

export default instance;