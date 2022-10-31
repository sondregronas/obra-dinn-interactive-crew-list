// Modals
const crewModal = document.getElementById("crew-modal");
const saveModal = document.getElementById("save-modal");
const loadModal = document.getElementById("load-modal");
const resetModal = document.getElementById("reset-modal");


// Open modal
document.getElementById("crewBtn").onclick = function() {crewModal.style.display = "block";}
document.getElementById("saveBtn").onclick = function() {saveModal.style.display = "block";}
document.getElementById("loadBtn").onclick = function() {loadModal.style.display = "block";}
document.getElementById("resetBtn").onclick = function() {resetModal.style.display = "block";}


// Close button
document.getElementsByClassName("crewClose")[0].onclick = function() {crewModal.style.display = "none";}
document.getElementsByClassName("saveClose")[0].onclick = function() {saveModal.style.display = "none";}
document.getElementsByClassName("loadClose")[0].onclick = function() {loadModal.style.display = "none";}
document.getElementsByClassName("resetClose")[0].onclick = function() {resetModal.style.display = "none";}


// Close modals when user clicks outside
window.onclick = function(event) {
    if (event.target === crewModal) {crewModal.style.display = "none";}
    if (event.target === saveModal) {saveModal.style.display = "none";}
    if (event.target === loadModal) {loadModal.style.display = "none";}
    if (event.target === resetModal) {resetModal.style.display = "none";}
}