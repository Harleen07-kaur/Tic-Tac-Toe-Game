let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")

let turnO = true ; //PlayerO, PlayerX
let count = 0 ; //to track draw

//winning patterns;
const win_patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
    if(turnO){
        box.innerText = "O";   //player O
        turnO = false;
    }
    else{
         box.innerText = "X";   //player X
        turnO = true;
    }
       box.disable=true; 
       count++;     

    checkWinner();     

    let isWinner = checkWinner();          
     if(count === 9 && !isWinner){
        drawGame();
     }

     });
});

const disableBoxes = () =>{
    for(box of boxes){                
        box.disable = true;
    }
}

const enableBoxes = () =>{
    for(box of boxes){              
        box.disable = false;
        box.innerText = "";
    }
}

const drawGame =() =>{
        msg.innerText = "Its a Draw!✌🏻";
         msgContainer.classList.remove("hidden");
         disableBoxes();
}
const resetGame = ()=>{
         turnO= true;
         msgContainer.classList.add("hidden");
         enableBoxes();
         count=0;
}

const showWinner = (winner) =>{
         msg.innerText = `Congratulations ! ${winner} won🏆`;
         msgContainer.classList.remove("hidden");
         disableBoxes();
}

const checkWinner= () => {
       for(pattern of win_patterns){
      let posVal1=  boxes[pattern[0]].innerText;
      let posVal2=  boxes[pattern[1]].innerText;
      let posVal3=  boxes[pattern[2]].innerText;

      if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
        if(posVal1 === posVal2 && posVal2 === posVal3){
            showWinner(posVal1);
        }
      }
    }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);