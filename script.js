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
function appendButton(nth){
    let buttonID = []
    for(let i = 0; i < nth; i++){
        let button = document.createElement('button');
        button.id = `button${i}`;
        button.textContent = '+';
        buttonID.push(button.id);
        gameContainer.append(button);
    };

    // Gives functionality to the buttons
    handleButton(buttonID);
};

// Contains colors that will be used to help the players select thier space
let colors = ['yellow', 'purple', 'orange', 'pink', 'red', 'peru'];


// Handles all 6 buttons
// After player select their boxes the buttons must not work anymore
function handleButton(buttons){
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

};





// Function to select a random color
// When a random color has been randomly selected from the array it should be removed from the array to avoid selecting it again
// Might need to use the filter method to locate the randomly selected color and remove it
function selectRandomColor(colorList){
    let colorsLenth = colorList.length;
    // Chooses a random color on the COLORS array
    let randomNumber = Math.floor(Math.random() * colorsLenth) + 0;
    console.log(randomNumber)
    let chosenColor = colors[randomNumber];
    console.log(chosenColor)

    filterArray(chosenColor, colorList);

    return chosenColor;
};

function filterArray(chosenColor, popColor){
    // Filters out the selected color out of the array
    let filterColors = popColor.filter(a => a !== chosenColor);

    // Set the new filtered array to the originanl array
    colors = filterColors;
    console.log(colors)
};