const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const ground = document.querySelector('.ground');

//number of lives
var currentLife = 3;



// mario jumping 
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 400)
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

function life() {
    starElementsArray[currentLife].style.opacity = 0.1;
    currentLife--;
    if(currentLife < 0){
        console.log(GameOver);
    }

}

