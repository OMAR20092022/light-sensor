basic.clearScreen()
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showString("DAY")
    } else {
        basic.showString("NIGHT")
    }
})
