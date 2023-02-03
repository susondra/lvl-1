input.onButtonPressed(Button.A, function () {
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    x += 1
})
input.onGesture(Gesture.Shake, function () {
    led.setBrightness(128)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    x = 0
    y = 4
    led.setBrightness(255)
})
let y = 0
let x = 0
x = 0
y = 4
basic.forever(function () {
    if (x == 5) {
        x = 0
        y += -1
    }
})
