let penguin1Image, penguin2Image, villageImage, christmasHouse, christmasMusic, skatingBear, santa, angrySanta, snowSound, hohoho, santaCrash, snowBackground, merryChristmas;
let penguin1X = 5;
let penguin1Y = 50;
let penguin1Lives =  5
let speed = 5
let maxSnowballSpeed = 12
let snowballSpeed = 2
let penguin2X = 650;
let penguin2Y = 550
let penguin2Lives = 5
let startOpacity = 255
let villageYCoordinate = 50
let skatingBearX = 0
let skatingBear2X = 500
let bearSpeed = 2
let santaX = 100
let santaY = 320
let santaSpeed = 1
let santaHealth = 0
let santaMaxHealth = 50
let snowballs1 = [{
    x: penguin1X,
    y: penguin1Y,
    speedY: -snowballSpeed,

}]
let snowballs2 = [{
    x: penguin2X,
    y: penguin2Y,
    speedY: -snowballSpeed,

}]

function preload(){
    penguin1Image = loadImage("images/image-from-rawpixel-id-6536249-original.png")
    penguin1Image.loadPixels()
    penguin2Image = loadImage("images/Updated blue penguin.png")
    penguin2Image.loadPixels()
    villageImage = loadImage("images/image-from-rawpixel-id-12087023-original.png")
    villageImage.loadPixels()
    skatingBear = loadImage("images/skatingBearImage.png")
    skatingBear.loadPixels()
    santa = loadImage("images/image-from-rawpixel-id-10192229-original.png")
    santa.loadPixels()
    angrySanta = loadImage("images/image-from-rawpixel-id-1230291-original.png")
    angrySanta.loadPixels()
    snowSound = loadSound("audio/HitBySnowball.wav")
    christmasMusic = loadSound("audio/711984__audiocoffee__christmas-loop.wav")
    hohoho = loadSound("audio/hohoho.wav")
    santaCrash = loadSound("audio/SantaCrash.wav")
    merryChristmas = loadSound("audio/MerryChristmas.mp3")
}

function setup(){
    createCanvas(800, 800);
}

function draw(){
    theBackground()
    currentLifeCount()
    penguinPlayer1()
    penguinPlayer2()
    movingSanta()
    movingBear()
    movingBear2()
    snowball1()
    snowball2()
    hitPenguin()
    deadPenguin()
    deadSanta()
    startGame()
}

function startGame(){
    fill(255, 255, 255, startOpacity)
    square(width/2, height/2, width)
    fill(0, 100, 0, startOpacity)
    image(villageImage, -150, villageYCoordinate, villageImage.width/4, villageImage.height/4)
    textSize(75)
    text("SNOWBALL FIGHT!", 60, 100)
    textSize(70)
    text("Click Anywhere to Start!", 25, height - 20)
    textSize(25)
    text("Red Penguin - Use 'wasd' keys to move and e to fire snowballs", 50, height - 125)
    text("Blue Penguin - Use arrow keys to move and / to fire snowballs", 55, height - 100)
}

