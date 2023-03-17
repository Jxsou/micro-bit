input.onButtonPressed(Button.A, function () {
    if (x >= 1) {
        led.plot(x - 1, 4)
        led.unplot(x, 4)
        x += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    shootingPosition = x
    for (let index = 0; index < 4; index++) {
        led.plot(shootingPosition, y - 1)
        y += -1
        basic.pause(100)
        led.unplot(shootingPosition, y)
    }
    y = 4
})
input.onButtonPressed(Button.B, function () {
    if (x <= 3) {
        led.plot(x + 1, 4)
        led.unplot(x, 4)
        x += 1
    }
})
let shootingPosition = 0
let y = 0
let x = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
x = 2
y = 4
loops.everyInterval(2500, function () {
    led.plot(randint(0, 4), 0)
})
