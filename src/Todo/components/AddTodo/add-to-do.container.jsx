import React, { Component } from 'react';
import AddTodoPresentation from './add-to-do.presentation';

export default class AddTodoContainer extends Component {

    constructor () {
        super();
    }

    render () {
        return (
            <AddTodoPresentation />
        );
    }

}