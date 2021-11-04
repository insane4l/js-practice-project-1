const inputNumOnly = (inputsSelector) => {
    const inputs = document.querySelectorAll(inputsSelector);

    inputs.forEach( el => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/\D/, '');
        });
    });
};

export default inputNumOnly;