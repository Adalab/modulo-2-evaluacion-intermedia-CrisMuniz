'use strict';
// La usuaria empieza con 50 euros
// si la usuaria acierta el numero dobla lo apostado y si no acierta pierde lo apostado
// El juego se acaba cuando se llega a 0  o se llega a 200
// En el texto Vamos ajugar debemos cambiarlo por Has ganado el doble de lo apostado al ganar y Has perdido lo apostado al perder

const select = document.querySelector('.js_select');
const inputMoney = document.querySelector('.js_inputMoney');
const btnPlay = document.querySelector('.js_btnPlay');
const textPlay = document.querySelector('.js_textPlay');
const moneyPlay = document.querySelector('.js_moneyPlay');

// generar un numero al azar del 1-6.
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);

    };

console.log(getRandomNumber(6));

function handlerClickBtn() {
    const userOption = Number (select.value);
    const machineOption =getRandomNumber(6);
    console.log(userOption);
    console.log(machineOption);

    if (userOption === machineOption) {
        textPlay.innerHTML = "Has ganado el doble de lo apostado :)";
    }
    else {
        textPlay.innerHTML = "Has perdido lo apostado :(";
    }
}
btnPlay.addEventListener('click', handlerClickBtn);