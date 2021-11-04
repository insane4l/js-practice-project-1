const tabs = () => {

    function bindTabs(headerSelector, tabSelector, contentSelector, activeClass, cssDisplay = 'block') {
        const header = document.querySelector(headerSelector),
              tabs = header.querySelectorAll(tabSelector),
              content = document.querySelectorAll(contentSelector);
        
        function hideAllTabContent() {
            tabs.forEach( (tab, i) => {
                tab.classList.remove(activeClass);
                content[i].style.display = 'none';
            })
        };

        function showTabContent(i = 0) {
            tabs[i].classList.add(activeClass);
            content[i].style.display = cssDisplay;
        };

        function checkTarget(target) {
            const className = tabSelector.replace(/\./, '');
            return target && ( target.classList.contains(className) || target.parentNode.classList.contains(className) );
        };

        header.addEventListener('click', (e) => {
            const target = e.target;
            const isRightTarget = checkTarget(target);

            if (!isRightTarget) return
            
            tabs.forEach( (el, i) => {
                if (el === target || el === target.parentNode) {
                    hideAllTabContent();
                    showTabContent(i);
                }
            });
            
        });

        hideAllTabContent();
        showTabContent();
    }

    
    bindTabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    bindTabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    bindTabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
}

export default tabs;