var numSquares = 6;
var colors = colorsSet(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = colors[randNum(colors.length)];
var pickedDispColor = document.querySelector('h1 span');
var displayMessage = document.querySelector('#message');
var resetBtn = document.querySelector('#reset');
var easyBtn = document.querySelector('#easy');
var heardBtn = document.querySelector('#heard');
var h1 = document.querySelector('h1')

// default state
function defaultState () {
    displayMessage.textContent = '';
    resetBtn.textContent = 'New Colors';
    heardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    pickedDispColor.textContent = pickedColor;
}
defaultState();
// buttons
resetBtn.addEventListener('click' ,function () {
    colors = colorsSet(numSquares);
    pickedColor = colors[randNum(colors.length)];
    pickedDispColor.textContent = pickedColor;
    setColors();
    displayMessage.textContent = '';
    resetBtn.textContent = 'New Colors';
});

easyBtn.addEventListener('click', function () {
    heardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    displayMessage.textContent = '';
    resetBtn.textContent = 'New Colors';
    numSquares = 3;
    colors = colorsSet(numSquares);
    pickedColor = colors[randNum(colors.length)];
    pickedDispColor.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
});

heardBtn.addEventListener('click', function () {
    heardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    displayMessage.textContent = '';
    resetBtn.textContent = 'New Colors';
    numSquares = 6;
    colors = colorsSet(numSquares);
    pickedColor = colors[randNum(colors.length)];
    pickedDispColor.textContent = pickedColor;
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = 'block';
    }
})
// squares
for (let i = 0; i < squares.length; i++) {
    setColors();
    // add event listeners to squares
    squares[i].addEventListener('click', function () {
        // grab color of the picked square
        var clickedColor = this.style.backgroundColor;
        // compare color to the picked one
        if (clickedColor === pickedColor) {
            displayMessage.textContent = 'Correct';
            resetBtn.textContent = 'Play Again?';
            winnerColor(clickedColor);
        } else {
            displayMessage.textContent = 'Try Again';
            this.style.backgroundColor = 'rgb(38, 38, 38)';
        }
    })
}
// sets square's colors
function setColors() {
    for (let i = 0; i < colors.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
}
// changes background color of squares and header
function winnerColor(color) {
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color
}
// generate random integer in range 0 - 'max'
function randNum(max) {
    return Math.floor(Math.random() * max);
}
// generate one rgb color
function colorOne() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(randNum(256));
    }
    return 'rgb(' + color.join(', ') + ')'
}
// generate array of 'num' set of rgb colors
function colorsSet(num) {
    let arr = [];
    for (let i=0; i < num; i++) {
        arr.push(colorOne(numSquares));
    }
    return arr;
}

