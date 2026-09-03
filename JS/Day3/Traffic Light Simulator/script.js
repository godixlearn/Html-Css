

const redLight = document.getElementById('redLight');
const yellowLight = document.getElementById('yellowLight');
const greenLight = document.getElementById('greenLight');


const redButton = document.getElementById('redButton');
const yellowButton = document.getElementById('yellowButton');
const greenButton = document.getElementById('greenButton');

const message = document.getElementById('message');

function turnOnRedLight() {

    redLight.style.backgroundColor = 'red';
    yellowLight.style.backgroundColor = 'gray';
    greenLight.style.backgroundColor = 'gray';

    message.textContent = "Stop! The light is red.";
}

redButton.addEventListener('click', turnOnRedLight);
