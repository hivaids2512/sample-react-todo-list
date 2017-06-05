import React, { Component } from 'react';
import Emitter from 'helpers/emitter';

export default class AddCommentView extends Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        formData.date = new Date();
        Emitter.emit('commentAdded', formData);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" ref="name" name="name" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content:</label>
                        <textarea name="content" ref="content" className="form-control" rows="5" id="content"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

}