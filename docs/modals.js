// Modals
const crewModal = document.getElementById("crew-modal");
const saveModal = document.getElementById("save-modal");
const loadModal = document.getElementById("load-modal");


// Open modal
document.getElementById("crewBtn").onclick = function() {crewModal.style.display = "block";}
document.getElementById("saveBtn").onclick = function() {generateSaveState(); saveModal.style.display = "block";}
document.getElementById("loadBtn").onclick = function() {loadModal.style.display = "block";}


// Close button
document.getElementsByClassName("crewClose")[0].onclick = function() {crewModal.style.display = "none";}
document.getElementsByClassName("saveClose")[0].onclick = function() {saveModal.style.display = "none";}
document.getElementsByClassName("loadClose")[0].onclick = function() {loadModal.style.display = "none";}


// Close modals when user clicks outside
window.onclick = function(event) {
    if (event.target === crewModal) {crewModal.style.display = "none";}
    if (event.target === saveModal) {saveModal.style.display = "none";}
    if (event.target === loadModal) {loadModal.style.display = "none";}
}


////
// Save modal
////
function generateSaveState() {
    let state = {}
    let solved = document.querySelectorAll('[id=solved]');
    let portrait = document.querySelectorAll('[class=selected-portrait]');
    let fate = document.querySelectorAll('[id=fate]');
    for (let i = 0; i < 60; i++) {
        state[i] = {
            solved: solved[i].checked ? true : false,
            portrait: portrait[i].src.split('/').pop().split('.')[0],
            fate: fate[i].value ? fate[i].value : ''
        }
    }
    let json = JSON.stringify(state, null, 2);

    let textarea = document.getElementById("save-text");
    textarea.value = json;

    return json;
}

function downloadSaveState() {
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(generateSaveState());
    let dl = document.createElement('a');
    dl.setAttribute("href",     dataStr);
    dl.setAttribute("download", 'obradinn-savestate.json');
    document.body.appendChild(dl);
    dl.click();
    dl.remove();
}


////
// Load modal
////
function loadSaveState() {
    let json = document.getElementById("load-text").value;
    let state = JSON.parse(json);

    let solved = document.querySelectorAll('[id=solved]');
    let portrait = document.querySelectorAll('[class=selected-portrait]');
    let fate = document.querySelectorAll('[id=fate]');

    for (let i = 0; i < 60; i++) {
        solved[i].checked = state[i].solved;
        portrait[i].src = 'img/portraits/' + state[i].portrait + '.webp';
        fate[i].value = state[i].fate;
    }

    loadModal.style.display = "none";
}


let loadFileInput = document.getElementById("load-file");
loadFileInput.addEventListener("change", function(event){
    let reader = new FileReader();
    reader.onload = function(event){
        document.getElementById('load-text').value = event.target.result;
    };
    reader.onerror = function(event){
        alert("File could not be read! Code " + event.target.error.code);
    };
    reader.readAsText(loadFileInput.files[0]);
}, false);
