let selectedPortrait = null;  // currently selected portrait
let attached = false;  // attached defines if the mouse movement listener is attached to portraitContainer
let portraitContainer = document.querySelector("#hoveredPortrait");

// Attach mouse movement listener to portraitContainer
const followMouse = (event) => {
    portraitContainer.style.left = event.x + "px";
    portraitContainer.style.top = event.y + "px";
}

// Hide portrait on mouse leave
function hidePortrait() {
    attached = false;
    portraitContainer.style.display = "none";
    document.removeEventListener("pointermove", followMouse);
}

// Display portrait on hover and attach mouse movement listener
function hoverPortrait(id) {
    portraitContainer.src = 'img/portraits/' + id.toString() + '.webp';
    if (!attached) {
        attached = true;
        portraitContainer.style.display = "block";
        document.addEventListener("pointermove", followMouse);
    }
}

// Update portrait to the one selected, if any, then close crew modal
function clickPortrait(id) {
    if (selectedPortrait) {
        selectedPortrait.src = 'img/portraits/' + id.toString() + '.webp';
        selectedPortrait = null;
    }
    crewModal.style.display = "none";
}

// Set selected portrait to be the one clicked and open crew modal
function updatePortrait(element) {
    selectedPortrait = element;
    crewModal.style.display = "block";
}