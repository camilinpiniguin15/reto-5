let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature()
    basic.showNumber(temperatura)
    if (temperatura > 7) {
        music.playTone(659, music.beat(BeatFraction.Double))
    }
    basic.pause(1000)
})
