import { Component, template, define } from '../import.js';
import html from '../templates/progress.js';

export class Progress extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static get observedAttributes() { return ['indeterminate', 'floating']; }
}

define('quantum-progress', Progress);