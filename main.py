from microbit import *
import music

while True:
    # Lese den analogen Wert von Pin 1 (Wertebereich: 0 bis 1023)
    pot_value = pin1.read_analog()
    
    # Umrechnen des Potentiometerwerts in eine Frequenz für den Ton
    # Die Frequenz wird hier einfach durch eine Skalierung des Potentiometerwerts bestimmt.
    # Du kannst die Skalierung anpassen, um den Frequenzbereich zu ändern.
    frequency = pot_value * 2  # Beispiel: Skalierungsfaktor 2
    
    # Spiele den Ton mit der berechneten Frequenz
    # Wir verwenden hier die music.pitch-Funktion, die es erlaubt, eine Frequenz direkt anzugeben.
    # Die Dauer des Tons wird kurz gehalten, damit man bei Änderungen des Potentiometerwerts eine sofortige Rückmeldung bekommt.
    music.pitch(frequency, 10)
    
    # Kurze Pause, um die CPU nicht zu überlasten
    sleep(10)