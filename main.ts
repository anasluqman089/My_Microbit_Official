enum RadioMessage {
    message1 = 49434,
    Smile = 23553,
    Sad = 2621
}
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
    for (let index = 0; index < 3; index++) {
        music.playMelody("B A G A F E F E ", 120)
        pins.servoWritePin(AnalogPin.P2, 50)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P2, 100)
        basic.pause(200)
        pins.servoWritePin(AnalogPin.P2, 150)
        basic.pause(200)
    }
})
buttonClicks.onButtonSingleClicked(buttonClicks.AorB.B, function () {
    radio.sendNumber(69)
    music.playMelody("C5 B C5 B C5 A G F ", 120)
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    radio.sendMessage(RadioMessage.Sad)
    music.playMelody("C5 B B C5 A G G A ", 120)
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("From Microbit Anas")
    music.playMelody("C D C D C E F G ", 120)
})
radio.onReceivedMessage(RadioMessage.Smile, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playMelody("C C D D E E F F ", 120)
})
radio.onReceivedMessage(RadioMessage.Sad, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    music.playMelody("C D D C E F F E ", 120)
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    music.playMelody("C5 C5 B B A A G G ", 120)
    radio.sendMessage(RadioMessage.Smile)
})
radio.setGroup(69)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . # . #
    . . . . .
    # . . . #
    . . . . .
    # . # . #
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    # . # . #
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
