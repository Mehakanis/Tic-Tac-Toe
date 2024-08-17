// let boxes = document.querySelectorAll('.box')
// let resetBtn = document.querySelector('#reset-btn')

// let turnO = true //playerX, playerO

// const winPatterns = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
// ]

// boxes.forEach((box)=>{
//     (box as HTMLDivElement).addEventListener("click", () =>{
//         console.log("Box was clicked");
//         (box as HTMLDivElement).innerText ="ABCD"
//     })
// })

let boxes = document.querySelectorAll('.box') as NodeListOf<HTMLButtonElement>; // Select all elements with class 'box'
let resetBtn = document.querySelector('#reset-btn') as HTMLButtonElement; // Select the element with id 'reset-btn'
let newGameBtn = document.querySelector('#new-btn') as HTMLButtonElement;
let msgContainer = document.querySelector('.msg-container') as HTMLDivElement;
let msg = document.querySelector('#msg') as HTMLDivElement;

let turnO = true; // Indicates whose turn it is: true for 'O', false for 'X'

// Define the winning patterns in the tic-tac-toe grid
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetGame = ()=> {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide")

}
// Add a click event listener to each box
boxes.forEach((box) => {
    // Ensure TypeScript understands that box is an HTMLDivElement
    box.addEventListener("click", () => {
        //console.log("Box was clicked");
        if (turnO) {
            box.innerText = "O"; // Set text to 'O' if it's O's turn
            turnO = false; // Change turn
        } else {
            box.innerText = "X"; // Set text to 'X' if it's X's turn
            turnO = true; // Change turn
        }
        box.disabled = true;

        checkWinner();
    });
    
});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}



const showWinner = (winner : string) => {
    msg.innerText = `Congratulations Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkWinner = () => {
    for(let pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText
    let pos2Val = boxes[pattern[1]].innerText
    let pos3Val = boxes[pattern[2]].innerText

    if(pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
       if(pos1Val === pos2Val && pos2Val === pos3Val){
        //console.log("WINNER",pos1Val);
        showWinner(pos1Val)
        
       }
    }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);