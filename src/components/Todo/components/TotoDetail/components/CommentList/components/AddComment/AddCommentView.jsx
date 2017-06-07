import React, { Component } from 'react';
import Emitter from 'helpers/emitter';
import FormHelper from 'helper/FormHelper';

export default class AddCommentView extends Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const formData = {};
        formData = FormHelper.getFormData(this.refs);
        formData.date = new Date();
        this.props.addComment(this.props.todo, formData);
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