import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import setComplexFormValues from './modules/setComplexFormValues';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const valuesOfComplexForm = {};
    const timerDeadline = '2022-05-05';  // "YYYY-MM-DDThh:mm:ss"

    setComplexFormValues(valuesOfComplexForm);
    modals();
    tabs();
    forms(valuesOfComplexForm);
    timer('#timer1', timerDeadline);

});