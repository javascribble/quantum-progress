import { Component, template } from '../../references/quantum.js';
import html from '../templates/progress.js';

export class Progress extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = ['indeterminate', 'floating'];
}

customElements.define('quantum-progress', Progress);
