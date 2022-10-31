function decimg(id) {
    let img = document.getElementById(id.toString())
    let src = parseInt(img.src.toString().split('/').pop().split('.')[0])

    if (src === 0) { src = 60}
    else { src-- }

    img.src = 'img/portraits/' + src.toString() + '.webp'
}

function incimg(id) {
    let img = document.getElementById(id.toString())
    let src = parseInt(img.src.toString().split('/').pop().split('.')[0])

    if (src === 60) { src = 0 }
    else { src++ }

    img.src = 'img/portraits/' + src.toString() + '.webp'
}


// Sketch map portraits
let attached = false;
let portraitContainer = document.querySelector("#hoveredPortrait");
const followMouse = (event) => {
    portraitContainer.style.left = event.x + "px";
    portraitContainer.style.top = event.y + "px";
}
function hidePortrait() {
    attached = false;
    portraitContainer.style.display = "none";
    document.removeEventListener("pointermove", followMouse);
}
function hoverPortrait(id) {
    portraitContainer.src = 'img/portraits/' + id.toString() + '.webp';
    if (!attached) {
        attached = true;
        portraitContainer.style.display = "block";
        document.addEventListener("pointermove", followMouse);
    }
}
function clickPortrait(id) {
    console.log("Not implemented yet")
}