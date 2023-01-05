var ddata = [], xn = -1;
function isInt(value) {
    return (
      !isNaN(value) &&
      parseInt(Number(value)) == value &&
      !isNaN(parseInt(value, 10))
    );
}
function more__(){
    var anchor = document.createElement("a");
    anchor.href = window.location.href.split("#")[0]+ "#s#" + window.location.href.split("#")[1];
    anchor.target = "_blank";
    anchor.click();
}
function start__(){
    var board__ = document.getElementById("board__");
    var hearder__ = document.getElementById("hearder__");
    ddata.forEach((e) => {
        hearder__.innerHTML = "How to draw "+ e.description[1] +"?";
        board__.innerHTML += 
        '<div class="mx-3 my-4 ">' +
            '<img style="width: 30rem;" src="https://' + e.src + '/'  + e.final + '" />' +
        '</div>'+
        '<div class="d-flex flex-column justify-content-center align-items-center">'+
            '<p style="width: 30rem; font-size: 1.5rem;" class="text-center">'+
            e.description[0] +
            ' This tutorial is about how to draw '+ e.description[1] + '.' +
            '</p>'+
            '<button onclick="more__()" class="button-- p-0 pb-1 px-4" style=" font-size: 1.5rem; border-radius: 20rem; ">start &gt;</button>'+
        "</div>"
        ;
    });
}
function draw__(){
    var board__ = document.getElementById("board__");
    var hearder__ = document.getElementById("hearder__");
    // fisrt part
    var div___ = document.createElement("div");
    div___.classList.add("mx-3", "my-4", "d-flex", "flex-column", "justify-content-center", "align-items-center");
    hearder__.innerHTML = "How to draw "+ ddata[0].description[1] +"?";
    var img___ = document.createElement("img");
    img___.id = "guimg"
    img___.src = 'https://' + ddata[0].src + '/'  + ddata[0].final;
    img___.style = "width: 30rem;user-select: none;-webkit-user-drag: none;"
    var tracebutton = document.createElement("button");
    tracebutton.classList.add("button--", "p-0", "pb-1", "px-4", "m-2");
    tracebutton.style = "font-size: 1.5rem; border-radius: 20rem;";
    tracebutton.innerHTML = "Trace the image?";
    tracebutton.id = "traceIMG";
    tracebutton.addEventListener("click", ()=>{
        var canvas = document.getElementById("canvas");
        if(!canvas && !img___ && !tracebutton) return;
        if(window.getComputedStyle(canvas).getPropertyValue('background-image') == 'none'){
            canvas.style.backgroundImage = "url("+img___.src+")";
            tracebutton.innerHTML = "Cancel Tracing?";
        } else{
            canvas.style.backgroundImage = "none";
            tracebutton.innerHTML = "Trace the image?";
        }
    });

    div___.append(img___, tracebutton);
    // second part
    var secdiv___ = document.createElement("div");
    secdiv___.id = "holder__";
    secdiv___.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "my-5");
    
    var cbbbdiv = document.createElement("div");
    cbbbdiv.classList.add("d-flex", "flex-wrap", "justify-content-center", "align-items-center");
    // body of pencil style
    var icdiv = document.createElement("div");
    icdiv.style = "left: auto; width: 18rem; height: 9rem; bottom: 10px; right: 10px;";
    icdiv.classList.add('d-none', 'shadow-lg', 'align-items-center', 'bg-white', 'border', 'border-dark', 'd-flex', 'flex-column', 'fixed-bottom', 'justify-content-evenly');
    // exit
    var pendivholder = document.createElement("div");
    pendivholder.classList.add('d-flex', 'justify-content-between', 'container-fluid');
    var penheading = document.createElement("p");
    penheading.innerHTML = "Pencil";
    penheading.classList.add('p-0', 'm-0');
    penheading.style.fontSize = "1.5rem";
    var penexitdiv = document.createElement("div");
    penexitdiv.innerHTML = '<i class="bi bi-x"></i>';
    penexitdiv.style.fontSize = '1.5rem';
    penexitdiv.classList.add("cursor-pointer");
    penexitdiv.addEventListener("click", ()=>{
        icdiv.classList.add("d-none");
    });
    pendivholder.append(penheading, penexitdiv);
    // input
    var nptdiv = document.createElement("div");
    nptdiv.innerHTML = "<p class='m-0 p-0 px-3'>color: </p>";
    nptdiv.classList.add("d-flex", 'container', 'align-items-center');
    var npt = document.createElement("input");
    npt.type = "color";
    npt.id = "pencolor";
    nptdiv.appendChild(npt);

    var npt__div = document.createElement("div");
    npt__div.innerHTML = "<p class='m-0 p-0 px-3'>size: </p>";
    npt__div.classList.add("d-flex", 'container', 'align-items-center');
    var npt__ = document.createElement("input");
    npt__.type = "number";
    npt__.classList.add("m-0", "p-0");
    npt__.style = "width: 3rem; height: 1.5rem;";
    npt__.value = 5;
    npt__.id = "pensize";
    npt__.min = 1;
    npt__.max = 20;
    npt__div.appendChild(npt__);

    icdiv.append(pendivholder, nptdiv, npt__div);

    var erasecontainer = document.createElement("div");
    erasecontainer.style = "left: auto; width: 18rem; height: 9rem; bottom: 10px; right: 10px;";
    erasecontainer.classList.add('d-none', 'shadow-lg', 'align-items-center', 'bg-white', 'border', 'border-dark', 'd-flex', 'flex-column', 'fixed-bottom', 'justify-content-evenly');
    // exit
    var eraseholder = document.createElement("div");
    eraseholder.classList.add('d-flex', 'justify-content-between', 'container-fluid');
    var eraseheading = document.createElement("p");
    eraseheading.innerHTML = "Eraser";
    eraseheading.classList.add('p-0', 'm-0');
    eraseheading.style.fontSize = "1.5rem";
    var eraseexit = document.createElement("div");
    eraseexit.innerHTML = '<i class="bi bi-x"></i>';
    eraseexit.style.fontSize = '1.5rem';
    eraseexit.classList.add("cursor-pointer");
    eraseexit.addEventListener("click", ()=>{
        erasecontainer.classList.add("d-none");
    });
    eraseholder.append(eraseheading, eraseexit);

    var eraseinputdiv = document.createElement("div");
    eraseinputdiv.innerHTML = "<p class='m-0 p-0 px-3'>size: </p>";
    eraseinputdiv.classList.add("d-flex", 'container', 'align-items-center');
    var erasersize = document.createElement("input");
    erasersize.type = "number";
    erasersize.classList.add("m-0", "p-0");
    erasersize.style = "width: 3rem; height: 1.5rem;";
    erasersize.value = 5;
    erasersize.id = "erasesize";
    erasersize.min = 1;
    erasersize.max = 20;
    eraseinputdiv.appendChild(erasersize);

    erasecontainer.append(eraseholder, eraseinputdiv);
    
    // help
    var helpingholderdiv = document.createElement("div");
    helpingholderdiv.classList.add('d-none', 'vw-100', 'vh-100', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column');
    helpingholderdiv.id = "helpingholderdiv";
    helpingholderdiv.innerHTML = 
    '<div style="border: solid 1px black;" class="container p-3">'+
        '<div class="d-flex justify-content-between align-items-center">'+
            '<h1 class="heading1 m-0 p-0">Need Help?</h1>'+
            '<div onclick="helping()" class="cursor-pointer" style="font-size: 2.5rem;"><i class="bi bi-x-lg"></i></div>'+
        '</div>'+
        '<div class="d-flex flex-column">'+
            '<div class="d-flex flex-column">'+
                '<div class="d-flex">'+
                    '<div class="mx-2"><i class="bi bi-brush-fill"></i></div>'+
                    '<div><p class="p-0 m-0">Pencil icon lets you draw on the canvas.</p></div>'+
                '</div>'+
                '<div class="d-flex">'+
                    '<div class="mx-2"><i class="bi bi-eraser-fill"></i></div>'+
                    '<div><p class="p-0 m-0">Eraser icon lets you erase previously drawn lines.</p></div>'+
                '</div>'+
                '<div class="d-flex">'+
                    '<div class="mx-2"><i class="bi bi-question"></i></div>'+
                    '<div><p class="p-0 m-0">Help icon brings you here.</p></div>'+
                '</div>'+
                '<div class="d-flex">'+
                    '<div class="mx-2"><i class="bi bi-download"></i></div>'+
                    '<div><p class="p-0 m-0">Download icon lets you download what you have drawn on the canvas as a \'png\' image;</p></div>'+
                '</div>'+
                '<div class="d-flex">'+
                    '<div class="mx-2"><i class="bi bi-arrow-left"></i></div>'+
                    '<div><p class="p-0 m-0">Left arrow icon lets you go back to drawing the previous image.</p></div>'+
                '</div>'+
                '<div class="d-flex">'+
                    '<div class="mx-2"><i class="bi bi-arrow-right"></i></div>'+
                    '<div><p class="p-0 m-0">Right arrow icon lets you go forward image.</p></div>'+
                '</div>'+
            '</div>'+
            '<div class="mt-3 d-flex flex-column justify-content-center align-items-center">'+
                '<p class="p-0 m-0" style="font-size: 1.5rem;">Contact me, if you have more questions:</p>'+
                '<div class="container d-flex flex-row justify-content-center align-items-center">'+
                    '<a target="_blank" href="contact-me/index.html" class="mx-3 social-link d-flex justify-content-center align-items-center">'+
                        '<i class="bi bi-envelope-paper"></i>'+
                    '</a>'+
                    '<a target="_blank" href="https://www.instagram.com/adnanscode/" class="mx-3 social-link d-flex justify-content-center align-items-center">'+
                        '<i class="bi bi-instagram"></i>'+
                    '</a>'+
                    '<a target="_blank" href="https://github.com/adddeveloper" class="mx-3 social-link d-flex justify-content-center align-items-center">'+
                        '<i class="bi bi-github"></i>'+
                    '</a>'+
                    '<a target="_blank" href="https://www.youtube.com/channel/UCZ0GqtCuXYJ99XVY1aiyHOg" class="mx-3 social-link d-flex justify-content-center align-items-center">'+
                        '<i class="bi bi-youtube"></i>'+
                    '</a>'+
                    '<a target="_blank" href="https://twitter.com/adnanscode" class="mx-3 social-link d-flex justify-content-center align-items-center">'+
                        '<i class="bi bi-twitter"></i>'+
                    '</a>'+
                '</div>'+
            '</div>'+
        '</div>'
    '</div>';
    document.body.appendChild(helpingholderdiv);
    var bbbdiv = document.createElement("div");
    bbbdiv.classList.add("d-flex", "flex-column", "flex-wrap", "justify-content-evenly", "align-items-center");
    var arr = ['<i class="bi bi-brush-fill"></i>', '<i class="bi bi-eraser-fill"></i>', '<i class="bi bi-question"></i>'];
    arr.forEach((e, i)=>{
        if(i == 0){
            var labbel = document.createElement("button");
            labbel.onclick = ()=>{
                icdiv.classList.remove("d-none");
                eraser = false;
                pencil = true;
            }
            labbel.innerHTML = e;
            labbel.classList.add("button--", "p-0", "px-3", "my-1");
            labbel.style = "font-size: 1.5rem; border-radius: 20rem;";
            bbbdiv.append(labbel);
        } else {
            var bbb = document.createElement("button");
            bbb.innerHTML = e;
            bbb.classList.add("button--", "p-0", "px-3", "my-1");
            bbb.style = "font-size: 1.5rem; border-radius: 20rem;";
            if(i == 1){
                bbb.id ="clear";
                bbb.addEventListener("click", ()=>{
                    eraser = true;
                    pencil = false;
                    erasecontainer.classList.remove("d-none");
                })
            } else{
                bbb.id ="help";
                bbb.addEventListener("click", ()=>{
                    helping()
                });
            }
            bbbdiv.appendChild(bbb);
        }
    });

    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.classList.add("m-2");
    img___.onload = ()=>{
        redraw()
        if(canvasarray[0]==0 && canvasarray[1]==0){
            canvas.width = parseInt(img___.width)+20;
            canvas.height = parseInt(img___.height)+20;
            canvasarray[0] = parseInt(img___.width)+20;
            canvasarray[1] =parseInt(img___.height)+20;
        } else {
            canvas.width = canvasarray[0];
            canvas.height = canvasarray[1];
        }
    }
    cbbbdiv.append(icdiv, erasecontainer, canvas, bbbdiv);

    var bb_div = document.createElement("div");
    bb_div.classList.add("d-flex", "justify-content-evenly", "align-items-center");

    var bbar = ['<i class="bi bi-arrow-left"></i>','<i class="bi bi-download"></i>', '<i class="bi bi-arrow-right"></i>'];
    bbar.forEach((e, i)=>{
        var button___ = document.createElement("button");
        button___.classList.add("button--", "p-0", "pb-1", "px-4", "m-2");
        button___.style = "font-size: 1.5rem; border-radius: 20rem;";
        button___.innerHTML = e;
        if(i == 0){
            button___.id = "go_back";
            button___.addEventListener("click", ()=>{
                var i_m_g = document.getElementById("guimg");
                if(xn>0){
                    xn--;
                   if(xn>=0){
                        i_m_g.src =  'https://' + ddata[0].src + '/' + ddata[0].order[xn];
                    }
                } else if(xn <= 0){
                    xn--;
                    if(xn<0){
                        xn=-1;
                        i_m_g.src =  'https://' + ddata[0].src + '/' + ddata[0].final;
                        alert("you are at the start!");
                    }
                } 
                console.log(xn);
            });
        } else if(i==1){
            button___.id = "downloadImage";
            button___.addEventListener("click", () => {
                canvas.style.backgroundImage = 'none';
                var anchor = document.createElement("a");
                anchor.download = "Drawing of "+ ddata[0].description[1];
                anchor.id = "anchorDonwload";
                anchor.classList.add('d-none');
                document.body.appendChild(anchor);
                can()
            });
        } else if(i==2){
            button___.id = "go_foward";
            button___.addEventListener("click", ()=>{
                if(xn <= ddata[0].order.length-1) {
                    var i_m_g = document.getElementById("guimg");
                    xn++;
                    console.log(xn, ddata[0].order.length)
                    if(xn<=ddata[0].order.length-1){
                        i_m_g.src =  'https://' + ddata[0].src + '/' + ddata[0].order[xn];
                    } else if(xn > ddata[0].order.length-1){
                        alert("you are finished!");
                        xn--;
                    }
                }
            });
        }
        bb_div.append(button___);
    });

    secdiv___.append(cbbbdiv, bb_div);

    board__.append(div___, secdiv___);
    drawupdate();
}

fetch("https://raw.githubusercontent.com/adddeveloper/drawing-resource/main/index.json")
.then((res) => res.json())
.then((data) => {
    ddata = data;
    if(isInt(window.location.href.split("#")[1])){
        if(parseInt(window.location.href.split("#")[1])<ddata.length){
            ddata = [data[parseInt(window.location.href.split("#")[1])]];
            start__();
        } else {
            var anchor = document.createElement("a");
            anchor.href="/";
            anchor.click();
        }
    } else if(window.location.href.split("#")[1] == 's'){
        if(isInt(window.location.href.split("#")[2])){
            if(parseInt(window.location.href.split("#")[2])<ddata.length){
                ddata = [data[parseInt(window.location.href.split("#")[2])]];
                draw__();
            } else {
                var anchor = document.createElement("a");
                anchor.href="/";
                anchor.click();
            }
        } else {
            var anchor = document.createElement("a");
            anchor.href="/";
            anchor.click();
        }
    } else {
        var anchor = document.createElement("a");
        anchor.href="/";
        anchor.click();
    }
})