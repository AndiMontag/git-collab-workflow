const coinImageSrc = document.getElementById("coinImageSrc");
const winCount = document.getElementById("winCount");
const lossCount = document.getElementById("lossCount");
let wins = 0;
let losses = 0;

const coinImages = ["both.jpg", "heads.jpg", "tails.jpg"]
const coinChoices = ["Heads", "Tails"];

//1 event listener for both buttons
const coinTossButtons = document.getElementById("coinTossButtons");
coinTossButtons.addEventListener("click", (event) => {
    if (event.target.tagName ==="BUTTON") {
        const selectedOption = event.target.id;
        displayResult(selectedOption);
    }
    function displayResult(selectedOption){
        //getting random number and getting user choice
        const randomIndex = Math.floor(Math.random() *2);
        coinImageSrc.src = coinImages[randomIndex +1];
        resultText.innerHTML = `You chose ${selectedOption}.<br>`;
        //win or lose
        const coinResult = randomIndex;
        let final 
        if (coinResult === 0 ){
            final = "heads";
        } else {
            final = "tails";
        }
        resultText.innerHTML += `The toss is ${final}.<br>`;
        if (selectedOption === final) {
            resultText.innerHTML += `You win!`
            wins++;
        } else {
            resultText.innerHTML += `You lose!`;
            losses++;
        }
    
        //updating my loss/wins
        winCount.innerHTML = `Wins: ${wins}`;
        lossCount.innerHTML = `Losses: ${losses}`;
    }
});