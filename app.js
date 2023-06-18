function populateBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`
    

    let amount = size * size;
    for(i=0; i < amount; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

populateBoard(16);

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor='white');
  }   
  
const windowLoadingFunction = function (e){
    const requestedGridNumbers = prompt("Please enter the number of grids", "");
    if (requestedGridNumbers > 100){
        alert("sorry, We can't go over 100 boxes!")
    }
    else {populateBoard(requestedGridNumbers)}
}

window.addEventListener('load', windowLoadingFunction)