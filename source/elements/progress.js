import html from '../templates/progress.js';

export class Progress extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);

    static get observedAttributes() { return ['indeterminate', 'floating']; }
}

quantum.define('quantum-progress', Progress);
