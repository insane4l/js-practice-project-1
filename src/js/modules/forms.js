import closeModals from "../utils/closeModals";
import inputNumOnly from "../utils/inputNumOnly";

const forms = (calcValues) => {
    const allForms = document.querySelectorAll('form');

    inputNumOnly('input[name="user_phone"]');

    const message = {
        loading: 'Отправка данных...',
        success: 'Спасибо! Мы свяжемся с вами в ближайшее время',
        failure: 'Произошла ошибка. Пожалуйста перезагрузите страницу и попробуйте заново'
    };

    const postData = async (url, form, data) => {
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
            if (form.getAttribute('data-calc') === "end") {
                for (let key in calcValues) {
                    formData.append(key, calcValues[key])
                }
            }

            postData('assets/server.php', form, formData)
                .then( () => statusMessage.textContent = message.success )
                .catch( () => statusMessage.textContent = message.failure)
                .finally( () => {
                    form.querySelectorAll('input').forEach( el => {
                        el.value = '';
                    });
                    setTimeout( () => {
                        statusMessage.remove();
                        if (form.getAttribute('data-calc') === "end") {
                            const allModals = document.querySelectorAll('[data-modal]');
                            closeModals(undefined, allModals);
                        }
                    }, 5000)
                });
        });
    });
};

export default forms;