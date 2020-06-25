let compass = 0
let dir = 0
basic.forever(function () {
    compass = input.compassHeading()
    if (45 <= compass && compass < 135) {
        dir = ArrowNames.East
    } else if (135 <= compass && compass < 225) {
        dir = ArrowNames.South
    } else if (225 <= compass && compass < 315) {
        dir = ArrowNames.West
    } else {
        dir = ArrowNames.North
    }
    basic.showArrow(dir)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
})
