// When the player select the number of players and click start randi
// The container must be cleared
// Depending on the number of players
// buttons must be appended to the container display
// each button will be emty
// each button will be given a random unique colore when clicked
// Bellow the appended will be the Truth or Dare randindi button that will select a random player and give them a choice of truth or dare randomly
// They should be able to keep using the TODR button as many times as they want
// if they need to chnage the number of players a button to reset the whole game will be available


// CONSTANT VARIABLES
const container = document.querySelector('.container');
const gameContainer = document.querySelector('.game-container');
const numPlayers = document.getElementById('num-players');
const startBTN = document.getElementById('start-btn');
const PLAY_CONTAINER = document.querySelector('.play-randi');


// Starts the game
startBTN.onclick = ()=>{
    if(numPlayers.value <= 6 && numPlayers.value >= 2){
        gameContainer.innerHTML = '';
        appendButton(numPlayers.value);
    } else{
        alert('You can only choose 2 to 6 players')
    };
};

// Appends multiple buttons depending on how many players where chosen
function appendButton(nth){    let buttonID = []
    // Appends buttons that players will choose
    for(let i = 0; i < nth; i++){
        let button = document.createElement('button');
        button.id = `button${i}`;
        button.textContent = '+';
        buttonID.push(button.id);
        gameContainer.append(button);
    };

    // Appends buttons for reset and play truth or dare
    let buttonNames = ['Truth or Dare', 'reset']
    for(let i = 0; i < 2; i++){
        let button = document.createElement('button');
        button.id = buttonNames[i];
        button.textContent = buttonNames[i]

        PLAY_CONTAINER.append(button)
    }

    // Gives functionality to the buttons
    handleButton(buttonID, buttonNames);
};

// Contains colors that will be used to help the players select thier space
let colors = ['yellow', 'purple', 'orange', 'pink', 'red', 'peru'];


// Handles all 6 buttons
// After player select their boxes the buttons must not work anymore
function handleButton(buttons, playBTN){
    let buttonsLength = buttons.length;

    // Handles 2 buttons
    if(buttonsLength === 2){
        // Handles the first button
        document.getElementById(buttons[0]).onclick = ()=>{
            assignColors(buttons[0])
        };

        // Handles the second button
        document.getElementById(buttons[1]).onclick = ()=>{
            assignColors(buttons[1]);
        };
    }

    // Handles 3 buttons
    else if(buttonsLength === 3){
        // Handles the first button
        document.getElementById(buttons[0]).onclick = ()=>{
            assignColors(buttons[0]);
        };

        // Handles the second button
        document.getElementById(buttons[1]).onclick = ()=>{
            assignColors(buttons[1]);
        };

        // Handles the third button
        document.getElementById(buttons[2]).onclick = ()=>{
            assignColors(buttons[2]);
        };
    }

    // Handles 4 buttons
    else if(buttonsLength === 4){
        // Handles the first button
        document.getElementById(buttons[0]).onclick = ()=>{
            assignColors(buttons[0]);
        };

        // Handles the second button
        document.getElementById(buttons[1]).onclick = ()=>{
            assignColors(buttons[1]);
        };

        // Handles the third button
        document.getElementById(buttons[2]).onclick = ()=>{
            assignColors(buttons[2]);
        };

        // Handles the fourth button
        document.getElementById(buttons[3]).onclick = ()=>{
            assignColors(buttons[3]);
        };
    }

    // Handles 5 buttons
    else if(buttonsLength === 5){
            // Handles the first button
            document.getElementById(buttons[0]).onclick = ()=>{
                assignColors(buttons[0]);
            };

            // Handles the second button
            document.getElementById(buttons[1]).onclick = ()=>{
                assignColors(buttons[1]);
            };

            // Handles the third button
            document.getElementById(buttons[2]).onclick = ()=>{
                assignColors(buttons[2]);
            };

            // Handles the fourth button
            document.getElementById(buttons[3]).onclick = ()=>{
                assignColors(buttons[3]);
            };

            // Handles the fith button
            document.getElementById(buttons[4]).onclick = ()=>{
                assignColors(buttons[4]);
            };
    }

    // Handles 6 buttons
    else if(buttonsLength === 6){
        // Handles the first button
        document.getElementById(buttons[0]).onclick = ()=>{

            assignColors(buttons[0]);
        };

        // Handles the second button
        document.getElementById(buttons[1]).onclick = ()=>{
            assignColors(buttons[1]);
        };

        // Handles the third button
        document.getElementById(buttons[2]).onclick = ()=>{
            assignColors(buttons[2]);
        };

        // Handles the fourth button
        document.getElementById(buttons[3]).onclick = ()=>{
            assignColors(buttons[3]);
        };

        // Handles the fith button
        document.getElementById(buttons[4]).onclick = ()=>{
            assignColors(buttons[4]);
        };
        // Handles the sixth button
        document.getElementById(buttons[5]).onclick = ()=>{
            assignColors(buttons[5]);
        };
    }

    function assignColors(assignBTN){
        // Gives the button a random background color
        let displayColor = selectRandomColor(colors);
        document.getElementById(assignBTN).style.backgroundColor = displayColor;

        // Stops the button from working
        document.getElementById(assignBTN).onclick = null;
    };


    document.getElementById(playBTN[0]).onclick = ()=>{
        chooseRandomPlayer(buttons)
    }

};


