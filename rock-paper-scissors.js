/*const test = prompt("hey");*/

image_array = [
    'paper.png',
    'rock.png',
    'scissors.png'
]

function random_image(image_value){
        
    random_value = Math.floor(Math.random() * image_array.length);

    selected_value = image_array[random_value]

    document.getElementById(`${image_value}`).src = `./images/${selected_value}`;

    return selected_value

}


function play(){

    var player  = random_image('score-image-1');
    var computer = random_image('score-image-2');

    score_value_player = player.substring(0, player.indexOf('.'))
    score_value_computer = computer.substring(0, computer.indexOf('.'))

    /*
    console.log(score_value_player)
    console.log(score_value_computer)
    */


    var score_value_player = 0
    var score_value_computer = 0


    
    /*
        rock - rock
        paper - paper
        scissors - scissors

        rock - paper = paper
        rock - scissors = rock
        scissors - paper = scissors



    */

    if (score_value_player === 'rock' && score_value_computer == 'paper' ) {
        sco
        
    } else {
        
    }


}


play()
