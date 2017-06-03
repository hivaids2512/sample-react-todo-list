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
                        <span className="glyphicon glyphicon-star"></span>
                        Anonymous
                            <span className="pull-right">10 days ago</span>
                        <p>This product was great in terms of quality. I would definitely buy another!</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}