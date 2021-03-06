import openModal from "../utils/openModal";
import closeModals from "../utils/closeModals";

const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector, closeOnOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = modal.querySelector(closeSelector),
              allModals = document.querySelectorAll('[data-modal]');

        trigger.forEach( el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                closeModals(undefined, allModals);
                openModal(modal);
            })
        });

        close.addEventListener('click', () => {
            closeModals(modal, allModals);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeOnOverlay) {
                closeModals(modal, allModals);
            }
        });
    }

    function showModalByTime(modalSelector, time) {
        setTimeout( () => {
            const allModals = document.querySelectorAll('[data-modal]');
            const shownModals = [];

            allModals.forEach( modal => {
                shownModals.push(modal.style.display)
            })

            if ( !shownModals.some(item => item === 'block') ) {
                openModal(document.querySelector(modalSelector))
            }
        }, time)
    }

    

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup', 60000);
};

export default modals;