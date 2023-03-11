let personas_salieron = 0
let contador_personas = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(personas_salieron)
})
input.onButtonPressed(Button.A, function () {
    contador_personas += 0 + 1
    basic.showNumber(contador_personas)
})
input.onButtonPressed(Button.B, function () {
    if (contador_personas < 1) {
        basic.showNumber(0)
    } else {
        contador_personas += 0 - 1
        personas_salieron += 0 + 1
        basic.showNumber(contador_personas)
    }
})
