import { Quantum, define } from '../../references/quantum.js';
import { progress } from '../templates/progress.js';

export class Progress extends Quantum {
    constructor() {
        super(progress);
    }
}

define(Progress);