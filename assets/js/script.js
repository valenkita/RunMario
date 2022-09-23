const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const ground = document.querySelector('.ground');
const open = document.querySelector('.info-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal_close');

 //The number of turns at the start of a new game
 const STARTING_TURNS = 5; 

 //Stores how many turns are left and score
 const PLAYER_STATE = {turnsLeft: 0, score: 0, isFirstGame: true, isPlaying: false}; 

//number of lives
var currentLife = 3;



// mario jumping 
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 600)
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudsPosition = clouds.offsetLeft;
    const groundPosition = ground.offsetLeft;

    console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 145) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        ground.style.animation = 'none';
        ground.style.left = `${groundPosition}px`;

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump)

// modal


open.addEventListener('click', ()=>{
  modal.classList.add('show');
});

close.addEventListener('click', ()=>{
  modal.classList.remove('show');
});




/*const open = document.querySelector('.info-button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_close');

open.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.add('.modal.show');
});*/



