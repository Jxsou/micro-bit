input.onButtonPressed(Button.A, function () {
    led.plot(x - 1, 4)
    led.unplot(x, 4)
    x += -1
})
input.onButtonPressed(Button.B, function () {
    led.plot(x + 1, 4)
    led.unplot(x, 4)
    x += 1
})
let x = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
x = 2
