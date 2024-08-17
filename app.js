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
var boxes = document.querySelectorAll('.box'); // Select all elements with class 'box'
var resetBtn = document.querySelector('#reset-btn'); // Select the element with id 'reset-btn'
var newGameBtn = document.querySelector('#new-btn');
var msgContainer = document.querySelector('.msg-container');
var msg = document.querySelector('#msg');
var turnO = true; // Indicates whose turn it is: true for 'O', false for 'X'
// Define the winning patterns in the tic-tac-toe grid
var winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
var resetGame = function () {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
// Add a click event listener to each box
boxes.forEach(function (box) {
    // Ensure TypeScript understands that box is an HTMLDivElement
    box.addEventListener("click", function () {
        //console.log("Box was clicked");
        if (turnO) {
            box.innerText = "O"; // Set text to 'O' if it's O's turn
            turnO = false; // Change turn
        }
        else {
            box.innerText = "X"; // Set text to 'X' if it's X's turn
            turnO = true; // Change turn
        }
        box.disabled = true;
        checkWinner();
    });
});
var disableBoxes = function () {
    for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
        var box = boxes_1[_i];
        box.disabled = true;
    }
};
var enableBoxes = function () {
    for (var _i = 0, boxes_2 = boxes; _i < boxes_2.length; _i++) {
        var box = boxes_2[_i];
        box.disabled = false;
        box.innerText = "";
    }
};
var showWinner = function (winner) {
    msg.innerText = "Congratulations Winner is ".concat(winner);
    msgContainer.classList.remove("hide");
    disableBoxes();
};
var checkWinner = function () {
    for (var _i = 0, winPatterns_1 = winPatterns; _i < winPatterns_1.length; _i++) {
        var pattern = winPatterns_1[_i];
        var pos1Val = boxes[pattern[0]].innerText;
        var pos2Val = boxes[pattern[1]].innerText;
        var pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                //console.log("WINNER",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
