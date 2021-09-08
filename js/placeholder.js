const handOptions =  {
    'rock':'./images/rock.png',
    'paper':'/images/paper.png',
    'scissors':'/images/scissors.png'
}

let SCORE = 0;

const pickUserHand = (hand) => {
    //what should thuis function do ?
    // show the next page with hand we picked
    //hide the current page

    let hands = document.querySelector('.challenge-container');
    hands.style.display ='none';

    let contest  = document.querySelector('.contest');
    contest.style.display  = 'flex'

    document.getElementById(userPickImage).src = handOptions[hand]; 
     
    pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

     //set computer image 
     document.getElementById("computerPickImage").src = handOptions[cpHand]
    refree(hand, cpHand);
};

const refree  = (userHand,cpHand)  => {
    if(userHand  == 'paper' && cpHand == 'scissors'){
        setDecision('YOU LOSE !')

    }
     if (userHand  ==  'paper' && cpHand  == 'rock'){
        setDecision('YOU WIN !')
        setSCORE(SCORE + 1)
    }
    if(userHand  == 'paper' && cpHand == 'scissors'){
        setDecision('YOU LOSE !')
     }
     if (userHand  === cpHand) {
        setDecision('YOU TIE!')
        return;
    };
 };

const setDecision  = (decision)  => {
    document.querySelector('.decision h1').innerText  = decision; 

}; 

const setSCORE  = (score)  => {
    SCORE =score;
    document.querySelector('.score h1').innerText  = score;
};

const restartGame  = ()  => {
    let hands = document.querySelector('.challenge-container');
    hands.style.display ='flex';

    let contest  = document.querySelector('.contest');
    contest.style.display  = 'none'

};
