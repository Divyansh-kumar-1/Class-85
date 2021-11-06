canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_Width = 100;
rover_Height = 90;
rover_X = 10;
rover_Y = 10;
Images_array = ["Image1.jpg","Image2.jpg","Image3.jpg","Image4.jpg"];

Random_Number = Math.floor(Math.random()*4);
console.log(Random_Number);
background_Image = Images_array[Random_Number];
console.log("background_image="+background_Image);
rover_Image = "rover.png";

function add() {
    background_ImageTag = new Image();
    background_ImageTag.onload = uploadbackground;
    background_ImageTag.src = background_Image;

    rover_Imagetag = new Image();
    rover_Imagetag.onload = uploadrover;
    rover_Imagetag.src = rover_Image;
}
function uploadbackground() {
    ctx.drawImage(background_ImageTag,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_Imagetag,rover_X,rover_Y,rover_Width,rover_Height);
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e) {
 keyPressed = e.keyCode;
 console.log(keyPressed);
 if (keyPressed == "38"){
     up();
     console.log("up")
 }
 if (keyPressed == "40"){
    down();
    console.log("down")
}
if (keyPressed == "37"){
    left();
    console.log("left")
}
if (keyPressed == "39"){
    right();
    console.log("right")
}
}
function up(){
    if(rover_Y>=0){
        rover_Y = rover_Y - 10;
        console.log("when up arrow is pressed, x=" +rover_X+ "/y=" +rover_Y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x = rover_x + 10;
        console.log("when up arrow is pressed, x=" +rover_X+ "/y=" +rover_Y);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x = rover_X - 10;
        console.log("when up arrow is pressed, x=" +rover_X+ "/y=" +rover_Y);
        uploadbackground();
        uploadrover();
    }
}function down(){
    if(rover_Y<=500){
        rover_Y = rover_Y + 10;
        console.log("when up arrow is pressed, x=" +rover_X+ "/y=" +rover_Y);
        uploadbackground();
        uploadrover();
    }
}