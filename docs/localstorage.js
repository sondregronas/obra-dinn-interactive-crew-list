function saveLocalStorage() {
    localStorage.setItem("od-save", generateSaveState());
}

function loadLocalStorage() {
    let json = localStorage.getItem("od-save");
    let state = JSON.parse(json);

    let solved = document.querySelectorAll('[id=solved]');
    let portrait = document.querySelectorAll('[class=selected-portrait]');
    let fate = document.querySelectorAll('[id=fate]');

    for (let i = 0; i < 60; i++) {
        solved[i].checked = state[i].solved;
        portrait[i].src = 'img/portraits/' + state[i].portrait + '.webp';
        fate[i].value = state[i].fate;
    }
}

window.onload = function() {
    if (localStorage.getItem("od-save")) {
        loadLocalStorage();
    }
}

document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('change', saveLocalStorage);
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', saveLocalStorage);
});
