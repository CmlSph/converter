const celciusInput = document.querySelector('#celcius > input');/*get me the input inside of the celcius div*/
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num*100)/100;
}

//3.147236502634 We have such a number.
//314.7236502634 We multiply it by 100
//314.00 Then we do a Math.round()
//3.14 Then we divide it by 100


function celciusToFahrenheitAndKelvin(){/*click veya input:Birisi her tikladiginda hello ve hi yazacak konsola*/
    const cTemp = parseFloat(celciusInput.value);/*parseFloat:converts the string into a floating number*/
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);/*Konsola yazdirmak yerine ekranda ilgili yere yazdiriyoruz*/ 
    kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
     const fTemp = parseFloat(fahrenheitInput.value);
     const cTemp = (fTemp-32) * (5/9);
     const kTemp = (fTemp+459.67) * 5/9;
     celciusInput.value = roundNum(cTemp);
     kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndFahrenheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp-273.15
    const fTemp = 9/5 * (kTemp - 273) + 32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);
}
//We put this section int a function!
// celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
// fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
// kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);

function main() {
    celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
    kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);  
}

main(); //Don't forget to put this, otherwise it won't work!