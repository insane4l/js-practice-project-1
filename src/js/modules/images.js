import closeModals from "../utils/closeModals";
import openModal from "../utils/openModal";

const images = () => {
    const wrapper = document.querySelector('.works'),
          overlay = document.createElement('div'),
          bigImage = document.createElement('img');

    overlay.classList.add('popup');
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.display = 'none';

    wrapper.append(overlay);
    overlay.append(bigImage);

    wrapper.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if ( target && target.classList.contains('preview') ) {
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            openModal(overlay, 'flex');
        }

        if (target && target.matches('div.popup')) {
            closeModals(overlay);
        }
    });

};

export default images;