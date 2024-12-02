const button = document.getElementById('text__info');
const body = document.body.style;
const span = document.querySelector('span');
const color = ["#ffffff", "#532551", "#3924dd", "#ad3352"];

const hexElem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


function randomColor() {
    let hex = '#';
    Math.floor(Math.random() * hexElem.length)
    for (let i = 0; i < 6; i++) {
        hex = hex + hexElem[Math.floor(Math.random() * hexElem.length)]
    }
    console.log(hexElem[Math.floor(Math.random() * hexElem.length)])
    return hex;
}

document.addEventListener('click', function() {
    console.log('click')
    const Color = randomColor();
    console.log(randomColor)
    body.backgroundColor = Color;
    span.innerText = Color;
})