
// Declearing variables for use
var player_score_value = 0;
var computer_score_value = 0;
const play_btn = document.getElementById('play')
const choice_rock = document.getElementById('selection-button_1')
const choice_paper = document.getElementById('selection-button_2')
const choice_scissors = document.getElementById('selection-button_3')
const score = document.querySelector('#score_value')
const name_of_player = document.querySelector('#player_name')





// setting the default image for reset
document.getElementById('score-image-1').src = `./images/paper.png`
document.getElementById('score-image-2').src = `./images/paper.png`

// array containing the images with the extention
image_array = [
    'paper.png',
    'rock.png',
    'scissors.png'
]


// reloding the page when game is over
function set_default(){
    window.location.reload();
}


function image(image_value, player){
    // setting the image based on player input
    if(player === "player"){
        document.getElementById('score-image-1').src = `./images/${image_value}.png`;
        return `${image_value}.png`
    }else{
    //setting the computer image based on random fuction and selecting the image from the array   
        random_value = Math.floor(Math.random() * image_array.length);
        selected_value = image_array[random_value]
        document.getElementById('score-image-2').src = `./images/${selected_value}`;
        return selected_value
    }
}


// updating the score
function update_score(){
    score.innerHTML = `${player_score_value} - ${computer_score_value} `
}


// playing the game
function play(user_choice){
    // setting the player image based on their choice
    image(user_choice, 'player')

    // storing that value in a variable
    score_value_player = user_choice
    
    // getting the computer value from the image fuction
    var computer = image('score-image-2','computer');

    // removing the extension from the value
    score_value_computer = computer.substring(0, computer.indexOf('.'))

    // comparing the player value to the computer value and updating the score as reequired
    if (score_value_player === 'rock' && score_value_computer === 'scissors' ) {
        player_score_value = player_score_value + 1;
        update_score()
    
    } else if (score_value_player === 'scissors' && score_value_computer === 'paper' ){
        player_score_value= player_score_value + 1;
        update_score()
    }else if (score_value_player === 'paper' && score_value_computer === 'rock' ){
        player_score_value = player_score_value + 1;
        update_score()
    }
    
    if (score_value_computer === 'rock' && score_value_player === 'scissors' ) {
        computer_score_value  =  computer_score_value  + 1;
        update_score()

    } else if ( score_value_computer === 'scissors' && score_value_player === 'paper' ){
        computer_score_value  =  computer_score_value + 1;
        update_score()
    }else if ( score_value_computer === 'paper' && score_value_player === 'rock' ){
        computer_score_value  = computer_score_value  + 1;
        update_score()
    }
    // keeping tabs on the score and deciding when the combined score has reached 5
    var total_score = player_score_value + computer_score_value
    if(total_score === 5){
        results()
    }
}


// start of the game, getting player name

var user_name = prompt("Welcome, what is your name?")

function popup(){
    // checking if player name is empty and setting a default
    if(!user_name){
        user_name = 'player'
        name_of_player.innerHTML = 'Player'
    }else{
        name_of_player.innerHTML = user_name
    }

    // Giving the player instructions
    alert(`Hi ${user_name}, this is rock paper scissor game, please select your option`)
}


// setting a wait time for asyc fucntion with a variable in milisec
function waiting(sec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') },sec);
    })
}

// an async fuction that takes pauses for however many seconds then continues with its process
async function results(){
    
    // waiting for 400 miliseconds

    // reason for this was that this would show before the score updates
    await waiting(400)

    // confirming the winner of the round
    if (player_score_value < computer_score_value) {
        alert('Computer wins, better luck next time')
        set_default()
        start()
        
    }else{
        alert(`Congratulations ${user_name}, you won`)
        set_default()
        start()
    }
   
}


// user choice based on button clicked
function user_choice(){
    choice_rock.addEventListener("click", function onclick(){
        play('rock')
    });

    choice_paper.addEventListener("click", function onclick(){
        play('paper')
    });

    choice_scissors.addEventListener("click", function onclick(){
        play('scissors')
    });
    
}


// starting the game
function start(){
   popup()
   user_choice()
}
start()








