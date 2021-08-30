document.addEventListener('DOMContentLoaded', function () {

    const firstNumber = document.getElementById('captcha-first-number');

    const secondNumber = document.getElementById('captcha-second-number');

    const resultAddition = document.getElementById('result-value').value;

  
        function numberOne() {
            let randomNumber = Math.floor(Math.random() * 10);
            firstNumber.innerText = randomNumber;
        };
        numberOne();
    
    
            function numberTwo() {
            let randomNumberTwo = Math.floor(Math.random() * 10);
            secondNumber.innerText = randomNumberTwo;
        };
        numberTwo();
    
        function addition() {
    
            if (( randomNumber + randomNumberTwo) === resultAddition ) 
            alert ("todo bien");
            else alert ("todo mal")
    
        };
        addition();
    




});