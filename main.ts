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
    serial.writeLine("accX:" + input.acceleration(Dimension.X) + ",accY:" + input.acceleration(Dimension.Y) + ",accZ:" + input.acceleration(Dimension.Z))
    basic.pause(100)
})
