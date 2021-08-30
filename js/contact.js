document.addEventListener( 'DOMContentLoaded', function () {

    const firstNumber = document.getElementById('captcha-first-number');

    function numberOne() {
        let randomNumber = Math.floor(Math.random() * 10);
        firstNumber.innerText = randomNumber;
    };
    numberOne();

    const secondNumber = document.getElementById('captcha-second-number');

    function numberTwo() {
        let randomNumberTwo = Math.floor(Math.random() * 10);
        secondNumber.innerText = randomNumberTwo;
    };
    numberTwo();

} );