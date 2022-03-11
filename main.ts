input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        robotBuggy.movement(Dir.forward, Speed.medium, 2000)
        robotBuggy.movement(Dir.left, Speed.fast, 1000)
        robotBuggy.movement(Dir.backward, Speed.medium, 1000)
    }
})
robotBuggy.setup(
Pin.p13,
Pin.p12,
Pin.p15,
Pin.p14
)
