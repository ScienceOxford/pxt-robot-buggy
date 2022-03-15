/**
* Robot Buggy blocks
* http://scienceoxford.github.io/robot-buggy
* https://scienceoxford.com/schools/primary-schools/shows-workshops-primary/
*/

enum Dir {
    forward,
    backward,
    left,
    right
}

enum Speed {
    slow = 500,
    medium = 750,
    fast = 1000
}

enum Pin {
    p0 = 100,
    p1 = 101,
    p2 = 102,
    p8 = 108,
    p12 = 112,
    p13 = 113,
    p14 = 114,
    p15 = 115,
    p16 = 116
}

enum Motors {
    left,
    right,
    //% block="left+right"
    both
}

let LF = 113;
let LB = 112;
let RF = 115;
let RB = 114;

//% weight=100 color=#CCCC00 icon="U+263C"
namespace robotBuggy {
    
    /**
     * Stop your robot's motors
     */
    //% block="stop robot motors"
    //% advanced=true
    export function stopRobot() {
        pins.analogWritePin(LF, 0)
        pins.analogWritePin(LB, 0)
        pins.analogWritePin(RF, 0)
        pins.analogWritePin(RB, 0)
    }

    /**
     * Set up which pins the motor driver is connected to
     * @param lf sets pin value for left motor forwards e.g. Pin.p13
     * @param lb sets pin value for left motor reverse e.g. Pin.p12
     * @param rf sets pin value for right motor forwards e.g. Pin.p15
     * @param rb sets pin value for right motor reverse e.g. Pin.p14
     */
    //% block="set up left forward %lf set up left backward %lb set up right forward %rf set up right backward %rb"
    //% lf.defl=Pin.p13 lb.defl=Pin.p12 rf.defl=Pin.p15 rb.defl=Pin.p14
    //% advanced=true
    export function setup(lf: Pin, lb: Pin, rf: Pin, rb: Pin) {
        LF = lf,
        LB = lb,
        RF = rf,
        RB = rb
        stopRobot()
    }

    /**
     * Sets up your robot to the default settings
     */
    //% block="activate robot"
    export function activateRobot() {
        stopRobot()
    }
    
    /**
     * Move your robot for a set amount of time
     * @param direction choose a direction, eg: forward
     * @param value choose a speed, eg: medium
     * @param duration choose how long the motor runs for in ms, eg: 1000
     */
    //% block="set direction %direction at speed %value for duration %duration"
    //% value.defl=medium
    //% duration.shadow=timePicker
    export function movement(direction: Dir, value: Speed, duration: number) {
        if (direction == Dir.forward) {
            pins.analogWritePin(LF, Math.abs(value))
            pins.analogWritePin(RF, Math.abs(value))
        } else if (direction == Dir.backward) {
            pins.analogWritePin(LB, Math.abs(value))
            pins.analogWritePin(RB, Math.abs(value))
        } else if (direction == Dir.left) {
            pins.analogWritePin(LB, Math.abs(value))
            pins.analogWritePin(RF, Math.abs(value))
        } else if (direction == Dir.right) {
            pins.analogWritePin(LF, Math.abs(value))
            pins.analogWritePin(RB, Math.abs(value))
        }
        basic.pause(duration)
        stopRobot()
    }

    /**
     * Control your robot's motors
     * @param motor choose a motor, eg: left
     * @param value choose a speed, eg: 750
     * @param duration choose how long the motor runs for in ms, eg: 1000
     * @param image choose which icon to display whilst moving, eg: duck
     */
    //% block="set motor %motor at speed %value for duration %duration with image %image"
    //% value.min=-1023 value.max=1023 value.defl=750
    //% duration.shadow=timePicker
    //% advanced=true
    export function movementAdvanced(motor: Motors, value: number, duration: number, image: IconNames) {
        images.iconImage(image).showImage(0)
        if (motor == Motors.left && value > 0) {
            pins.analogWritePin(LF, Math.abs(value))
        } else if (motor == Motors.left && value < 0) {
            pins.analogWritePin(LB, Math.abs(value))
        } else if (motor == Motors.right && value > 0) {
            pins.analogWritePin(RF, Math.abs(value))
        } else if (motor == Motors.right && value < 0) {
            pins.analogWritePin(RB, Math.abs(value))
        } else if (motor == Motors.both && value > 0) {
            pins.analogWritePin(LF, Math.abs(value))
            pins.analogWritePin(RF, Math.abs(value))
        } else if (motor == Motors.both && value < 0) {
            pins.analogWritePin(LB, Math.abs(value))
            pins.analogWritePin(RB, Math.abs(value))
        }
        basic.pause(duration)
        stopRobot()
        basic.clearScreen()
    }

}