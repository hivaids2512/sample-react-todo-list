import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import CommentItemView from './CommentItemView';

export default class CommentItemContainer extends Component {

    constructor () {
        super();
    }

    render(){
        return (
            <CommentItemView />
        );
    }

}