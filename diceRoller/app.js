
const dice = document.querySelector(".dice");
const rolbtn = document.querySelector(".roll");
const rolHistory = document.querySelector(".history");

var count = 1;

rolbtn.addEventListener("click",() =>{
    dice.classList.add("dice-rolling");
    setTimeout(()=>{
        dice.classList.remove("dice-rolling");
        rolDice();
    },1000)
})

function rolDice(){
    const rolResult = Math.ceil(Math.random()*6);
    const diceFace = getDiceFace(rolResult);
    dice.innerHTML = diceFace;
    const listEl = document.createElement("li");
    listEl.innerHTML = `Roll ${count} <span>${diceFace}</span>`;
    rolHistory.appendChild(listEl);
    count++;
}
function getDiceFace(rolResult){
    switch(rolResult){
        case 1:
            return "&#9856";
        case 2:
            return "&#9857"; 
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";      
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";     
    }
}