// Function to select a random color
// When a random color has been randomly selected from the array it should be removed from the array to avoid selecting it again
// Might need to use the filter method to locate the randomly selected color and remove it
function selectRandomColor(colorList){
    let colorsLenth = colorList.length;
    // Chooses a random color on the COLORS array
    let randomNumber = Math.floor(Math.random() * colorsLenth) + 0;
    let chosenColor = colors[randomNumber];

    filterArray(chosenColor, colorList);

    return chosenColor;
};

function filterArray(chosenColor, popColor){
    // Filters out the selected color out of the array
    let filterColors = popColor.filter(a => a !== chosenColor);

    // Set the new filtered array to the originanl array
    colors = filterColors;
};


// A function that gets the background color of the play buttons
function getPlayerColors(player){
    let playerLenth = player.length;
    let player1 = document.getElementById(player[0]);
    let player2 = document.getElementById(player[1]);
    let player3 = document.getElementById(player[2]);
    let player4 = document.getElementById(player[3]);
    let player5 = document.getElementById(player[4]);
    let player6 = document.getElementById(player[5]);

    let players = []
    // gets colors and put inside of an array depending on how many players are playing the game
    if(playerLenth === 2){
        return players = [player1.style.backgroundColor, player2.style.backgroundColor]
    }
    else if(playerLenth === 3){
        return players = [player1.style.backgroundColor, player2.style.backgroundColor, player3.style.backgroundColor];
    }
    else if(playerLenth === 4){
        return players = [player1.style.backgroundColor, player2.style.backgroundColor, player3.style.backgroundColor, player4.style.backgroundColor];
    }
    else if(playerLenth === 5){
        return players = [player1.style.backgroundColor, player2.style.backgroundColor, player3.style.backgroundColor, player4.style.backgroundColor, player5.style.backgroundColor];
    }
    else if(playerLenth === 6){
        return players = [player1.style.backgroundColor, player2.style.backgroundColor, player3.style.backgroundColor, player4.style.backgroundColor, player5.style.backgroundColor, player6.style.backgroundColor];
    }
};

// A button that will choose random players based on the background color of their button
function chooseRandomPlayer(players){
    let player = getPlayerColors(players); // The 6 buttons ID's names are passed as arguments
    let playerLenth = player.length;
    let randomNumber = Math.floor(Math.random() * playerLenth) + 0; // gets a random number



    let choosePlayer = player[randomNumber] // chooses a random player within the list


    displayTOD(choosePlayer);
};


const Truth_Dare = [
    {
        'dare1': 'Call your mom',
        'dare2': 'Tell your father you loave him',
        'dare3': 'Ask God for forgiveness'
    },
    {
        'truth1': 'Do your Parents know you are gay',
        'truth2': 'Do you still love your ex',
        'truth3': 'Is God the one that saved your life'
    }
]

// Displays the Truth or Dare for the randomly selected player
// It should redomly choose truth of dare
const popup  = document.getElementById('popup');
const chosenPlayer = document.getElementById('given');
const truthOrDare = document.getElementById("dare");
function displayTOD(chosen){
    popup.style.backgroundColor = chosen;
    popup.classList.add('open-popup')
    
    let randomTruthDare = Math.floor(Math.random() * 2) + 0;
    let randomChosen = Math.floor(Math.random() * 3) + 1;
    if(randomTruthDare === 0){
        chosenPlayer.textContent = `${chosen} has been given a Dare`;
        truthOrDare.textContent = Truth_Dare[0][`dare${randomChosen}`];
    }
    else{
        chosenPlayer.textContent = `${chosen} has been given TRUTH`
        truthOrDare.textContent = Truth_Dare[1][`truth${randomChosen}`];
    }


    document.getElementById('closePopup').onclick = ()=>{
        popup.classList.remove('open-popup')
    }

}