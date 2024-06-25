// When the player select the number of players and click start randi
// A pop up will apear, giving instuctions
// The container must be cleared
// Depending on the number of players
// buttons must be appended to the container display
// each button will be emty
// each button will be given a unique colore when clicked
// A random function will select one of the colored buttons and fill the screen with the selected color button
// It will also display the challenge
// and finaly a button to reset the whole game



// CONSTANT VARIABLES
const containerElement = document.querySelector('.container');
const gameContainerElement = document.querySelector('.game-container');
const numPlayers = document.getElementById('num-players');
const startBTN = document.getElementById('start-btn');


startBTN.addEventListener('click', (e)=>{
    // Checks if the user inserted a value a value greater than 1
    if(numPlayers.value === "" || numPlayers.value <= 1)
        alert("You can only choose 2 to 6 players");
    
    else if(numPlayers.value > 6)
        alert("You can only choose 2 to 6 players");
    
    else{
        gameContainerElement.innerHTML = '';    // Clear the initial HTML content
        chooseRandom(appendDisplay());
    };


});

// Appends button to display
function appendDisplay(){
/*     const button = document.createElement("button");

    button.id = 'player-buttons';
    button.style.width = '55px';
    button.style.height = '55px';
    button.style.borderRadius = '50%';
    button.style.border = 'none';
    button.style.textAlign = 'center';
    button.style.fontWeight = '100'
    button.style.fontSize = '22px'
    button.textContent = '+';

    gameContainerElement.appendChild(button) */
    let player = 1
    let docFrag = document.createDocumentFragment();
    while(numPlayers.value > 0){
        let button = document.createElement("button");

        button.id = `player${player}-button`;
        button.style.width = '55px';
        button.style.height = '55px';
        button.style.borderRadius = '50%';
        button.style.border = 'none';
        button.style.textAlign = 'center';
        button.style.fontWeight = '100';
        button.style.fontSize = '22px';
        button.textContent = '+';

        docFrag.appendChild(button);


        gameContainerElement.appendChild(docFrag);
        player++;
        numPlayers.value--;
    };

    let nodeList = document.querySelectorAll('button')
    return nodeList
};


let choosePlayer = 1
function chooseRandom(btn){
    console.log(btn)
    let nodeLength = btn.length;
    //console.log(nodeLength)
    let eventNum = 0;

    let colors = ['lightgreen', 'pink', 'purple', 'red', 'blue', 'yellow'];



    while(nodeLength > 0){
        //console.log(btn[eventNum]);
        for(i in btn){
            console.log(i)
            i.addEventListener('click', (e)=>{
                console.log('going somewehre')
            })
        }


/*         let selectPlayer = `player${choosePlayer}-button`
        btn[eventNum].addEventListener("click", (e)=>{
            console.log("might work");
            
            document.getElementById(selectPlayer).style.background = colors[eventNum];
        }); */
        eventNum++;
        choosePlayer++;
        nodeLength--;
    };
};