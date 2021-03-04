export class Progress extends Quantum {
    constructor() {
        super();
    }

    static get observedAttributes() { return ['indeterminate', 'floating']; }
}