import React, { Component } from 'react';
import Emitter from 'helpers/emitter';

// remove this subscription afterwards when there is no use for it
let Subscription = null;

export default class TodoList extends Component {

    constructor() {
        super();
    }

    // register all adding stuff here
    componentWillMount() {
        Subscription = Emitter.addListener('onSomeEvent', (data) => {
            console.log(data)
        });
    }

    // unregister all references here
    componentWillUnmount() {
        Subscription.remove()
    }

    render() {
        return (
            <div className="col-md-3">
                <p className="lead">Your Todos</p>
                <div className="list-group">
                    <a href="#" className="list-group-item active">Category 1</a>
                    <a href="#" className="list-group-item">Category 2</a>
                    <a href="#" className="list-group-item">Category 3</a>
                </div>
            </div>
        );
    }

}