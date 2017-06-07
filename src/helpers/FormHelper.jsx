import React, { Component } from 'react';

class FormHelper extends Component {

    constructor() {
        super();
    }

    getFormData(refs) {
        let formData = {};
        for (const field in refs) {
            formData[field] = refs[field].value;
        }
        return formData;
    }

}

const instance = new FormHelper();

export default instance;