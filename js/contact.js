document.addEventListener('DOMContentLoaded', function () {

    const numbersForCaptcha = document.getElementById('captcha-random');

    const resultAddition    = document.getElementById('result-value');

    const secretResult      = document.getElementById('secret-result');

    const contactForm       = document.getElementById('contact-form');

    const wrongNumber       = document.querySelector('.paragraph-wrong-number');

    function generateCaptcha() {
        let randomNumber = Math.floor(Math.random() * 10);
        let randomNumberTwo = Math.floor(Math.random() * 10);
        numbersForCaptcha.innerText = randomNumber + ' + ' + randomNumberTwo + ' = ';

        secretResult.value = randomNumber + randomNumberTwo; 
    }
    generateCaptcha();

    contactForm.addEventListener('submit', function (e){
        e.preventDefault();
        
        if ( secretResult.value === resultAddition.value ) {
            this.submit();   
        } else { 
        
            wrongNumber.classList.add('wrong-number-in-captcha');

        }

    });





});