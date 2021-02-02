let a = 0;
let b = 0;
let total = 0;
let operator = '';
let operatorPressed = false;
let equalPressed = false;


let allButtons = document.querySelectorAll('.button');
let displayValue = document.querySelector('.text-area');
let operatorButtons = document.querySelectorAll('.operator');
let digitButtons = document.querySelectorAll('.digit');


window.addEventListener('keydown',function (e) {
    allButtons.forEach(function (button) {
        if (e.keyCode != button.id) {
            return;
        }

        button.click();
        button.classList.add('keydown');
        setTimeout(function () {
            button.classList.remove('keydown');
        }, 100)
    });
});

digitButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (operatorPressed == false ) {
            if (equalsPressed) {
                total = 0;
                a = 0;
                b = 0;
                displayValue.textContent = ''
                equalsPressed = false;
            }
        }

        if (displayValue.textContent == '0') {
            displayValue.textContent = '';
            operatorPressed = false;
        } else {
            if (operatorPressed) {
                displayValue.textContent = '';
                operatorPressed = false;
            }
        }

        if (displayValue.textContent.length > 14) {
            return;
        } else {
            displayValue.textContent += button.textContent
            if (a == 0 ) {
                return;
            }

            b = displayValue.textContent
        }
    });
});

operatorButtons.forEach(function (button) {
   button.addEventListener('click',function () {
       if (a != 0 && b != 0 ) {
           total = operate(operator, a, b);
           displayValue.textContent = total
       }

       operator = button.textContent
       a = displayValue.textContent

       operatorPressed = true;
   }) ;
});

document.querySelector('.equals')