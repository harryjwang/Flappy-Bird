// README
/*
<project>

Name: Harry Wang

INSTRUCTIONS
Welcome to Flappy Bird, a game where your goal is to propell the bird thorugh the pipes 
without touching the tubes and bottom/top of the screen by pressing space bar. 
The goal of this game is to go thorugh as many tubes as you can without the Flappy Bird dying by avoiding contact with all the tube obstacles. 


CODING QUALITY AND VISUAL DESIGN

Arrays were used to create the pipes, to move pipes and to set random sizes for pipes. Essentially we used arrays strictly for pipes in this project. 
Loops were evidently used to loop, for example, the clouds, the pipes (we set pipes to 6, n = 6, which means there are only 6 pipes on screen at a time, and everytime a pipe goes off screen, a new pipe will be drawn).
We created self functions such as createPipes(), this allows us to change anything related to pipes in this section. We have clouds(), resetgame(), birdCounter(i) (this counts the index of the pipes the bird passes through to raise the score), and most importantly, we have  drawPipes() and movePipes(), these 2 functions are the platform of our project. drawPipes() literally draws the pipes with the use of a for loop with "n" in it, we drew two sets of rectangles with arrays. movePipes() moves the pipes with the help of the variable "fast", with the help of the for loop, it will move the pipes whenever i is less than n + 1, therefore, constantly moving.

We used a combination of tools that we have learned throughout the course, such as image processing and loops/arrays to create our flappy bird game. 
For example, the image processing functions and concepts allowed for us to create a beautiful background and to upload the iconic Flappy Bird image to create the essence of the classic Flappy Bird Game.  
As for the coding quality, we utilized tools of coding formatting and concepts to efficiently build our code to work. We used if statements with dependants on booleans and variables to create accurate code that will only work when we would want it to. 
I.e bird counter, as well as arrays to create the alternate tubes. It was difficult at first to apply arrays to the tubes and have them come at alternate positions and to assemble the game with graphics. 
However when we managed to figure out the array and loops, putting the game together made all the frustration of the code dissapear after seeing the final product of our game.

VIDEO
https://drive.google.com/file/d/1ZGjLDu5eNW_L23jSc55gfN_Cdo71JMGK/view

*/

let pipeX = [];
let pipeY = [];
let pipeR = [];
let pipePassed = [];
let n = 6; //number of pipes on screen
let spacing = 380;
let fast = 2.4;

//flappy bird movement
let flappyX = 250;
let flappyY = 250;
let flappyMove = -10;
let moveUp = -10;
let gravity = 0.4;

let startScreen = true;
let gameover = false;
let flapSound;
let imgFlappyBird;
let counter = 0;

//let flapSound;


function setup() {
 createCanvas(windowWidth, windowHeight);
    createPipes();
}

function preload() {
	  //  flapSound = loadSound("wings2-7112.mp3");
	imgFlappyBird = loadImage("flappy.jpg");
	imgBackground = loadImage("Background.png");	
}

function draw() {
    if (startScreen) {
        background("#53BDCD");
        fill(255);
        textSize(50);
        stroke(0);
        textAlign(CENTER);
        text('PRESS SPACE TO BEGIN!', width/2, height - 200);
        fill(255);
        strokeWeight(20);
        textSize(200);
        text('FLAPPY BIRD', width/2, height/2.5);
        stroke(0, 255, 0);
        strokeWeight(10);
        textSize(200);
        text('FLAPPY BIRD', width/2, height/2.5);

    }else {
    	background("#53BDCD");
    	
			
			image(imgBackground, 0, 0, windowWidth, windowHeight); //the background
			
			for (let i = 0; i < 10; i += 1) { //the clouds in for loop
				clouds( 250 * i - 200 , i * 3);
			}
			movePipes();
    	drawPipes(); 
			
			fill("BLACK");
			textSize(45);
			stroke("BLACK");
			text("SCORE: ", 100, 41);
			
			fill("BLACK");
			textSize(45);
			stroke("BLACK");
			text(counter, 212, 42);
      
			flappyMove += gravity
      flappyY += flappyMove //move Y up down(gravity)

		
      //bird
      image(imgFlappyBird, flappyX, flappyY, 100, 100);
			
			
    if (gameover) {
        background("BLACK");
        stroke(255, 0, 0);
        textSize(200);
        fill(255, 0, 0);
        textAlign(CENTER);
        text('GAME OVER', width/2, height/2);
        textSize(50);
        text('CLICK THE MOUSE TO RESTART', width/2, height - 200);
    }
}
	
function drawPipes() {
    fill (0,255,0); 
    for (let i = 0; i < (n + 1); i++){ 
            strokeWeight(3);
            rect(pipeX[i], pipeY[i], 100, 800);
            rect(pipeX[i], pipeY[i] - pipeR[i], 100, 800);

    }

}
	
function birdCounter(i) {
	if (pipeX[i] < flappyX && !pipePassed[i]) {
		counter +=1
		pipePassed[i] = true
	}	
	
}
//when bird dies
	function birdDied(pipeX, pipeY, pipeWidth, pipeHeight){
		 
    let centerPipeX = pipeX + pipeWidth / 2;  //when center of bird hits pipe
    let centerPipeY = pipeY + pipeHeight / 2;

    let dx = dist(flappyX + 50, 0, centerPipeX, 0); //calculate distance bird to pipe + 50
    let dy = dist(flappyY + 50, 0, centerPipeY, 0);

    if (flappyY > height || flappyY < 0 || dx <= pipeWidth / 2 && dy <= pipeHeight / 2) {
        // when the bird dies gameover
        gameover = true;
    }
}
	
function movePipes() {
    if (!gameover) {
			
      let randomY = random(200, 400);
         for (let i = 0; i < (n + 1); i++){ //it looks nicer having the pipe move completely offscreen therefore n + 1
         	pipeX[i] -= fast;
          birdDied(pipeX[i], pipeY[i], 100, 800); // check bottom pipes
					birdDied(pipeX[i], pipeY[i] - pipeR[i], 100, 800); //check top pipes
					birdCounter(i)
					
			
          if (pipeX[i] < -spacing) { //moves pipes
          	pipeX[i] = width;
            pipeY[i] = random(400, 550);
						pipePassed[i] = false
          }
        }
      }
   }

}

function clouds(x, y) {
	fill("White");
		noStroke();
		circle(x + 330, y + 90, 46);
		circle(x + 300, y + 94, 35);
		circle(x + 355, y + 92, 35);
		circle(x + 312, y + 73, 35);
		circle(x + 336, y + 74, 25);
}

function resetGame() {
createPipes(); //createpipes to make pipes run each time
flappyX = 250;
flappyY = 250;
startScreen = true;
gameover = false;
counter = 0;
}

function createPipes() { 
    spacing = width / n;
        //basically n is the number of pipes on screen at once
        //then it creates a list of length (n + 1) for pipex and pipey
                 //  spacing = 380
    for (let i = 0; i < (n + 1); i++){ 
      pipeX[i] = 1000 + spacing * i;
      pipeY[i] = random(250, 650);
      pipeR[i] = random(1000, 1070);
			pipePassed[i] = false;
			
    }
}

function keyPressed() {
    if (key === ' ') {
        startScreen = false; //starting screen disappears
        flappyMove = moveUp; //flappymove set to flappyY so it moves up 
			//flapSound.play(); //sound
    }
}

 function mousePressed() {
     if (gameover) {
         resetGame()
     }
 }