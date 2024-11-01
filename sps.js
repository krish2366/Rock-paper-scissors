let user_score = 0;
let comp_score = 0;

let text = document.querySelector(".text");

let uscore = document.querySelector("#uscore");
let cscore = document.querySelector("#cscore");

const choice = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const option = ["rock","paper","scissors"];

    let idx = Math.floor(Math.random()*3);
    // here we tried to get a random index for the array option,in this floor function eliminates the digits after the decimal. and random function generate a no. b/w 0 to 1 ,1 excluded. expected value 0,1,2


    let random = option[idx];
    return random;
}



const result = (winStatus) =>{
    if(winStatus){
        console.log("you win");
        text.innerText = "YOU WIN!!";
        user_score++;
        uscore.innerText = user_score;
    }else{
        console.log("you lost");
        text.innerText = "YOU LOST!!";
        comp_score++;
        cscore.innerText = comp_score;
    }
}

choice.forEach(val => {
    console.log(val);
    val.addEventListener("click",()=>{

        if(genCompChoice() == val.id){
            console.log("draw");
            text.innerText = "IT'S A DRAW";
        }else{
            let winStatus = true;
            if (val.id === "rock"){
                winStatus = genCompChoice() === "paper" ? false : true;
            }else if(val.id === "paper"){
                winStatus = genCompChoice() === "scissors" ? false : true;
                
            }else{
                winStatus = genCompChoice() === "rock" ? false : true;
            }
            result(winStatus);

        }
    })

});