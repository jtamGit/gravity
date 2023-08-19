let data = 0
input.onGesture(Gesture.ScreenUp, function () {
    data = 4
})
input.onGesture(Gesture.TiltRight, function () {
    data = 2
})
input.onGesture(Gesture.TiltLeft, function () {
    data = 5
})
input.onGesture(Gesture.LogoUp, function () {
    data = 1
})
input.onGesture(Gesture.ScreenDown, function () {
    data = 3
})
input.onGesture(Gesture.LogoDown, function () {
    data = 6
})
basic.forever(function () {
	
})
