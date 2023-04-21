enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    recibido = receivedNumber
})
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
let enviado = 0
let recibido = 0
let barposition = 0
barposition = 2
let score = 0
let ballx = 3
let Bally = 2
let balldx = -1
let balldy = -1
let tiempo = 500
recibido = 0
radio.setGroup(1)
// codigo de la barra
basic.forever(function () {
    while (recibido == 0) {
        enviado = randint(1, 100)
        radio.sendNumber(enviado)
        basic.pause(100)
    }
    radio.sendNumber(enviado)
    led.plot(barposition, 4)
    led.plot(barposition + 1, 4)
    if (enviado > recibido) {
        led.plot(ballx + balldx, Bally + balldy)
        led.unplot(ballx, Bally)
        basic.pause(tiempo)
        tiempo = tiempo - 3
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
            score = score + 1
        }
        if (Bally == 4) {
            basic.showString("Score")
            basic.showString("" + (score))
        }
    }
})
