document.addEventListener('DOMContentLoaded', function () {

    const numbersForCaptcha = document.getElementById('captcha-random');

    const resultAddition    = document.getElementById('result-value');

    const secretResult      = document.getElementById('secret-result');

    const contactForm       = document.getElementById('contact-form');

    const wrongNumber       = document.querySelector('.paragraph-wrong-number');

    const goodNumber        = document.querySelector('.paragraph-good-number')

    
    function generateCaptcha() {
        let randomNumber = Math.floor(Math.random() * 10);
        let randomNumberTwo = Math.floor(Math.random() * 10);
        numbersForCaptcha.innerText = randomNumber + ' + ' + randomNumberTwo + ' = ';

        secretResult.value = randomNumber + randomNumberTwo;
    }
    
    if(numbersForCaptcha) { 
    generateCaptcha();
    }

    if(contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
    
            if (secretResult.value === resultAddition.value) {
    
                goodNumber.classList.add('good-number-in-captcha');
                wrongNumber.classList.remove('wrong-number-in-captcha');
    
            } else {
    
                wrongNumber.classList.add('wrong-number-in-captcha');
                goodNumber.classList.remove('good-number-in-captcha');
    
            }
    
        });
    }

    const burgerMenuBtn = document.querySelector("#burger-menu-toggler")

        burgerMenuBtn.addEventListener('click', function () {
            document.body.classList.toggle('hamburger-active');
        });

});