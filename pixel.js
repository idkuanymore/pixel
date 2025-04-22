var IS_CLICKED = false
var CURRENT_COLOR = getComputedStyle(document.documentElement).getPropertyValue('--current-color');
var DEFAULT_COLOR = getComputedStyle(document.documentElement).getPropertyValue('--default-color');
var FILL_MODE = false
var COLORS = ['rgb(62, 62, 62)', 'rgb(255, 0, 0)', 'rgb(0, 255, 76)', 'rgb(4, 0, 255)', 'rgb(255, 234, 0)', 'rgb(255, 255, 255)']

document.addEventListener('mousedown', function() {
    IS_CLICKED = true;
})

document.addEventListener('mouseup', function() {
    IS_CLICKED = false;
})


let field = document.querySelector('.field')

for (let i = 0; i < 450; i+=1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id', `${i}`)
    field.appendChild(cell)
}

let cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        if (IS_CLICKED) {
            anime({
                targets: cell,
                background: CURRENT_COLOR,
                duration: 200,
                easing: 'linear'
            })
        }
    })
    
    cell.addEventListener('mousedown', function() {
        if (FILL_MODE) {
            let cell_id = parseInt(cell.getAttribute('id'))
            FILL_MODE = !FILL_MODE
            anime({
                targets: '.cell',
                background: CURRENT_COLOR,
                easing: 'easeInOutQuad',
                duration: 500,
                delay: anime.stagger(50, {grid: [30, 15], from: cell_id}),
            })
        } else {
            anime({
                targets: cell,
                background: CURRENT_COLOR,
                duration: 500,
                easing: 'easeInOutQuad'
            })
        }
    })
})

let color_cells = document.querySelectorAll('.color-cell')
color_cells.forEach(color_cell => {
    color_cell.addEventListener('click', function() {
        FILL_MODE = false
        CURRENT_COLOR = getComputedStyle(color_cell).backgroundColor;
        document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
        document.querySelector('.selected').classList.remove('selected')
        color_cell.classList.add('selected')
    })
})

document.querySelector('.eraser').addEventListener('click', function() {
    CURRENT_COLOR = DEFAULT_COLOR
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    this.classList.add('selected')
})

document.querySelector('.fill-tool').addEventListener('click', function() {
    FILL_MODE = !FILL_MODE
    document.querySelector('.selected').classList.remove('selected')
    this.classList.add('selected')
})




document.querySelector('.clear').addEventListener('click', function(){
    CURRENT_COLOR = DEFAULT_COLOR
    FILL_MODE = !FILL_MODE
    document.querySelector('.selected').classList.remove('selected')
    this.classList.add('selected')
})



setInterval(function(){
    let result = ''
    let temp_cell = document.querySelectorAll('.cell')
    for (let i = 0; i < temp_cell.length; i++){
        result += `${temp_cell[i].dataset.color}`
    }
    document.cookie = `pixel-result=${result}; max-age=1000000000`
}, 60000)

function get_result(){
    let res_cookie = document.cookie.split('; ')
    for (let i; i < cookie.length; i++){
    let new_cookie = cookies[i].split('=')
    if (new_cookie[0] = 'pixel-result'){
    return new_cookie[1]}
}
    return '0' * 450
}












document.querySelector('.save').addEventListener('click', function(){
    
})