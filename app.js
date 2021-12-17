const board = document.querySelector('#board');
const colors = ['#F08080','#FA8072', '#E9967A', '#FFA07A',	'#DC143C', '#FF0000',	'#B22222', '#8B0000', '#FFC0CB','#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#DB7093']


const SQARES_NUMBER = 3000;

for (let i = 0; i < SQARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square'); 

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor);
    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getrandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 16px ${color}`
}



function removeColor(event){
    const element = event.target
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`

}

function getrandomColor(){
   return colors[Math.floor( Math.random()* colors.length )];
}

console.log( Math.random() * colors.length)