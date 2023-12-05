let penguin1Image, penguin2Image, villageImage, christmasHouse;
let penguin1X = 5;
let penguin1Y = 5;
let speed = 5
let penguin2X = 5;
let penguin2Y = 550
let snowballs2 = [{
    x: penguin2X,
    y: penguin2Y,
    speedY: -speed,

}]

function preload(){
    penguin1Image = loadImage("image-from-rawpixel-id-6536249-original.png")
    penguin1Image.loadPixels()
    penguin2Image = loadImage("Updated blue penguin.png")
    penguin2Image.loadPixels()
    villageImage = loadImage("image-from-rawpixel-id-12087023-original.png")
    villageImage.loadPixels()
    christmasHouse = loadImage("11458PICVq9GdV14NTijY_PIC2018.png")
    christmasHouse.loadPixels()
}

function setup(){
    createCanvas(800, 800)
}

function draw(){
    theBackground()
    penguinPlayer1()
    penguinPlayer2()
    snowball2()
    if (keyIsDown(69)){
        snowball2()
    }
}

function theBackground(){
    background(255)
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
    image(penguin1Image, penguin1X, penguin1Y, penguin1Image.width/32, penguin1Image.height/32)

        if (keyIsDown(68) && penguin1X <= width - penguin1Image.width/32){
            penguin1X = penguin1X + speed
        }
        if (keyIsDown(65) && penguin1X >= 0){
            penguin1X = penguin1X - speed
        }
        if (keyIsDown(87) && penguin1Y >= 0){
            penguin1Y = penguin1Y - speed
        }
        if (keyIsDown(83) && penguin1Y <= height/2 - 150 - penguin1Image.height/32){
            penguin1Y = penguin1Y + speed
        }
}

function penguinPlayer2(){
    image(penguin2Image, penguin2X, penguin2Y, penguin2Image.width/32, penguin2Image.height/32)
    
        if (keyIsDown(RIGHT_ARROW) && penguin2X <= width - penguin2Image.width/32){
            penguin2X = penguin2X + speed
        }
        if (keyIsDown(LEFT_ARROW) && penguin2X >= 0){
            penguin2X = penguin2X - speed
        }
        if (keyIsDown(UP_ARROW) && penguin2Y >= height/2 + 150){
            penguin2Y = penguin2Y - speed
        }
        if (keyIsDown(DOWN_ARROW) && penguin2Y <= height - penguin2Image.height/32){
            penguin2Y = penguin2Y + speed
        }
    
}


function snowball2(){
    fill(250)
    for (let i = 0; i < snowballs2.length; i++) {
        circle(snowballs2[i].x, snowballs2[i].y, 25);
        /*if (snowballs2[i].y < 50 || snowballs2[i].y > height - 50) {
            snowballs2[i].speedY *= -1;
        }*/
        snowballs2[i].y += snowballs2[i].speedY;
    }
}

function mouseClicked() {
    snowballs2.push({
        x: penguin2X + 10,
        y: penguin2Y + 75,
        speedY: -speed
    })
} 