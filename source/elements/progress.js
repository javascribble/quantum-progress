import html from '../templates/progress.js';

export class Progress extends Quantum {
    constructor() {
        super();
    }

    static get observedAttributes() { return ['indeterminate', 'floating']; }
}

Progress.define('quantum-progress', html);