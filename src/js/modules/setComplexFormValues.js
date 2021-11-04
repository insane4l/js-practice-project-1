import inputNumOnly from "../utils/inputNumOnly";

const setComplexFormValues = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img > img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('[name="checkbox-test"]');

    inputNumOnly('#width');
    inputNumOnly('#height');

    const bindActionToElems = (elem, event, prop) => {
        elem.forEach( (el, i) => {
            el.addEventListener(event, () => {
                switch(el.nodeName) {
                    case 'IMG':
                        state[prop] = i;
                        break;
                    case 'INPUT': 
                        if (el.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach( (box, indx) => {
                                box.checked = false;
                                if ( i === indx ) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = el.value
                        }
                        break;
                    case 'SELECT':
                        state[prop] = el.value;
                        break;
                };
            });
        });
    };

    bindActionToElems(windowForm, 'click', 'form');
    bindActionToElems(windowWidth, 'input', 'width');
    bindActionToElems(windowHeight, 'input', 'height');
    bindActionToElems(windowType, 'change', 'type');
    bindActionToElems(windowProfile, 'change', 'profile');
};


export default setComplexFormValues;