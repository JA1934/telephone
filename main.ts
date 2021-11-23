input.onButtonPressed(Button.A, function () {
    radio.sendString("" + received_word + "ate")
})
radio.onReceivedString(function (receivedString) {
    received_word = receivedString
    basic.showString(received_word)
    radio.setGroup(40)
})
let received_word = ""
radio.setGroup(30)
basic.forever(function () {
	
})
