/* Document Name: oscilloscopegroundpossiblities.js
 Created on :06 May, 2025
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
    // if (flag_ch1 == 1) {
    //     drawsine1();
    // }
    // if (flag_ch1 == 2) {
    //     drawsquarewv1();
    // }
    // if (flag_ch1 == 3) {
    //     drawtraingwv1();
    // }



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
        // if (flag_ch1 === 1 && flag_ch2 === 6) {
        //     grndwvsin();
        // }
        // if (flag_ch1 === 2 && flag_ch2 === 7) {
        //     grndwvsq();
        // }
        // if (flag_ch1 === 3 && flag_ch2 === 8) {
        //     grndwvtri();

        // }
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
    }



}

function posiy2chnge() {
    posy2 = document.getElementById("positiony2").value;

    // if (flag_ch2 == 6) {
    //     drawsine2();
    // }
    // if (flag_ch2 == 7) {
    //     drawsquarewv2();
    // }
    // if (flag_ch2 == 8) {
    //     drawtraingwv2();
    // }


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
    }


}


function posix2chnge() {
    phsl = document.getElementById("positionx").value;
    // if (flag_ch1 == 1) {
    //     drawsine1();
    // }
    // if (flag_ch1 == 2) {
    //     drawsquarewv1();
    // }
    // if (flag_ch1 == 3) {
    //     drawtraingwv1();
    // }
    // if (flag_ch2 == 6) {
    //     drawsine2();
    // }
    // if (flag_ch2 == 7) {
    //     drawsquarewv2();
    // }
    // if (flag_ch2 == 8) {
    //     drawtraingwv2();
    // }


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
    }


}
function grndwvsinsq() {

    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    sinesquaregrnd();

}

function sinesquaregrnd() {

    vp1 = 0;//document.getElementById("amp-knob-fng").value;
    vp2 = 0;
    frqfng1 = document.getElementById("fq-knob-fng1").value;
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
    posy2 = document.getElementById("positiony2").value;
    tmaxs = document.getElementById("fq-knob").value * 10 * Math.pow(10, -3);// in msec  0.001; //in sec

    //---------------------------------------------------------Sine wave (Function Generator 1)-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    //flag = 4;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp1 * Math.sin(2 * 3.1415 * frqfng1 * x[i] + phsl * 3.1415 / 180);
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;
    for (i = 0; i < axes.N; i++) {

        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - y[i] * yscale + p - 175;

        // draw line to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();
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
        ys1[j] = vp2 * Math.sign(y1[j]);
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        xp1 = x0 + x1[j] * xscale;
        yp1 = y0 - ys1[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(xp1, yp1);
        else
            ctx.lineTo(xp1, yp1);
    }

    ctx.stroke();


}
/************************** Ground sine tri    **********************************/
function grndwvsinetri() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    sinetrigrnd();
}


function sinetrigrnd() {
    vp1 = 0;//document.getElementById("amp-knob-fng").value;
    vp2 = 0;
    frqfng1 = document.getElementById("fq-knob-fng1").value;
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
    posy2 = document.getElementById("positiony2").value;
    tmaxs = document.getElementById("fq-knob").value * 10 * Math.pow(10, -3);// in msec  0.001; //in sec
    var r = 10 * Math.pow(10, 3);//document.getElementById("restr").value*Math.pow(10,3);
    var c = 0.1 * Math.pow(10, -6);//document.getElementById("captr").value*Math.pow(10,-6);
    var scalefactor = parseInt(r) * parseFloat(c);//-(1/r*c);0.
    //---------------------------------------------------------Sine wave (Function Generator 1)-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    //flag = 4;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp1 * Math.sin(2 * 3.1415 * frqfng1 * x[i] + phsl * 3.1415 / 180);
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;
    for (i = 0; i < axes.N; i++) {

        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - y[i] * yscale + p - 175;

        // draw line to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();

    var x1 = new Array(), y2 = new Array(), y3 = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = (tstart + j * dt).toPrecision(6);
        var p = 2 * 3.1415 * frqfng * x1[j] + (phsl + 270) * 3.1415 / 180;
        var z = Math.sin(p);
        y3[j] = -(parseFloat(vp2 / 2) * Math.asin(z)); //-Math.sign(Vp *Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180));
        y2[j] = (Math.pow(10, -3) / scalefactor) * (parseFloat(y3[j])); //- parseFloat(y2[i + 101]));
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        xp1 = x0 + x1[j] * xscale;
        yp1 = y0 - y2[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(xp1, yp1);
        else
            ctx.lineTo(xp1, yp1);
    }

    ctx.stroke();

}
/************************** Ground Square sine     **********************************/

function grndwvsqsine() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    squaresinegrnd();
}

