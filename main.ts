let bright = 0
input.onGesture(Gesture.FreeFall, function () {
    flash()
})
function flash () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    for (let index = 0; index < 10; index++) {
        bright += -25
        led.setBrightness(bright)
        basic.pause(40)
    }
    basic.clearScreen()
    bright = 255
    led.setBrightness(bright)
}
