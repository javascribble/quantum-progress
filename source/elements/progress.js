import { Component } from '../../references/quantum.js';

export class Progress extends Component {
    constructor() {
        super();
    }

    static template = document.querySelector('#quantum-progress');

    static attributes = ['indeterminate', 'floating'];
}

customElement.define('quantum-progress', Progress);
