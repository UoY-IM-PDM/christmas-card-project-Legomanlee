let penguinImage;

function preload(){
    penguinImage = loadImage("image-from-rawpixel-id-6536249-original.png")
    penguinImage.loadPixels()
}

function setup(){
    createCanvas(800, 800)
    background(255)
    theBackground()
}

function draw(){
    penguinPlayer1()
}

function theBackground(){
    rectMode(CENTER)
    fill(50, 50, 200)
    rect(width/2, height/2, width, 100)
    fill(25, 200, 255)
    rect(width/2, height/2 + 100, width, 100)
    rect(width/2, height/2 - 100, width, 100)
}

function tree(x, y, height, width){

}

function penguinPlayer1(){
    image(penguinImage, 5, 5, penguinImage.width/32, penguinImage.height/32)
}

function penguinPlayer2(){

}