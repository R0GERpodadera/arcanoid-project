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
let puntos = 0
let barposition = 0
barposition = 2
let ballspeed = 500
let score = 0
let ballx = 3
let Bally = 2
let balldx = -1
let balldy = -1
// codigo de la barra
basic.forever(function () {
    led.plot(barposition, 4)
    led.plot(barposition + 1, 4)
    led.plot(ballx + balldx, Bally + balldy)
    led.unplot(ballx, Bally)
    basic.pause(500)
    ballx = ballx + balldx
    Bally = Bally + balldy
    if (ballx == 4) {
        balldx = balldx * -1
    }
    if (ballx == 0) {
        balldx = balldx * -1
    }
    if (Bally == 0) {
        balldy = balldy * -1
    }
    if (Bally == 3 && (ballx == barposition || ballx == barposition + 1)) {
        balldy = balldy * -1
        puntos = puntos + 1
    }
    if (Bally == 4) {
        basic.showString("Score")
        basic.showString("" + (puntos))
    }
})
