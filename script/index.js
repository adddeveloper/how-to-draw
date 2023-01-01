var ddata = [];

function description__(x) {
    var anchor = document.createElement("a");
    anchor.href = "/draw.html#" + x;
    anchor.target = "_blank";
    anchor.click();
}


function start__(){
    var board__ = document.getElementById("board__");
    ddata.forEach((e, i) => {
        board__.innerHTML += 
        '<div onclick="description__('+i+')" class="cursor-pointer mx-3 my-4 border border-1 border-dark">' +
            '<img style="width: 18rem;" src="https://' + e.src + '/'  + e.final + '" />' +
        "</div>";
    });
}

fetch(
  "https://raw.githubusercontent.com/adddeveloper/drawing-resource/main/index.json"
)
.then((res) => res.json())
.then((data) => {
    ddata = data;
    start__();
})

