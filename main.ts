let pas = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        pas = 1
        basic.showNumber(0)
    }
})
