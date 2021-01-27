import html from '../templates/progress.js';

const { Component, template, define } = quantum;

export class Progress extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static get observedAttributes() { return ['indeterminate', 'floating']; }
}

define('quantum-progress', Progress);