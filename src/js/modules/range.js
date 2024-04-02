// Подключение из node_modules
import * as noUiSlider from 'nouislider';

export function isRange() {


    const priceSlider = document.querySelector('.price-filter__slider');


    var input0 = document.getElementById('price-start');
    var input1 = document.getElementById('price-end');
    var inputs = [input0, input1];

    noUiSlider.create(priceSlider, {
        start: [4500, 38000],
        connect: true,
        // tooltips: [true, true],
        range: {
            'min': [0],
            'max': [50000]
        },
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            // suffix: ' $'
        })
    });

    const priceStart = document.getElementById('price-start');
    const priceEnd = document.getElementById('price-end');
    priceStart.addEventListener('change', setPriceValue);
    priceEnd.addEventListener('change', setPriceValue);


    function setPriceValue() {
        let priceStartValue;
        let priceEndValue;
        if (priceStart.value != '') {
            priceStartValue = priceStart.value
        }
        if (priceEnd.value != '') {
            priceEndValue = priceEnd.value
        }
        priceSlider.noUiSlider.set([priceStart.value, priceEnd.value]);
    }

    priceSlider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
    });

}

