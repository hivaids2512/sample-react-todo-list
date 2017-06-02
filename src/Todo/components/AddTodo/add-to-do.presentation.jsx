import React, { Component } from 'react';
import Modal from 'react-modal';
import Emitter from 'helpers/emitter';

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
        position: 'absolute',
        top: '60px',
        left: '400px',
        right: '400px',
        bottom: '160px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'

    }
}

export default class AddTodoPresentation extends Component {

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
                    style={customStyles} >
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
