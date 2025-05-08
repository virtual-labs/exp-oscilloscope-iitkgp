/* Document Name: oscilloscopexymodepossibilities.js
 Created on :05 May, 2025
 Author     : Prakriti Dhang
 */

var flag_ch1, flag_ch2;
var vp1, vp2;
var posy1, posy2;
var phsl;
var frqfng1, frqfng2;
var axes = {};
var vmaxs;  //in volt
var tmaxs;

function posiy1chnge() {
    posy1 = document.getElementById("positiony1").value;

    if (flag_ch1 == 1) {
        drawsine1();
    }
    if (flag_ch1 == 2) {
        drawsquarewv1();
    }
    if (flag_ch1 == 3) {
        drawtraingwv1();
    }



    /************************************ ground for different wave possibilities  ****************************************/
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
        if ((flag_ch1 == 2) && (flag_ch2 == 6)) { //
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

}

function posiy2chnge() {
    posy2 = document.getElementById("positiony2").value;
    if (flag_ch2 == 6) {
        drawsine2();
    }
    if (flag_ch2 == 7) {
        drawsquarewv2();
    }
    if (flag_ch2 == 8) {
        drawtraingwv2();
    }



    /************************************ ground for different wave possibilities  ****************************************/
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
        if ((flag_ch1 == 2) && (flag_ch2 == 6)) { //
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
}

function posix2chnge() {
    phsl = document.getElementById("positionx").value;
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


    /************************************ ground for different wave possibilities  ****************************************/
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
        if ((flag_ch1 == 2) && (flag_ch2 == 6)) { //
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
}

function ampfng1() {
    vp1 = document.getElementById("amp-knob-fng1").value;
    if (flag_ch1 == 1) {
        drawsine1();
    }
    if (flag_ch1 == 2) {
        drawsquarewv1();
    }
    if (flag_ch1 == 3) {
        drawtraingwv1();
    }



    /************************************ ground for different wave possibilities  ****************************************/
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
        if ((flag_ch1 == 2) && (flag_ch2 == 6)) { //
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
}

function freqfng1() {
    frqfng1 = document.getElementById("fq-knob-fng1").value;
    if (flag_ch1 == 1) {
        drawsine1();
    }
    if (flag_ch1 == 2) {
        drawsquarewv1();
    }
    if (flag_ch1 == 3) {
        drawtraingwv1();
    }



    /************************************ ground for different wave possibilities  ****************************************/
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
        if ((flag_ch1 == 2) && (flag_ch2 == 6)) { //
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
}

function ampfng2() {
    vp2 = document.getElementById("amp-knob-fng2").value;
    if (flag_ch2 == 6) {
        drawsine2();
    }
    if (flag_ch2 == 7) {
        drawsquarewv2();
    }
    if (flag_ch2 == 8) {
        drawtraingwv2();
    }



    /************************************ ground for different wave possibilities  ****************************************/
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
        if ((flag_ch1 == 2) && (flag_ch2 == 6)) { //
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
}

function freqfng2() {
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    if (flag_ch2 == 6) {
        drawsine2();
    }
    if (flag_ch2 == 7) {
        drawsquarewv2();
    }
    if (flag_ch2 == 8) {
        drawtraingwv2();
    }


    /************************************ ground for different wave possibilities  ****************************************/
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
        if ((flag_ch1 == 2) && (flag_ch2 == 6)) { //
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
}
/********************* xy mode for sine square   *******************************/
function xysinesquare() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    sinesquarexymode();
}





function sinesquarexymode() {
    vp1 = document.getElementById("amp-knob-fng1").value;
    vp2 = document.getElementById("amp-knob-fng2").value;;
    frqfng1 = document.getElementById("fq-knob-fng1").value;
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
    posy2 = document.getElementById("positiony2").value;
    tmaxs = document.getElementById("fq-knob").value * 10 * Math.pow(10, -3);

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    //flag = 13;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = (vp1 / 2) * Math.sin(2 * 3.1415 * frqfng1 * x[i] + phsl * 3.1415 / 180);
    }

    var i, x0, y0, xscale, yscales1, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscales1 = axes.yscale1;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscales1;

    // square wave from FG 2

    var x1 = new Array(), y1 = new Array(), ys1 = new Array();  // x,y plotting variables
    //var dt, tstart, tstop;             // time variables

    // define plot paramaters
    //tstart = 0; //in sec
    //tstop = tmaxs;
    //dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = tstart + j * dt;
        y1[j] = vp2 * Math.sin(2 * 3.1415 * frqfng2 * x1[j] + phsl * 3.1415 / 180);
        ys1[j] = (vp2 / 2) * Math.sign(y1[j]);
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale2;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        yp = x0 + y[j] * yscales1 + p + 120;
        yp1 = y0 - ys1[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(yp, yp1);
        else
            ctx.lineTo(yp, yp1);
    }

    ctx.stroke();
}


/*********************  xy mode for sine tri  *******************************/
function xysinestri() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    sinestrixymode();
}

function sinestrixymode() {
    vp1 = document.getElementById("amp-knob-fng1").value;
    vp2 = document.getElementById("amp-knob-fng2").value;;
    frqfng1 = document.getElementById("fq-knob-fng1").value;
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
    posy2 = document.getElementById("positiony2").value;
    tmaxs = document.getElementById("fq-knob").value * 10 * Math.pow(10, -3);
    var r = 10 * Math.pow(10, 3);//document.getElementById("restr").value*Math.pow(10,3);
    var c = 0.1 * Math.pow(10, -6);//document.getElementById("captr").value*Math.pow(10,-6);
    var scalefactor = parseInt(r) * parseFloat(c);//-(1/r*c);

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    //flag = 13;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = (vp1 / 2) * Math.sin(2 * 3.1415 * frqfng1 * x[i] + phsl * 3.1415 / 180);
    }

    var i, x0, y0, xscale, yscales1, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscales1 = axes.yscale1;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscales1;


    /////// tri from FG 2
    var x1 = new Array(), y2 = new Array(), y3 = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    // define plot paramaters
    // tstart = 0; //in sec
    //tstop = tmaxs;
    //dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = (tstart + j * dt).toPrecision(6);
        var p = 2 * 3.1415 * frqfng2 * x1[j] + (phsl + 270) * 3.1415 / 180;
        var z = Math.sin(p);
        y3[j] = -(parseFloat(vp2 / 2) * Math.asin(z)); //-Math.sign(Vp *Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180));
        y2[j] = (Math.pow(10, -3) / scalefactor) * (parseFloat(y3[j])); //- parseFloat(y2[i + 101]));
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale2;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        yp = y0 + x[j] * yscales1 + p + 120;
        yp1 = y0 - y2[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(yp, yp1);
        else
            ctx.lineTo(yp, yp1);
    }

    ctx.stroke();


}

/*********************** xy mode for  square sine  *****************************/
function xysquaresine() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    squaresinexymode();
}

function squaresinexymode() {
    vp1 = document.getElementById("amp-knob-fng1").value;
    vp2 = document.getElementById("amp-knob-fng2").value;
    frqfng1 = document.getElementById("fq-knob-fng1").value;
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
    posy2 = document.getElementById("positiony2").value;
    tmaxs = document.getElementById("fq-knob").value * 10 * Math.pow(10, -3);// in msec  0.001; //in sec

    //---------------------------------------------------------Square wave (Function Generator 1)-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array(), ys = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    // flag = 14;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp1 * Math.sin(2 * 3.1415 * frqfng1 * x[i] + phsl * 3.1415 / 180);
        ys[i] = (vp1 / 2) * Math.sign(y[i]);
    }

    var i, x0, y0, xscale, yscales1, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscales1 = axes.yscale1;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;

    ///-------------------------------------------------Sine wave (Function Generator 2)------//
    var x1 = new Array(), y1 = new Array();  // x,y plotting variables
    var dt1, tstart1, tstop1;             // time variables

    // define plot paramaters
    tstart1 = 0; //in sec
    tstop1 = tmaxs;
    dt1 = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = tstart1 + j * dt1;
        y1[j] = (vp2 / 2) * Math.sin(2 * 3.1415 * frqfng2 * x1[j] + phsl * 3.1415 / 180);
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale2;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        yp = y0 - ys[j] * yscales1 + p + 120;
        yp1 = y0 - y1[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(yp, yp1);
        else
            ctx.lineTo(yp, yp1);
    }

    ctx.stroke();

}

/************************* xy mode for  square  tri ***************************/
function xysquaretri() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    squaretrixymode();
}

