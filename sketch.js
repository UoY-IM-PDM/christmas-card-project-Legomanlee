let penguin1Image, penguin2Image, villageImage, christmasHouse, christmasMusic;
let penguin1X = 5;
let penguin1Y = 50;
let penguin1Lives =  5
let speed = 5
let penguin2X = 650;
let penguin2Y = 550
let penguin2Lives = 5
let snowballs1 = [{
    x: penguin1X,
    y: penguin1Y,
    speedY: -speed,

}]
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
    christmasMusic = loadSound("711984__audiocoffee__christmas-loop.wav")
}

function setup(){
    createCanvas(800, 800);
}

function draw(){
    theBackground()
    currentLifeCount()
    penguinPlayer1()
    penguinPlayer2()
    snowball1()
    snowball2()
    hitPenguin()
    deadPenguin()
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

function snowball1(){
    fill(250)
    for (let i = 0; i < snowballs1.length; i++) {
        circle(snowballs1[i].x, snowballs1[i].y, 25);
        snowballs1[i].y += snowballs1[i].speedY;
    }
}

function snowball2(){
    fill(250)
    for (let i = 0; i < snowballs2.length; i++) {
        circle(snowballs2[i].x, snowballs2[i].y, 25);
        snowballs2[i].y += snowballs2[i].speedY;
    }
}

function keyPressed(){
    if (keyCode === 191 && snowballs2.length < 3){
        snowballs2.push({
        x: penguin2X + 120,
        y: penguin2Y + 70,
        speedY: -speed
        })
    }
    if (keyCode === 69 && snowballs1.length < 4){
        snowballs1.push({
        x: penguin1X + 10,
        y: penguin1Y + 75,
        speedY: speed
        })
    }
}

function hitPenguin(){
    for (let i = 0; i < snowballs2.length; i++) {
        if (snowballs2[i].y > penguin1Y && snowballs2[i].y < penguin1Y + penguin1Image.height/32 && snowballs2[i].x > penguin1X && snowballs2[i].x < penguin1X + penguin1Image.width/32){
            penguin1Lives = penguin1Lives - 1
            snowballs2.splice(i, 1)
        } else if (snowballs2[i].y < 0){
            snowballs2.splice(i, 1)
        }
    }
    for (let i = 0; i < snowballs1.length; i++){
        if (snowballs1[i].y > penguin2Y && snowballs1[i].y < penguin2Y + penguin2Image.height/32 && snowballs1[i].x > penguin2X && snowballs1[i].x < penguin2X + penguin2Image.width/32){
            penguin2Lives = penguin2Lives - 1
            snowballs1.splice(i, 1)
        } else if (snowballs1[i].y > height){
            snowballs1.splice(i, 1)
        }
    }
}

function currentLifeCount(){
    textSize(25)
    fill(255, 0, 0)
    text("Lives: " + penguin1Lives, 5, 25)
    text("Snowballs Left: " + (4 - snowballs1.length), width - 200, 25)
    fill(0, 0, 255)
    text("Lives: " + penguin2Lives, 5, height - 5)
    text("Snowballs Left: " + (3 - snowballs2.length), width - 200, height - 5)
}

function deadPenguin(){
    console.log(penguin1Lives, penguin2Lives)
    if (penguin1Lives <= 0){
        fill(255)
        square(width/2, height/2, width)
        fill(0)
        text("GAME OVER. PLAYER 2 WINS!", width/2, height/2)
    }
    if (penguin2Lives <= 0){
        fill(255)
        square(width/2, height/2, width)
        fill(0)
        text("GAME OVER. PLAYER 1 WINS!", width/2, height/2)
    }
}

function mouseClicked(){
    christmasMusic.loop();
}