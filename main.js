const BUTTON_LIGHT = document.querySelector('.button');
const BULB_LIGHT = document.querySelector('.bulb-light');

function onBulb() {
    if (BULB_LIGHT.style.boxShadow === 'none') {
        BULB_LIGHT.style = 'box-shadow: 0 0 70px 80px white';
        BULB_LIGHT.style.background = 'white';
        BUTTON_LIGHT.style =  'box-shadow: 0 0 20px 12px rgba(80, 135, 230, 0.9)';
    } else {
        BULB_LIGHT.style = 'box-shadow: none';
        BUTTON_LIGHT.style = 'box-shadow: none';
    }
    if (BUTTON_LIGHT.style.boxShadow === 'none'){
        BUTTON_LIGHT.style = 'box-shadow: block';
    }
}

BUTTON_LIGHT.addEventListener('click', onBulb);