function squaretrixymode() {
    vp1 = document.getElementById("amp-knob-fng1").value;
    vp2 = document.getElementById("amp-knob-fng2").value;;
    frqfng1 = document.getElementById("fq-knob-fng1").value;
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
    posy2 = document.getElementById("positiony2").value;
    tmaxs = document.getElementById("fq-knob").value * 10 * Math.pow(10, -3);// in msec  0.001; //in sec
    var r = 10 * Math.pow(10, 3);//document.getElementById("restr").value*Math.pow(10,3);
    var c = 0.1 * Math.pow(10, -6);//document.getElementById("captr").value*Math.pow(10,-6);
    var scalefactor = parseInt(r) * parseFloat(c);//-(1/r*c);
    //---------------------------------------------------------Square wave (Function Generator 1)-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array(), ys = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    //flag = 14;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp1 * Math.sin(2 * 3.1415 * frqfng1 * x[i] + phsl * 3.1415 / 180);
        ys[i] = (vp1 / 2) * Math.sign(y[i]);
    }

    var i, x0, y0, xscale, yscales1, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscales1 = axes.yscale1;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;


    //-------------------------------------------------Triangular wave (Function Generator 2)-------------------------------------------------//

    var x1 = new Array(), y2 = new Array(), y3 = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    // define plot paramaters
    // tstart = 0; //in sec
    // tstop = tmaxs;
    // dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = (tstart + j * dt).toPrecision(6);
        var p = 2 * 3.1415 * frqfng2 * x1[j] + (phsl + 270) * 3.1415 / 180;
        var z = Math.sin(p);
        y3[j] = -(parseFloat(vp2 / 2) * Math.asin(z)); //-Math.sign(Vp *Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180));
        y2[j] = (Math.pow(10, -3) / scalefactor) * (parseFloat(y3[j])); //- parseFloat(y2[i + 101]));
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale2;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        yp = y0 + ys[j] * yscales1 + p + 120;
        yp1 = y0 - y2[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(yp, yp1);
        else
            ctx.lineTo(yp, yp1);
    }

    ctx.stroke();
}