function mouseClicked(){
    if (!christmasMusic.isPlaying()){
        christmasMusic.loop();
    } else {
        christmasMusic.pause()
    }
    villageYCoordinate = height
    startOpacity = 0
    background(255)
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

function movingBear(){
    image(skatingBear, skatingBearX, height/2, skatingBear.width/8, skatingBear.height/8)
    skatingBearX = skatingBearX + bearSpeed
    if (skatingBearX > width){
        skatingBearX = -100
        if(speed <= maxSnowballSpeed){
            speed = speed + 1
        }
    }
}

function movingBear2(){
    image(skatingBear, skatingBear2X, height/2 - 200, skatingBear.width/8, skatingBear.height/8)
    skatingBear2X = skatingBear2X - bearSpeed
    if (skatingBear2X < -100){
        skatingBear2X = width + 100
    }
}

function movingSanta(){
    image(santa, santaX, santaY, width/4, height/6)
    santaX = santaX - 5
    if (santaX < - 500){
        santaX = width + 500
    }
    santaY = santaY + santaSpeed
    if (santaY < 305 || santaY > 335){
        santaSpeed = santaSpeed * -1
    }
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
            snowSound.play()
        } else if (snowballs2[i].y < 0){
            snowballs2.splice(i, 1)
        } else if (snowballs2[i].y > height/2 && snowballs2[i].y < height/2 + 100 && snowballs2[i].x > skatingBearX + 25 && snowballs2[i].x < skatingBearX + 100){
            snowballs2.splice(i, 1)
            snowSound.play()
        } else if (snowballs2[i].y > height/2 - 200 && snowballs2[i].y < height/2 - 100 && snowballs2[i].x > skatingBear2X + 25 && snowballs2[i].x < skatingBear2X + 100){
            snowballs2.splice(i, 1)
            snowSound.play()
        } else if (snowballs2[i].y > santaY && snowballs2[i].y < santaY + 100 && snowballs2[i].x > santaX && snowballs2[i].x < santaX + 200){
            snowballs2.splice(i, 1)
            santaHealth = santaHealth + 1
            snowSound.play()
            if (!hohoho.isPlaying()){
                hohoho.play();
            }
        }
    }
    for (let i = 0; i < snowballs1.length; i++){
        if (snowballs1[i].y > penguin2Y && snowballs1[i].y < penguin2Y + penguin2Image.height/32 && snowballs1[i].x > penguin2X && snowballs1[i].x < penguin2X + penguin2Image.width/32){
            penguin2Lives = penguin2Lives - 1
            snowballs1.splice(i, 1)
            snowSound.play()
        } else if (snowballs1[i].y > height){
            snowballs1.splice(i, 1)
        } else if (snowballs1[i].y > height/2 && snowballs1[i].y < height/2 + 100 && snowballs1[i].x > skatingBearX + 25 && snowballs1[i].x < skatingBearX + 100){
            snowballs1.splice(i, 1)
            snowSound.play()
        } else if (snowballs1[i].y > height/2 - 200 && snowballs1[i].y < height/2 - 100 && snowballs1[i].x > skatingBear2X + 25 && snowballs1[i].x < skatingBear2X + 100){
            snowballs1.splice(i, 1)
            snowSound.play()
        } else if (snowballs1[i].y > santaY + 25 && snowballs1[i].y < santaY + 125 && snowballs1[i].x > santaX && snowballs1[i].x < santaX + 200){
            snowballs1.splice(i, 1)
            santaHealth = santaHealth + 1
            snowSound.play()
            if (!hohoho.isPlaying()){
                hohoho.play();
            }
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
    if (penguin1Lives <= 0 || penguin2Lives <= 0){
        fill(255)
        square(width/2, height/2, width)
        fill(0, 100, 0)
        image(villageImage, -150, 50, villageImage.width/4, villageImage.height/4)
        textSize(75)
        text("Merry Christmas!", 100, 100)
        textSize(25)
        text("Reload to play again!", width/2 - 100, height - 75)
        if (!merryChristmas.isPlaying()){
            merryChristmas.play();
        }
    }
    if (penguin1Lives <= 0){
        fill(0, 0, 255)
        textSize(45)
        text("GAME OVER. BLUE PENGUIN WINS!", 15, height - 20)
    }
    if (penguin2Lives <= 0){
        fill(255, 0, 0)
        textSize(45)
        text("GAME OVER. RED PENGUIN WINS!", 25, height - 20)
    }
}

function deadSanta(){
    if (santaHealth > santaMaxHealth){
        fill(255)
        square(width/2, height/2, width)
        image(angrySanta, 0, -50, angrySanta.width/6, angrySanta.height/6)
        fill(0)
        textSize(30)
        text("I'M PUTTING YOU BOTH ON THE NAUGHTY LIST!", 45, height - 50)
        textSize(25)
        text("You hit Santa too many times, reload to try again!", 125, height - 15)
        christmasMusic.pause()
        if (!santaCrash.isPlaying()){
            santaCrash.play();
        }
    }
}