serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    if (serial.readString() == "Ahoj") {
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
        basic.clearScreen()
    }
})
serial.setBaudRate(BaudRate.BaudRate9600)
basic.forever(function () {
    serial.writeNumbers([
    input.acceleration(Dimension.X),
    input.acceleration(Dimension.Y),
    input.acceleration(Dimension.Z)
    ])
    basic.pause(200)
})
