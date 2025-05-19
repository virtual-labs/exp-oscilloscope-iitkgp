/*  Document Name: oscilloscope_knob.js
Created on : 24 aug, 2021
 Author     : Sukriti Dhang
 Modified on : 05 Aug 2025
 Author      :Prakriti Dhang
 */

var vmaxs;  //in volt
var tmaxs; // in msec  0.001; //in sec
$(document).ready(function () {

    //------------------------------knob of frequency(tmax)time/div(ms/div)----------------------//
    $("#fq-knob").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        //cursor: pointer,
        min: 0.1,
        max: 10,
        step: 0.1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
            if (flag_ch1 == 1) {
                drawsine1();
            }
            if (flag_ch1 == 2) {
                drawsquarewv1();
            }
            if (flag_ch1 == 3) {
                drawtraingwv1();
            }
            if (flag_ch2 == 6) {
                drawsine2();
            }
            if (flag_ch2 == 7) {
                drawsquarewv2();
            }
            if (flag_ch2 == 8) {
                drawtraingwv2();
            }
            if (currentMode === "both") {
                if (flag_ch1 == 1 && flag_ch2 == 6) bothwvsin();
                if (flag_ch1 == 2 && flag_ch2 == 7) bothwvsq();
                if (flag_ch1 == 3 && flag_ch2 == 8) bothwvtri();
                if ((flag_ch1 == 1) && (flag_ch2 == 7)) {
                    drawsinesquare();
                }
                if ((flag_ch1 == 1) && (flag_ch2 == 8)) {
                    drawsinetri();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 6)) {
                    drawsquaresine();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 8)) {
                    drawsquaretri();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 6)) {
                    drawtrisine();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 7)) {
                    drawtrisquare();
                }
            }

            if (currentMode === "xymode") {
                if (flag_ch1 === 1 && flag_ch2 === 6) xywvsin();
                if (flag_ch1 === 2 && flag_ch2 === 7) xywvsq();
                if (flag_ch1 === 3 && flag_ch2 === 8) xywvtri();
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    xysinesquare();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    xysinestri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    xysquaresine();
                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    xysquaretri();
                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    xytrisine();
                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    xytrisquare();
                }
            }
            // if ((flag_ch1 == 1) && (flag_ch2 == 6)) { //5
            //     bothwvsin();

            // }
            // if ((flag_ch1 == 2) && (flag_ch2 == 7)) { //11
            //     bothwvsq();
            // }
            // if ((flag_ch1 == 3) && (flag_ch2 == 8)) { //12
            //     bothwvtri();
            // }

            if (currentMode === "ground") {


                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    grndwvsinsq();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    grndwvsinetri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    grndwvsqsine();

                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    grndwvsqtri();

                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    grndwvtrisine();

                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    grndwvtrisq();

                }
                if (flag_ch1 === 1 && flag_ch2 === 6) {
                    grndwvsin();
                }
                if (flag_ch1 === 2 && flag_ch2 === 7) {
                    grndwvsq();
                }
                if (flag_ch1 === 3 && flag_ch2 === 8) {
                    grndwvtri();

                }
            }
            // if (flag_ch1 === 1 && flag_ch2 === 6) {
            //     xywvsin();
            // }
            // if (flag_ch1 === 2 && flag_ch2 === 7) {
            //     xywvsq();
            // }
            // if (flag_ch1 === 3 && flag_ch2 === 8) {
            //     xywvtri();

            // }
            // if (flag == 13){ //13
            //     xywvsin();
            // }
            // if (flag == 14){ //14
            //     xywvsq();   
            // }
            // if (flag == 15){ //15
            //     xywvtri();
            // }

        }
    });
    //-----------------------knob of amplitude1(vmax/div)-------------------------------//
    $("#amp-knob1").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
        min: 0.05,
        max: 10,
        step: 0.1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
            if (flag_ch1 == 1) {
                drawsine1();
            }
            if (flag_ch1 == 2) {
                drawsquarewv1();
            }
            if (flag_ch1 == 3) {
                drawtraingwv1();
            }
            if (currentMode === "both") {
                if (flag_ch1 == 1 && flag_ch2 == 6) bothwvsin();
                if (flag_ch1 == 2 && flag_ch2 == 7) bothwvsq();
                if (flag_ch1 == 3 && flag_ch2 == 8) bothwvtri();
                if ((flag_ch1 == 1) && (flag_ch2 == 7)) {
                    drawsinesquare();
                }
                if ((flag_ch1 == 1) && (flag_ch2 == 8)) {
                    drawsinetri();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 6)) {
                    drawsquaresine();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 8)) {
                    drawsquaretri();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 6)) {
                    drawtrisine();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 7)) {
                    drawtrisquare();
                }
            }

            if (currentMode === "xymode") {
                if (flag_ch1 === 1 && flag_ch2 === 6) xywvsin();
                if (flag_ch1 === 2 && flag_ch2 === 7) xywvsq();
                if (flag_ch1 === 3 && flag_ch2 === 8) xywvtri();
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    xysinesquare();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    xysinestri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    xysquaresine();
                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    xysquaretri();
                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    xytrisine();
                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    xytrisquare();
                }
            }
            // if ((flag_ch1 == 1) && (flag_ch2 == 6)) {
            //     bothwvsin();
            // }
            // if ((flag_ch1 == 2) && (flag_ch2 == 7)) {
            //     bothwvsq();
            // }
            // if ((flag_ch1 == 3) && (flag_ch2 == 8)) {
            //     bothwvtri();
            // }


            if (currentMode === "ground") {
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    grndwvsinsq();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    grndwvsinetri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    grndwvsqsine();

                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    grndwvsqtri();

                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    grndwvtrisine();

                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    grndwvtrisq();

                }
                if (flag_ch1 === 1 && flag_ch2 === 6) {
                    grndwvsin();
                }
                if (flag_ch1 === 2 && flag_ch2 === 7) {
                    grndwvsq();
                }
                if (flag_ch1 === 3 && flag_ch2 === 8) {
                    grndwvtri();

                }
            }
            // if (flag_ch1 === 1 && flag_ch2 === 6) {
            //     xywvsin();
            // }
            // if (flag_ch1 === 2 && flag_ch2 === 7) {
            //     xywvsq();
            // }
            // if (flag_ch1 === 3 && flag_ch2 === 8) {
            //     xywvtri();

            // }
        }
    });
    //-----------------------knob of amplitude2(vmax/div)-------------------------------//
    $("#amp-knob2").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
        min: 0.05,
        max: 10,
        step: 0.1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {

            if (flag_ch2 == 6) {
                drawsine2();
            }
            if (flag_ch2 == 7) {
                drawsquarewv2();
            }
            if (flag_ch2 == 8) {
                drawtraingwv2();
            }
            if (currentMode === "both") {
                if (flag_ch1 == 1 && flag_ch2 == 6) bothwvsin();
                if (flag_ch1 == 2 && flag_ch2 == 7) bothwvsq();
                if (flag_ch1 == 3 && flag_ch2 == 8) bothwvtri();
                if ((flag_ch1 == 1) && (flag_ch2 == 7)) {
                    drawsinesquare();
                }
                if ((flag_ch1 == 1) && (flag_ch2 == 8)) {
                    drawsinetri();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 6)) {
                    drawsquaresine();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 8)) {
                    drawsquaretri();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 6)) {
                    drawtrisine();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 7)) {
                    drawtrisquare();
                }
            }

            if (currentMode === "xymode") {
                if (flag_ch1 === 1 && flag_ch2 === 6) xywvsin();
                if (flag_ch1 === 2 && flag_ch2 === 7) xywvsq();
                if (flag_ch1 === 3 && flag_ch2 === 8) xywvtri();
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    xysinesquare();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    xysinestri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    xysquaresine();
                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    xysquaretri();
                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    xytrisine();
                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    xytrisquare();
                }
            }
            // if ((flag_ch1 == 1) && (flag_ch2 == 6)) {
            //     bothwvsin();
            // }
            // if ((flag_ch1 == 2) && (flag_ch2 == 7)) {
            //     bothwvsq();
            // }
            // if ((flag_ch1 == 3) && (flag_ch2 == 8)) {
            //     bothwvtri();
            // }

            if (currentMode === "ground") {
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    grndwvsinsq();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    grndwvsinetri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    grndwvsqsine();

                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    grndwvsqtri();

                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    grndwvtrisine();

                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    grndwvtrisq();

                }
                if (flag_ch1 === 1 && flag_ch2 === 6) {
                    grndwvsin();
                }
                if (flag_ch1 === 2 && flag_ch2 === 7) {
                    grndwvsq();
                }
                if (flag_ch1 === 3 && flag_ch2 === 8) {
                    grndwvtri();

                }
            }
            // if (flag_ch1 === 1 && flag_ch2 === 6) {
            //     xywvsin();
            // }
            // if (flag_ch1 === 2 && flag_ch2 === 7) {
            //     xywvsq();
            // }
            // if (flag_ch1 === 3 && flag_ch2 === 8) {
            //     xywvtri();

            // }
        }

    });
    /* ------------------------------------------------------------function generator 1------------------------------------------------------*/
    //------------------------------knob of frequency(hz)----------------------//
    $("#fq-knob-fng1").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        //cursor: pointer,
        min: 500,
        max: 5000,
        step: 500,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
            if (flag_ch1 == 1) {
                drawsine1();
            }
            if (flag_ch1 == 2) {
                drawsquarewv1();
            }
            if (flag_ch1 == 3) {
                drawtraingwv1();
            }
            if (currentMode === "both") {
                if (flag_ch1 == 1 && flag_ch2 == 6) bothwvsin();
                if (flag_ch1 == 2 && flag_ch2 == 7) bothwvsq();
                if (flag_ch1 == 3 && flag_ch2 == 8) bothwvtri();
                if ((flag_ch1 == 1) && (flag_ch2 == 7)) {
                    drawsinesquare();
                }
                if ((flag_ch1 == 1) && (flag_ch2 == 8)) {
                    drawsinetri();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 6)) {
                    drawsquaresine();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 8)) {
                    drawsquaretri();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 6)) {
                    drawtrisine();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 7)) {
                    drawtrisquare();
                }
            }

            if (currentMode === "xymode") {
                if (flag_ch1 === 1 && flag_ch2 === 6) xywvsin();
                if (flag_ch1 === 2 && flag_ch2 === 7) xywvsq();
                if (flag_ch1 === 3 && flag_ch2 === 8) xywvtri();
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    xysinesquare();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    xysinestri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    xysquaresine();
                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    xysquaretri();
                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    xytrisine();
                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    xytrisquare();
                }
            }


            if (currentMode === "ground") {
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    grndwvsinsq();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    grndwvsinetri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    grndwvsqsine();

                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    grndwvsqtri();

                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    grndwvtrisine();

                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    grndwvtrisq();

                }
                if (flag_ch1 === 1 && flag_ch2 === 6) {
                    grndwvsin();
                }
                if (flag_ch1 === 2 && flag_ch2 === 7) {
                    grndwvsq();
                }
                if (flag_ch1 === 3 && flag_ch2 === 8) {
                    grndwvtri();

                }
            }


        }

    });
    //-----------------------knob of amplitude1(volt)-------------------------------//
    $("#amp-knob-fng1").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
        min: -10,
        max: 10,
        step: 1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {
            if (flag_ch1 == 1) {
                drawsine1();
            }
            if (flag_ch1 == 2) {
                drawsquarewv1();
            }
            if (flag_ch1 == 3) {
                drawtraingwv1();
            }
            if (currentMode === "both") {
                if (flag_ch1 == 1 && flag_ch2 == 6) bothwvsin();
                if (flag_ch1 == 2 && flag_ch2 == 7) bothwvsq();
                if (flag_ch1 == 3 && flag_ch2 == 8) bothwvtri();
                if ((flag_ch1 == 1) && (flag_ch2 == 7)) {
                    drawsinesquare();
                }
                if ((flag_ch1 == 1) && (flag_ch2 == 8)) {
                    drawsinetri();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 6)) {
                    drawsquaresine();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 8)) {
                    drawsquaretri();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 6)) {
                    drawtrisine();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 7)) {
                    drawtrisquare();
                }
            }

            if (currentMode === "xymode") {
                if (flag_ch1 === 1 && flag_ch2 === 6) xywvsin();
                if (flag_ch1 === 2 && flag_ch2 === 7) xywvsq();
                if (flag_ch1 === 3 && flag_ch2 === 8) xywvtri();
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    xysinesquare();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    xysinestri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    xysquaresine();
                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    xysquaretri();
                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    xytrisine();
                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    xytrisquare();
                }
            }


            if (currentMode === "ground") {
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    grndwvsinsq();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    grndwvsinetri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    grndwvsqsine();

                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    grndwvsqtri();

                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    grndwvtrisine();

                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    grndwvtrisq();

                }
                if (flag_ch1 === 1 && flag_ch2 === 6) {
                    grndwvsin();
                }
                if (flag_ch1 === 2 && flag_ch2 === 7) {
                    grndwvsq();
                }
                if (flag_ch1 === 3 && flag_ch2 === 8) {
                    grndwvtri();

                }
            }

        }

    });
    /* --------------------------------------------------------function generator 2--------------------------------------------------------*/
    //------------------------------knob of frequency2(hz)----------------------//
    $("#fq-knob-fng2").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        //cursor: pointer,
        min: 500,
        max: 5000,
        step: 500,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {

            if (flag_ch2 == 6) {
                drawsine2();
            }
            if (flag_ch2 == 7) {
                drawsquarewv2();
            }
            if (flag_ch2 == 8) {
                drawtraingwv2();
            }
            if (currentMode === "both") {
                if (flag_ch1 == 1 && flag_ch2 == 6) bothwvsin();
                if (flag_ch1 == 2 && flag_ch2 == 7) bothwvsq();
                if (flag_ch1 == 3 && flag_ch2 == 8) bothwvtri();
                if ((flag_ch1 == 1) && (flag_ch2 == 7)) {
                    drawsinesquare();
                }
                if ((flag_ch1 == 1) && (flag_ch2 == 8)) {
                    drawsinetri();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 6)) {
                    drawsquaresine();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 8)) {
                    drawsquaretri();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 6)) {
                    drawtrisine();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 7)) {
                    drawtrisquare();
                }

            }

            if (currentMode === "xymode") {
                if (flag_ch1 === 1 && flag_ch2 === 6) xywvsin();
                if (flag_ch1 === 2 && flag_ch2 === 7) xywvsq();
                if (flag_ch1 === 3 && flag_ch2 === 8) xywvtri();
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    xysinesquare();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    xysinestri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    xysquaresine();
                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    xysquaretri();
                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    xytrisine();
                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    xytrisquare();
                }
            }

            if (currentMode === "ground") {
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    grndwvsinsq();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    grndwvsinetri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    grndwvsqsine();

                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    grndwvsqtri();

                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    grndwvtrisine();

                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    grndwvtrisq();

                }
                if (flag_ch1 === 1 && flag_ch2 === 6) {
                    grndwvsin();
                }
                if (flag_ch1 === 2 && flag_ch2 === 7) {
                    grndwvsq();
                }
                if (flag_ch1 === 3 && flag_ch2 === 8) {
                    grndwvtri();

                }
            }

        }

    });
    //-----------------------knob of amplitude2(volt)-------------------------------//
    $("#amp-knob-fng2").knob({
        readOnly: false,
        fgColor: '#6495ed', //'#999999',
        bgColor: '#bbd0f7', //'#dcdcdc',
        width: 100,
        height: 80,
        // cursor: pointer,
        min: -10,
        max: 10,
        step: 1,
        angleOffset: -125,
        angleArc: 250,
        'change': function (v) {

            if (flag_ch2 == 6) {
                drawsine2();
            }
            if (flag_ch2 == 7) {
                drawsquarewv2();
            }
            if (flag_ch2 == 8) {
                drawtraingwv2();
            }
            if (currentMode === "both") {
                if (flag_ch1 == 1 && flag_ch2 == 6) bothwvsin();
                if (flag_ch1 == 2 && flag_ch2 == 7) bothwvsq();
                if (flag_ch1 == 3 && flag_ch2 == 8) bothwvtri();
                if ((flag_ch1 == 1) && (flag_ch2 == 7)) {
                    drawsinesquare();
                }
                if ((flag_ch1 == 1) && (flag_ch2 == 8)) {
                    drawsinetri();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 6)) {
                    drawsquaresine();
                }
                if ((flag_ch1 == 2) && (flag_ch2 == 8)) {
                    drawsquaretri();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 6)) {
                    drawtrisine();
                }
                if ((flag_ch1 == 3) && (flag_ch2 == 7)) {
                    drawtrisquare();
                }
            }

            if (currentMode === "xymode") {
                if (flag_ch1 === 1 && flag_ch2 === 6) xywvsin();
                if (flag_ch1 === 2 && flag_ch2 === 7) xywvsq();
                if (flag_ch1 === 3 && flag_ch2 === 8) xywvtri();
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    xysinesquare();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    xysinestri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    xysquaresine();
                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    xysquaretri();
                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    xytrisine();
                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    xytrisquare();
                }
            }


            if (currentMode === "ground") {
                if (flag_ch1 === 1 && flag_ch2 === 7) {
                    grndwvsinsq();
                }
                if (flag_ch1 === 1 && flag_ch2 === 8) {
                    grndwvsinetri();
                }
                if (flag_ch1 === 2 && flag_ch2 === 6) {
                    grndwvsqsine();

                }
                if (flag_ch1 === 2 && flag_ch2 === 8) {
                    grndwvsqtri();

                }
                if (flag_ch1 === 3 && flag_ch2 === 6) {
                    grndwvtrisine();

                }
                if (flag_ch1 === 3 && flag_ch2 === 7) {
                    grndwvtrisq();

                }
                if (flag_ch1 === 1 && flag_ch2 === 6) {
                    grndwvsin();
                }
                if (flag_ch1 === 2 && flag_ch2 === 7) {
                    grndwvsq();
                }
                if (flag_ch1 === 3 && flag_ch2 === 8) {
                    grndwvtri();

                }
            }

        }

    });
});

