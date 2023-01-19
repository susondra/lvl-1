input.onButtonPressed(Button.A, function () {
    led.plot(x, y)
    x += 1
})
input.onGesture(Gesture.ScreenUp, function () {
	
})
input.onButtonPressed(Button.B, function () {
    x = 0
    y += -1
})
input.onGesture(Gesture.Shake, function () {
	
})
let y = 0
let x = 0
x = 0
y = 4
