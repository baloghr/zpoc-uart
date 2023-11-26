serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    received = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    if (received == "Ahoj") {
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
        basic.clearScreen()
    }
})
let received = ""
serial.setBaudRate(BaudRate.BaudRate9600)
basic.forever(function () {
    serial.writeNumbers([
    input.acceleration(Dimension.X),
    input.acceleration(Dimension.Y),
    input.acceleration(Dimension.Z)
    ])
    basic.pause(100)
})
