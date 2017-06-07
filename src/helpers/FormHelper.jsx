import React, { Component } from 'react';

class FormHelper extends Component {

    constructor() {
        super();
    }

    getFormData(refs) {
        for (const field in refs) {
            formData[field] = refs[field].value;
        }
    }

}

const instance = new FormHelper();

export default instance;