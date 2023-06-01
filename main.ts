enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (intro == 1) {
        recibido = receivedNumber
        radio.sendNumber(enviado)
    }
    if (intro == 0) {
        if (OrgRec == 1) {
            ballx = receivedNumber
        }
        basic.pause(10)
        if (OrgRec == 2) {
            Bally = receivedNumber
        }
        basic.pause(10)
        if (OrgRec == 3) {
            balldx = receivedNumber
            activo = 1
            balldy = 1
        }
        basic.pause(10)
        OrgRec = OrgRec + 1
        if (OrgRec == 4) {
            OrgRec = 1
        }
    }
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
let score = 0
let activo = 0
let OrgRec = 0
let intro = 0
let balldy = 0
let balldx = 0
let Bally = 0
let ballx = 0
let barposition = 0
let recibido = 0
let enviado = 0
enviado = randint(1, 100)
recibido = 0
barposition = 2
ballx = 3
Bally = 2
balldx = -1
balldy = -1
let tiempo = 500
recibido = 0
intro = 1
OrgRec = 1
radio.setGroup(1)
// codigo de la barra
basic.forever(function () {
    if (intro == 1) {
        while (recibido == 0) {
            radio.sendNumber(enviado)
            basic.pause(100)
        }
        led.plot(barposition, 4)
        led.plot(barposition + 1, 4)
        if (enviado > recibido) {
            activo = 1
            basic.pause(100)
        } else {
            activo = 0
        }
        intro = 0
    }
    if (activo == 1) {
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
        if (Bally == 0 && balldy == -1) {
            led.unplot(ballx, Bally)
            basic.pause(30)
            radio.sendNumber(ballx)
            basic.pause(30)
            radio.sendNumber(0)
            basic.pause(30)
            radio.sendNumber(balldx)
            activo = 0
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
