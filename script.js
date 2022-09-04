window.addEventListener('load', function() { //spy fungsinya bekerja pas HTML has fully loaded
    let block = document.getElementById('block');
    let scaleCoef = 1;
    let rotateDeg = 0;

    //Pos Y manipulation
    let posY = document.getElementById('pos-y');
    posY.addEventListener('input', function() {
        block.style.top = posY.value + 'px';
    })

    //Pos X manipulation
    let posX = document.getElementById('pos-x');
    posX.addEventListener('input', function() {
        block.style.left = posX.value + 'px';
    })

    //size manipulation
    let size = document.getElementById('size');
    size.addEventListener('input', function() {
        scaleCoef = size.value;
        block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
    })

    //opacity manipulation
    let opacity = document.getElementById('opacity');
    opacity.addEventListener('input', function() {
        block.style.opacity = opacity.value;
    })

    //shape manipulation
    let selector = document.getElementById('shape-select');
    let okButton = document.getElementById('ok-shape');
    okButton.addEventListener('click', function() {
        let option = selector.value;
        if(option === '1') { //square
            block.style.borderRadius = '0';
            rotateDeg = 0;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
        } else if(option === '2') { //circle
            block.style.borderRadius = '50%';
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
        } else if(option === '3') { //rhombus
            block.style.borderRadius = '0';
            rotateDeg = 45;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
        }
    })

    //hex color manipulation
    let hex = document.getElementById('hex');
    hex.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            block.style.backgroundColor = `#${hex.value}`;
        }
    })

    //rgba color manipulation
    let rgbaR = document.getElementById('rgba-r');
    let rgbaG = document.getElementById('rgba-g');
    let rgbaB = document.getElementById('rgba-b');
    let rgbaA = document.getElementById('rgba-a');
    let rgbaInputs = document.querySelectorAll('.rgba-container input');

    rgbaInputs.forEach(function(element) {
        element.addEventListener('input', function() {
            block.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
        })
    })
})