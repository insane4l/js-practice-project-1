import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import setComplexFormValues from './modules/setComplexFormValues';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const valuesOfComplexForm = {};

    setComplexFormValues(valuesOfComplexForm);
    modals();
    tabs();
    forms(valuesOfComplexForm);
});