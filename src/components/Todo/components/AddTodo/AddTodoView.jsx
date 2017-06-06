import React, { Component } from 'react';
import Modal from 'react-modal';
import Emitter from 'helpers/emitter';
import { CustomStyles } from './Const.jsx'
import randomstring from 'randomstring';

export default class AddTodoView extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    onSubmit(event) {
        event.preventDefault();
        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        formData.date = new Date();
        formData.comments = [];
        formData.id = randomstring.generate(7);
        formData.status = false;
        Emitter.emit('todoAdded', formData);
        this.closeModal();
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary btn-sm" onClick={this.openModal}>Add new</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Modal"
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={CustomStyles} >
                    <h3>New Todo</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" ref="name" name="name" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content:</label>
                            <textarea name="content" ref="content" value={this.state.email} className="form-control" rows="5" id="content"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <button className="btn btn-danger pull-right" onClick={this.closeModal}>close</button>
                </Modal>
            </div>
        );
    }

}
