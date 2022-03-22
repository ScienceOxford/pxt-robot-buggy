input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    robotBuggy.movement(Dir.forward, Speed.medium, 2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    robotBuggy.movementIndependent(
    750,
    750,
    2000,
    IconNames.Heart
    )
})
robotBuggy.activateRobot()
