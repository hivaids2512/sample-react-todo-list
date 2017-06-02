import React, { Component } from 'react';

export default class Footer extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <hr></hr>
                <footer>
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Copyright &copy; Your Website 2014</p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }

}