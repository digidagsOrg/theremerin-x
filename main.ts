input.onButtonPressed(Button.A, function () {
    playSound = true
    // Aktiviert den internen Pull-up-Widerstand
    pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
    while (playSound) {
        analogValue = pins.analogReadPin(AnalogPin.P1)
        console.log(`Analogwert: ${analogValue}`);
if (analogValue > 0 && analogValue < 1000) {
            frequency = map(analogValue, 0, 1023, 220, 3000)
            music.ringTone(frequency)
            console.log(`Frequenz: ${frequency}`);
        } else {
            music.stopAllSounds()
            console.log("Keine Leitfähigkeit - kein Ton");
        }
        basic.pause(10)
    }
})
// Funktion zur Umrechnung von Analogwerten in Frequenz
function map (x: number, in_min: number, in_max: number, out_min: number, out_max: number) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
input.onButtonPressed(Button.B, function () {
    playSound = false
    music.stopAllSounds()
    console.log("Wiedergabe gestoppt");
})
let playSound = false
let frequency = 0
let analogValue = 0
