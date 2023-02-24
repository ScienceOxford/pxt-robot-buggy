input.onButtonPressed(Button.A, function () {
    robotBuggy.movement(Dir.forward, Speed.medium, 2000)
    robotBuggy.turning(Turn.left, 1000)
})
robotBuggy.activateRobot()