function squaresinegrnd() {
    vp1 = 0;//document.getElementById("amp-knob-fng").value;
    vp2 = 0;
    frqfng1 = document.getElementById("fq-knob-fng1").value;
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
    posy2 = document.getElementById("positiony2").value;
    tmaxs = document.getElementById("fq-knob").value * 10 * Math.pow(10, -3);// in msec  0.001; //in sec

    //---------------------------------------------------------Square wave (Function Generator 1)-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array(), ys = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    //flag = 9;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp1 * Math.sin(2 * 3.1415 * frqfng * x[i] + phslsq * 3.1415 / 180);
        ys[i] = vp1 * Math.sign(y[i]);
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;
    for (i = 0; i < axes.N; i++) {

        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - ys[i] * yscale + p - 175;

        // draw line to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();
    //-------------------------------------------------Sine wave (Function Generator 2)-------------------------------------------------//

    var x1 = new Array(), y1 = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = tstart + j * dt;
        y1[j] = vp2 * Math.sin(2 * 3.1415 * frqfng2 * x1[j] + phsl * 3.1415 / 180);
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        xp1 = x0 + x1[j] * xscale;
        yp1 = y0 - y1[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(xp1, yp1);
        else
            ctx.lineTo(xp1, yp1);
    }

    ctx.stroke();

}

/************************** Ground  tri  square  **********************************/
function grndwvsqtri() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    squaretrigrnd();
}

function squaretrigrnd() {
    vp1 = 0;//document.getElementById("amp-knob-fng").value;
    vp2 = 0;
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
    //flag = 9;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp1 * Math.sin(2 * 3.1415 * frqfng * x[i] + phslsq * 3.1415 / 180);
        ys[i] = vp1 * Math.sign(y[i]);
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;
    for (i = 0; i < axes.N; i++) {

        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - ys[i] * yscale + p - 175;

        // draw line to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();

    //-------------------------------------------------Triangular wave (Function Generator 2)-------------------------------------------------//

    var x1 = new Array(), y2 = new Array(), y3 = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = (tstart + j * dt).toPrecision(6);
        var p = 2 * 3.1415 * frqfng * x1[j] + (phsl + 270) * 3.1415 / 180;
        var z = Math.sin(p);
        y3[j] = -(parseFloat(vp2 / 2) * Math.asin(z)); //-Math.sign(Vp *Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180));
        y2[j] = (Math.pow(10, -3) / scalefactor) * (parseFloat(y3[j])); //- parseFloat(y2[i + 101]));
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        xp1 = x0 + x1[j] * xscale;
        yp1 = y0 - y2[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(xp1, yp1);
        else
            ctx.lineTo(xp1, yp1);
    }

    ctx.stroke();
}
/************************** Ground  tri sine    **********************************/
function grndwvtrisine() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    trisinegrnd();
}

function trisinegrnd() {
    vp1 = 0;//document.getElementById("amp-knob-fng").value;
    vp2 = 0;
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
    //flag = 10;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = (tstart + i * dt).toPrecision(6);
        var p = 2 * 3.1415 * frqfng * x[i] + (phsl + 270) * 3.1415 / 180;
        var z = Math.sin(p);
        y1[i] = -(parseFloat(vp1 / 2) * Math.asin(z)); //-Math.sign(Vp *Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180));
        y[i] = (Math.pow(10, -3) / scalefactor) * (parseFloat(y1[i])); //- parseFloat(y2[i + 101]));
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;
    for (i = 0; i < axes.N; i++) {

        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - y[i] * yscale + p - 175;

        // draw line to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();

    var x1 = new Array(), y1 = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables

    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = tstart + j * dt;
        y1[j] = vp2 * Math.sin(2 * 3.1415 * frqfng2 * x1[j] + phsl * 3.1415 / 180);
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        xp1 = x0 + x1[j] * xscale;
        yp1 = y0 - y1[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(xp1, yp1);
        else
            ctx.lineTo(xp1, yp1);
    }

    ctx.stroke();


}


/************************** Ground  tri square   **********************************/
function grndwvtrisq() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    trisquaregrnd();
}
function trisquaregrnd() {
    vp1 = 0;//document.getElementById("amp-knob-fng").value;
    vp2 = 0;
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
    //flag = 10;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = (tstart + i * dt).toPrecision(6);
        var p = 2 * 3.1415 * frqfng * x[i] + (phsl + 270) * 3.1415 / 180;
        var z = Math.sin(p);
        y1[i] = -(parseFloat(vp1 / 2) * Math.asin(z)); //-Math.sign(Vp *Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180));
        y[i] = (Math.pow(10, -3) / scalefactor) * (parseFloat(y1[i])); //- parseFloat(y2[i + 101]));
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;
    for (i = 0; i < axes.N; i++) {

        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - y[i] * yscale + p - 175;

        // draw line to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();
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
        ys1[j] = vp2 * Math.sign(y1[j]);
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p2 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
        xp1 = x0 + x1[j] * xscale;
        yp1 = y0 - ys1[j] * yscale + p2 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(xp1, yp1);
        else
            ctx.lineTo(xp1, yp1);
    }

    ctx.stroke();
}