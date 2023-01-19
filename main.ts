input.onButtonPressed(Button.A, function () {
    y += 1
    x += 1
    led.plot(0, 0)
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let x = 0
let y = 0
basic.forever(function () {
	
})
