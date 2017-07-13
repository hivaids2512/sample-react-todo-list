import React, { Component } from "react";
import Emitter from "helpers/emitter";
import AddTodoContainer from "../AddTodo/AddTodoContainer";
import TodoItem from "./TodoItem/TodoItemView";

export default class TodoListPresentation extends Component {
  constructor() {
    super();
  }

  switchTodo(todo) {
    Emitter.emit("todoChanged", todo);
  }

  render() {
    let context = this;
    return (
      <div className="col-md-3">
        <div className="row">
          <div className="col-md-6">
            <p className="lead">Your Todos </p>
          </div>
          <div className="col-md-6">
            <span className="pull-right"> <AddTodoContainer /></span>
          </div>
        </div>
        <div className="list-group">
          {this.props.todoList.map(function(todo, i) {
            <TodoItemView
              todo={todo}
              order={i}
              onSwitchTodo={context.switchTodo}
            />;
          })}
        </div>
      </div>
    );
  }
}