/************************* xy mode for tri sine  ***************************/
function xytrisine() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    trisinexymode();
}
function trisinexymode() {
    vp1 = document.getElementById("amp-knob-fng1").value;
    vp2 = document.getElementById("amp-knob-fng2").value;;
    frqfng1 = document.getElementById("fq-knob-fng1").value;
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
    posy2 = document.getElementById("positiony2").value;
    tmaxs = document.getElementById("fq-knob").value * 10 * Math.pow(10, -3);// in msec  0.001; //in sec

    var r = 10 * Math.pow(10, 3);//document.getElementById("restr").value*Math.pow(10,3);
    var c = 0.1 * Math.pow(10, -6);//document.getElementById("captr").value*Math.pow(10,-6);
    var scalefactor = parseInt(r) * parseFloat(c);//-(1/r*c);
    //---------------------------------------------------------Triangular wave (Function Generator 1)-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array(), y1 = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    //  flag = 15;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = (tstart + i * dt).toPrecision(6);
        var p = 2 * 3.1415 * frqfng1 * x[i] + (phsl + 270) * 3.1415 / 180;
        var z = Math.sin(p);
        y1[i] = -(parseFloat(vp1 / 2) * Math.asin(z)); //-Math.sign(Vp *Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180));
        y[i] = (Math.pow(10, -3) / scalefactor) * (parseFloat(y1[i])); //- parseFloat(y2[i + 101]));
    }
    //-------------------------------------------------Sine wave (Function Generator 2)----//
    var i, x0, y0, xscale, yscales1, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscales1 = axes.yscale1;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;

    var x1 = new Array(), y1 = new Array();  // x,y plotting variables
    var dt1, tstart1, tstop1;             // time variables

    // define plot paramaters
    tstart1 = 0; //in sec
    tstop1 = tmaxs;
    dt1 = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = tstart1 + j * dt1;
        y1[j] = (vp2 / 2) * Math.sin(2 * 3.1415 * frqfng2 * x1[j] + phsl * 3.1415 / 180);
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale2;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        yp = y0 - y[j] * yscales1 + p + 120;
        yp1 = y0 - y1[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(yp, yp1);
        else
            ctx.lineTo(yp, yp1);
    }

    ctx.stroke();


}

/************************ xy mode for tri square    ****************************/
function xytrisquare() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    trisquarexymode();
}
function trisquarexymode() {
    vp1 = document.getElementById("amp-knob-fng1").value;
    vp2 = document.getElementById("amp-knob-fng2").value;;
    frqfng1 = document.getElementById("fq-knob-fng1").value;
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
    posy2 = document.getElementById("positiony2").value;
    tmaxs = document.getElementById("fq-knob").value * 10 * Math.pow(10, -3);// in msec  0.001; //in sec

    var r = 10 * Math.pow(10, 3);//document.getElementById("restr").value*Math.pow(10,3);
    var c = 0.1 * Math.pow(10, -6);//document.getElementById("captr").value*Math.pow(10,-6);
    var scalefactor = parseInt(r) * parseFloat(c);//-(1/r*c);
    //---------------------------------------------------------Triangular wave (Function Generator 1)-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array(), y1 = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    //  flag = 15;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = (tstart + i * dt).toPrecision(6);
        var p = 2 * 3.1415 * frqfng1 * x[i] + (phsl + 270) * 3.1415 / 180;
        var z = Math.sin(p);
        y1[i] = -(parseFloat(vp1 / 2) * Math.asin(z)); //-Math.sign(Vp *Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180));
        y[i] = (Math.pow(10, -3) / scalefactor) * (parseFloat(y1[i])); //- parseFloat(y2[i + 101]));
    }

    var i, x0, y0, xscale, yscales1, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscales1 = axes.yscale1;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;

    //-------------------------------------------------Square wave (Function Generator 2)-------------------------------------------------//

    var x1 = new Array(), y1 = new Array(), ys1 = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = tstart + j * dt;
        y1[j] = vp2 * Math.sin(2 * 3.1415 * frqfng2 * x1[j] + phsl * 3.1415 / 180);
        ys1[j] = (vp2 / 2) * Math.sign(y1[j]);
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale2;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        yp = y0 + y[j] * yscales1 + p + 120;
        yp1 = y0 - ys1[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(yp, yp1);
        else
            ctx.lineTo(yp, yp1);
    }

    ctx.stroke();
}