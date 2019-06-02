let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

function convertToWord(letter) {
  if(letter == "r") return "Rock";
  if(letter == "p") return "Paper";
  if(letter == "s") return "Scissor";
}

function win(u,c) {
  console.log('USER WINS!!');
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(u) + smallUserWord + " beats " + convertToWord(c) + smallCompWord +" . You Win! ";
  document.getElementById(u).classList.add('green-glow');
  setTimeout(function() { document.getElementById(u).classList.remove('green-glow')}, 800);
}

function lose(u,c){
  console.log('USER LOSES!!');
  computerScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(u) + smallUserWord + " loses to " + convertToWord(c) + smallCompWord +" . You Lost! ";
  document.getElementById(u).classList.add('red-glow');
  setTimeout(function() { document.getElementById(u).classList.remove('red-glow')}, 400);
}

function draw(u,c){
  console.log("It's a DRAW!");
  result_p.innerHTML = convertToWord(u) + smallUserWord + " equals " + convertToWord(c) + smallCompWord +" . It's a Draw! ";
  document.getElementById(u).classList.add('gray-glow');
  setTimeout(function() { document.getElementById(u).classList.remove('gray-glow')}, 400);
}

function getComputerChoice(){
  const choices = ['r','p','s'];
  const rn = Math.floor(Math.random() * 3);
  return choices[rn];
}

function game(userChoice){
  const compChoice = getComputerChoice();
  //console.log("userChoice "+ userChoice);
  //console.log("computerChoice "+ compChoice);

  switch(userChoice + compChoice){
    case "pr":
    case "rs":
    case "sp":
      //console.log('USER WINS!!');
      win(userChoice,compChoice);
      break;

    case "rp":
    case "sr":
    case "ps":
      //console.log('USER LOSES!!');
      lose(userChoice,compChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      //console.log("It's a DRAW!");
      draw(userChoice,compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function(){
    game('r');
    //console.log('you clicked rock!')
  });

  paper_div.addEventListener('click', function(){
    game('p');
    //console.log('you clicked paper!')
  });

  scissor_div.addEventListener('click', function(){
    game('s');
    //console.log('you clicked scissors!')
  });
}

main();
