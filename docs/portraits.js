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