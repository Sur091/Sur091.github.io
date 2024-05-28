const myPopOutComponent = {
    init() { 
        let popOut = true
        
        // The starting and ending position
        const positionAttribute = this.el.getAttribute('position')
        const beginningPosition = `${positionAttribute.x} ${positionAttribute.y} ${positionAttribute.z} `
        const destinationPosition = '0 0 1.5'

        // Add the cantap class to make it register the 'click' event
        this.el.classList.add('cantap');

        // Adding animations
        this.el.setAttribute('animation__popOut', {
            property: 'position',
            to: destinationPosition,
            dur: '2000',
            startEvents: 'startAnimationPopOut',
            easing: 'easeInOutQuad',
        });
        this.el.setAttribute('animation__goBack', {
            property: 'position',
            to: beginningPosition,
            dur: '2000',
            startEvents: 'startAnimationGoBack',
            easing: 'easeInOutQuad',
        });

        // Go back or forward animation
        const goBack = (event) => {
            if (popOut) {
                this.el.emit('startAnimationPopOut', null, false);
            } else {
                this.el.emit('startAnimationGoBack', null, false);
            }
            popOut = !popOut
        }

        this.el.addEventListener('click', goBack);
    },
}

AFRAME.registerComponent('pop-out', myPopOutComponent)
