var image__ = document.createElement("img");
var __image = document.createElement("img");

function redraw() {
    __image.src = canvas.toDataURL(); 
    __image.addEventListener("load", ()=>{
        context.drawImage(__image,0,0);
    });
}

function can() {
    var canvasTwo = document.createElement("canvas");
    var contextTwo = canvasTwo.getContext("2d");
    canvasTwo.width = parseInt(canvas.width);
    canvasTwo.height = parseInt(canvas.height);

    contextTwo.beginPath();
    contextTwo.fillStyle = "white";
    contextTwo.fillRect(0,0, canvasTwo.width, canvasTwo.height);
    contextTwo.stroke();

    image__.src = canvas.toDataURL(); 
    image__.addEventListener("load", ()=>{
        contextTwo.drawImage(image__,0,0);
        var anchor = document.getElementById("anchorDonwload");
        anchor.href = canvasTwo.toDataURL();
        anchor.click();
    });
}

function helping(){
    var s_div = document.getElementById("s_div");
    s_div.classList.toggle("d-none");
    var helpingholderdiv = document.getElementById("helpingholderdiv");
    helpingholderdiv.classList.toggle("d-none");
}

var pencolorvalue, pensizevalue, isDrawingOnCanvas = false, x = 0,y = 0;
var context, canvas;
var pencil = true, eraser = false;
function hexToRgb(hex) {
    let x = [];
    hex = hex.replace('#', '')
    if (hex.length != 6) {
        hex = modifyHex(hex)
    }
    x.push(parseInt(hex.slice(0, 2), 16))
    x.push(parseInt(hex.slice(2, 4), 16))
    x.push(parseInt(hex.slice(4, 6), 16))
    return "rgb(" + x.toString() + ")";
}
function brushStyle() {
    context.fillStyle = "black";
    context.lineCap = "round";
    context.shadowColor = "rgba(0, 0, 0, 0)";
    context.lineJoin = "miter";
    context.shadowBlur = 0;
    context.lineWidth = pensizevalue;
    context.strokeStyle = hexToRgb(pencolorvalue);
}
function drawupdate(){
    canvas = document.getElementById("canvas");
    if(!canvas) return;
    context = canvas.getContext("2d");
    if(!context) return;

    var pencolor = document.getElementById("pencolor");
    if(!pencolor) return;
        pencolorvalue = pencolor.value;
        pencolor.addEventListener("change", ()=>{
        pencolorvalue = pencolor.value;
    })

    var pensize = document.getElementById("pensize");
    if(!pensize) return;
        pensizevalue = pensize.value;
        pensize.addEventListener("change", ()=>{
        pensizevalue = pensize.value;
    })
    var earsersize = document.getElementById("erasesize");
    if(!earsersize) return;

    document.addEventListener("mousedown", (e) => {
        if(pencil){
            x = e.layerX - canvas.offsetLeft;
            y = e.layerY - canvas.offsetTop;
            context.globalCompositeOperation="source-over";
            brushStyle();
        }
        if(eraser){
            x = e.layerX - canvas.offsetLeft;
            y = e.layerY - canvas.offsetTop;
            context.globalCompositeOperation="destination-out";
            context.lineWidth = earsersize.value;
        }
        isDrawingOnCanvas = true;
    });
    canvas.addEventListener("mouseleave", () => {
        isDrawingOnCanvas = false;
    });
    canvas.addEventListener("mousemove", (e) => {
        if (isDrawingOnCanvas && pencil) {
            context.beginPath();
            context.moveTo(x, y);
            x = e.layerX - canvas.offsetLeft;
            y = e.layerY - canvas.offsetTop;
            context.lineTo(x, y);
            context.stroke();
        } 
        if (isDrawingOnCanvas && eraser){
            context.beginPath();
            context.moveTo(x,y);
            x = e.layerX - canvas.offsetLeft;
            y = e.layerY - canvas.offsetTop;
            context.lineTo(x,y);
            context.stroke(); 
        }
    });
    document.addEventListener("mouseup", () => {
        isDrawingOnCanvas = false;
    });

    canvas.addEventListener("touchstart", (e) => {
        if(pencil){
            console.log(e.touches[0].clientX,e.touches[0].clientY, e.touches[0])
            x = e.touches[0].clientX-canvas.offsetLeft;
            y = e.touches[0].clientY;
            context.globalCompositeOperation="source-over";
            brushStyle();
        }
        if(eraser){
            x = e.touches[0].clientX-canvas.offsetLeft;
            y = e.touches[0].clientY;
            context.globalCompositeOperation="destination-out";
            context.lineWidth = earsersize.value;
        }
        isDrawingOnCanvas = true;
    });
    canvas.addEventListener("touchend", () => {
        isDrawingOnCanvas = false;
    });
    canvas.addEventListener("touchmove", (e) => {
        if (isDrawingOnCanvas && pencil) {
            context.beginPath();
            context.moveTo(x, y);
            x = e.touches[0].clientX-canvas.offsetLeft;
            y = e.touches[0].clientY;
            context.lineTo(x, y);
            context.stroke();
        } 
        if (isDrawingOnCanvas && eraser){
            context.beginPath();
            context.moveTo(x,y);
            x = e.touches[0].clientX-canvas.offsetLeft;
            y = e.touches[0].clientY;
            context.lineTo(x,y);
            context.stroke(); 
        }
    });

}

// screen is too small?

function resizePLZ(){
    var s_div = document.getElementById("s_div");
    var h_div = document.getElementById("h_div");
    if(window.innerWidth <=650){
        h_div.classList.remove("d-none");
        s_div.classList.add("d-none");
    } else if(window.innerWidth > 650){
        s_div.classList.remove("d-none");
        h_div.classList.add("d-none");
    }
}

window.addEventListener("resize", resizePLZ);
window.addEventListener("load", resizePLZ);
window.addEventListener("orientationchange", resizePLZ);