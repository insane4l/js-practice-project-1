const closeModals = (modal, windows) => {
    if (windows) {
        windows.forEach( item => {
            item.style.display = 'none';
        })
    }

    if (modal) {
        modal.style.display = 'none';
    }
    document.body.style.overflow = '';
};

export default closeModals;