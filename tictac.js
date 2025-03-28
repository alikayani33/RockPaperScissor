let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".Reset")
let newGame = document.querySelector(".NewGame")
let turnO = true;
const winningPatterns = [
    // Horizontal wins
    [0, 1, 2],  // Top row
    [3, 4, 5],  // Middle row
    [6, 7, 8],  // Bottom row
    
    // Vertical wins
    [0, 3, 6],  // Left column
    [1, 4, 7],  // Middle column
    [2, 5, 8],  // Right column
    
    // Diagonal wins
    [0, 4, 8],  // Diagonal from top-left to bottom-right
    [2, 4, 6],  // Diagonal from top-right to bottom-left
  ];
 

    reset.addEventListener("click",()=>{
turnO = true;
enableBox();
   });
    

  
  const disableBox  = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
  }
  const enableBox  = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
  }
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
       box.disabled = true;
        checkWinner();

    });
  });
  const checkWinner=()=>{
for (let pattern of winningPatterns){
    /*console.log(pattern[0],pattern[1],pattern[2]);
    console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);*/
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;
    if (p1 != "" && p2 != "" && p3 != ""){
        if(p1===p2 && p2===p3){
            console.log(`Winner is ${p1}`)
            disableBox();
        }
    }
}
  };
  newGame.addEventListener("click",()=>{
    turnO = true;
    enableBox();
  })
  