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
let data = 0
serial.redirectToUSB()
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate57600
)
basic.forever(function () {
    serial.writeNumber(data)
    basic.pause(100)
})
