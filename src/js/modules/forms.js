const forms = () => {
    const allForms = document.querySelectorAll('form'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach( el => {
        el.addEventListener('input', () => {
            el.value = el.value.replace(/\D/, '');
        });
    });

    const message = {
        lodaing: 'Loading..',
        success: 'Спасибо! Мы свяжемся с вами в ближайшее время',
        failure: 'Произошла ошибка. Пожалуйста перезагрузите страницу и попробуйте заново'
    };

    const postData = async (url, form, data) => {
        debugger;
        form.querySelector('.status').textContent = message.loading;
        
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });
        
        return await res.text();
    };

    allForms.forEach( form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

            const formData = new FormData(form);

            postData('assets/server.php', form, formData)
                .then( () => statusMessage.textContent = message.success )
                .catch( () => statusMessage.textContent = message.failure)
                .finally( () => {
                    form.querySelectorAll('input').forEach( el => {
                        el.value = '';
                    })
                    setTimeout( () => {
                        statusMessage.remove();
                    }, 5000)
                });
        });
    });
};

export default forms;