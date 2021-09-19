bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Heart)
})
bluetooth.startTemperatureService()
basic.showIcon(IconNames.Heart)
