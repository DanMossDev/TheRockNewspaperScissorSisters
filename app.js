//Normal variables
let userScore = 0;
let compScore = 0;
//DOM variables - sort of like caching as getComponent in start()
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function cpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const i = Math.floor(Math.random() * 3);
    return choices[i];
}

function updateScore(outcome, user, comp) {
    switch(outcome) {
        case 'win':
            userScore++;
            userScore_span.textContent = userScore;
            scoreboard_div.style.backgroundColor = "darkgreen";
            return;
        case 'loss':
            compScore++;
            compScore_span.textContent = compScore;
            scoreboard_div.style.backgroundColor = "darkred";
            return;
        default:
            scoreboard_div.style.backgroundColor = "#25272E";
    }
}

function game(userChoice) {
    const compChoice = cpuChoice();

    switch(userChoice) {
        case 'rock':
            switch(compChoice) {
                case 'rock':
                    updateScore('draw');
                    result_div.innerHTML = 'The Rock cannot be beaten. Not even by The Rock.<br> Draw.'; //use of innerHTML okay since there's no user text input
                    return;
                case 'paper':
                    updateScore('loss');
                    result_div.innerHTML = 'Paper could smell what The Rock was cooking. It smelled bad.<br> Loss.';
                    return;
                case 'scissors':
                    updateScore('win');
                    result_div.innerHTML = 'The Rock ran with scissors... but lived to tell the tale.<br> Win!';
                    return;
            }
        case 'paper':
            switch(compChoice) {
                case 'rock':
                    updateScore('win');
                    result_div.innerHTML = 'Extra extra read all about it! Dwayne Johnson is a loser.<br> Win!';
                    return;
                case 'paper':
                    updateScore('draw');
                    result_div.innerHTML = 'Paper on paper? The tabloids will have a field day with this.<br> Draw.';
                    return;
                case 'scissors':
                    updateScore('loss');
                    result_div.innerHTML = 'Scissors took your mama out all night.<br> Loss.';
                    return;
            }
        case 'scissors':
            switch(compChoice) {
                case 'rock':
                    updateScore('loss');
                    result_div.innerHTML = "The only thing sharper than your blade is The Rock's pecks.<br> Loss.";
                    break;
                case 'paper':
                    updateScore('win');
                    result_div.innerHTML = 'That was easier than cutting paper with scissors.<br> Win!';
                    break;
                case 'scissors':
                    updateScore('draw');
                    result_div.innerHTML = 'The Scissor Sisters are finally reunited!<br> Draw.'
                    break;
            }
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

main();