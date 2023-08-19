data = 0

def on_gesture_screen_up():
    global data
    data = 4
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

def on_gesture_tilt_right():
    global data
    data = 2
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_tilt_left():
    global data
    data = 5
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_logo_up():
    global data
    data = 1
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_screen_down():
    global data
    data = 3
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_gesture_logo_down():
    global data
    data = 6
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_forever():
    pass
basic.forever(on_forever)
