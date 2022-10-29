buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    turtle.setPosition(0, 0)
    turtle.turnRight()
    for (let index = 0; index < 4; index++) {
        turtle.forward(4)
        turtle.turnLeft()
        turtle.forward(1)
        turtle.turnLeft()
        turtle.forward(4)
        turtle.turnRight()
        turtle.forward(1)
        turtle.turnLeft()
    }
})
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
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    Who = randint(1, 4)
    if (Who == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (Who == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (Who == 3) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.A, function () {
    RPS = randint(1, 3)
    if (RPS == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (RPS == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("From Microbit Anas")
    music.playMelody("C D C D C E F G ", 120)
})
buttonClicks.onButtonDoubleClicked(buttonClicks.AorB.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
    if (Math.randomBoolean()) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . . .
            . # . # .
            . . . . .
            `)
    }
})
let RPS = 0
let Who = 0
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
