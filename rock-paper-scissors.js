/*const test = prompt("hey");*/

var player_score_value = 0;
var computer_score_value = 0;


image_array = [
    'paper.png',
    'rock.png',
    'scissors.png'
]

function set_default(){
    document.getElementById('score-image-1').src = `./images/paper.png`
    document.getElementById('score-image-2').src = `./images/paper.png`
    score.innerHTML = `0 - 0` 
    player_score_value = 0;
    computer_score_value = 0;
}


function random_image(image_value){
    random_value = Math.floor(Math.random() * image_array.length);
    selected_value = image_array[random_value]
    document.getElementById(`${image_value}`).src = `./images/${selected_value}`;
    return selected_value

}

const score = document.querySelector('#score_value')

function update_score(){
    score.innerHTML = `${player_score_value} - ${computer_score_value} `
}


function play(){
    var player  = random_image('score-image-1');
    var computer = random_image('score-image-2');

    score_value_player = player.substring(0, player.indexOf('.'))
    score_value_computer = computer.substring(0, computer.indexOf('.'))


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
        computer_score_value  =  computer_score_value   + 1;
        update_score()

    } else if ( score_value_computer === 'scissors' && score_value_player === 'paper' ){
        computer_score_value  =  computer_score_value + 1;
        update_score()
    }else if ( score_value_computer === 'paper' && score_value_player === 'rock' ){
        computer_score_value  = computer_score_value   + 1;
        update_score()
    }

    console.log(`Player score = ${player_score_value}`)
    console.log(`Computer score = ${ computer_score_value}`)   
}

set_default()

function results(){
    if (player_score_value < computer_score_value) {
        alert('You failed your mission, better luck next time')
        set_default()
        start()
    }else{
        alert('You successfully completed your mission, good work')
        set_default()
        start()
    }
}


const play_btn = document.getElementById('play')

function waiting(sec) {
        return new Promise(resolve => {
            setTimeout(() => { resolve('') },sec);
        })
    }

function start(){
    play_btn.addEventListener('click', async function onClick(){
        while ((player_score_value + computer_score_value) < 5) {
                play()
                await waiting(750);
                
            }
            results()
        }  
    )
}
start()








