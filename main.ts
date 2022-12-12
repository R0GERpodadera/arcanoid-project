input.onButtonPressed(Button.A, function () {
    if (barposition > 0) {
        led.unplot(barposition, 4)
        led.unplot(barposition + 1, 4)
        barposition += -1
        led.plot(barposition, 4)
        led.plot(barposition + 1, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (barposition < 3) {
        led.unplot(barposition, 4)
        barposition += 1
        led.plot(barposition, 4)
        led.plot(barposition + 1, 4)
    }
})
let barposition = 0
barposition = 2
let ballx = randint(1, 3)
let Bally = 0
let trueorfalse = 100
let random = randint(1, 2)
let ballspeed = 500
let score = 0
// codigo de la barra
basic.forever(function () {
    led.plot(barposition, 4)
    led.plot(barposition + 1, 4)
    while (trueorfalse == 150) {
        led.plot(ballx, Bally)
        basic.pause(ballspeed)
        ballspeed += -4
        led.unplot(ballx, Bally)
        Bally += 1
        ballx += -1
        if (Bally == 3 && (ballx == barposition || (ballx == barposition + 1 || (ballx == barposition - 1 || ballx == barposition + 1 + 0)))) {
            trueorfalse = 0
            score += 1
        }
        if (Bally == 4) {
            basic.showString("Score")
            basic.showString("" + (score))
        }
    }
    while (trueorfalse == 130) {
        led.plot(ballx, Bally)
        basic.pause(ballspeed)
        ballspeed += -4
        led.unplot(ballx, Bally)
        Bally += 1
        ballx += 1
        if (Bally == 3 && (ballx == barposition || (ballx == barposition + 1 || (ballx == barposition - 1 || ballx == barposition + 1 + 0)))) {
            trueorfalse = 0
            score += 1
        }
        if (Bally == 4) {
            basic.showString("Score")
            basic.showString("" + (score))
        }
    }
    while (trueorfalse == 100) {
        led.plot(ballx, Bally)
        basic.pause(ballspeed)
        ballspeed += -4
        led.unplot(ballx, Bally)
        if (random == 1) {
            Bally += 1
            ballx += 1
        }
        if (random == 2) {
            Bally += 1
            ballx += -1
        }
        if (ballx == 0) {
            trueorfalse = 130
        }
        if (ballx == 4) {
            trueorfalse = 150
        }
        if (Bally == 3 && (ballx == barposition || (ballx == barposition + 1 || (ballx == barposition - 1 || ballx == barposition + 1 + 0)))) {
            trueorfalse = 0
            score += 1
        }
        if (Bally == 4) {
            basic.showString("Score:")
            basic.showString("" + (score))
        }
    }
    while (trueorfalse == 50) {
        led.plot(ballx, Bally)
        basic.pause(ballspeed)
        ballspeed += -4
        led.unplot(ballx, Bally)
        ballx += -1
        Bally += -1
        if (Bally == 0) {
            trueorfalse = 100
            random = randint(1, 2)
        }
    }
    while (trueorfalse == 10) {
        led.plot(ballx, Bally)
        basic.pause(ballspeed)
        ballspeed += -4
        led.unplot(ballx, Bally)
        ballx += 1
        Bally += -1
        if (Bally == 0) {
            trueorfalse = 100
            random = randint(1, 2)
        }
    }
    while (trueorfalse == 0) {
        led.plot(ballx, Bally)
        basic.pause(ballspeed)
        ballspeed += -4
        led.unplot(ballx, Bally)
        if (random == 1) {
            ballx += -1
            Bally += -1
        }
        if (random == 2) {
            ballx += 1
            Bally += -1
        }
        if (Bally == 0) {
            ballx = 1
        }
        if (ballx == 0) {
            trueorfalse = 10
        }
        if (ballx == 4) {
            trueorfalse = 50
        }
        if (Bally == 0) {
            trueorfalse = 100
            random = randint(1, 2)
        }
    }
})
