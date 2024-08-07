let leitura = 0
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.clearScreen()
basic.pause(200)
basic.forever(function () {
    leitura = pins.analogReadPin(AnalogPin.P0)
    if (leitura < 500) {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        basic.showNumber(leitura)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
        basic.showNumber(leitura)
        basic.pause(2000)
    }
})
