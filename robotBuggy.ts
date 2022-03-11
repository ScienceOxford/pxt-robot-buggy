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

let LF = 113;
let LB = 112;
let RF = 115;
let RB = 114;

namespace robotBuggy {
    
    /**
     * Set up which pins the motor driver is connected to
     * @param lf sets pin value for left motor forwards e.g. Pin.p13
     * @param lb sets pin value for left motor reverse e.g. Pin.p12
     * @param rf sets pin value for right motor forwards e.g. Pin.p15
     * @param rb sets pin value for right motor reverse e.g. Pin.p14
     */
    //% block="set up LF %lf set up LB %lb set up RF %rf set up RB %rb"
    //% lf.defl=Pin.p13 lb.defl=Pin.p12 rf.defl=Pin.p15 rb.defl=Pin.p14
    export function setup(lf: Pin, lb: Pin, rf: Pin, rb: Pin) {
        LF = lf,
        LB = lb,
        RF = rf,
        RB = rb
    }

    /**
     * Move your robot for a set amount of time
     * @param direction choose a direction, eg: forward
     * @param value choose a speed, eg: medium
     * @param duration choose how long the motor runs for in ms, eg: 1000
     */
    //% block="set direction %direction at speed %value for duration: %duration"
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
    }
}