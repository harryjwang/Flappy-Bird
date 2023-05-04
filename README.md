# Flappy-Bird

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
