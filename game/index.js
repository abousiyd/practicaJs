const contenedor = document.querySelector('.contenedor')

const altoTablero = 300
const anchoTablero = 570
const altoBloque = 20
const anchoBloque = 100

const posicionInicialUsuario = [230, 10]
let posicionActualUsuario = posicionInicialUsuario

const posicionInicialBola = [230, 10]
let posicionActualBola = posicionInicialBola

let xDireccionBola = 2
let yDireccionBola = 2
let diametro = 20
let timerID 

class Bloque {
    constructor(ejeX, ejeY) {
        this.bottomLeft = [ejeX, ejeY]
        this.bottomRight = [ejeX + anchoBloque, ejeY]
        this.topLeft = [ejeX, ejeY + altoBloque]
        this.topRight = [ejeX + anchoBloque, ejeY + altoBloque]
    }
}

const bloques  = [
    new Bloque(10, 250),
    new Bloque(120, 250),
    new Bloque(230, 250),
    new Bloque(340, 250),
    new Bloque(450, 250),
    new Bloque(10, 220),
    new Bloque(120, 220),
    new Bloque(230, 220),
    new Bloque(340, 220),
    new Bloque(450, 220),
    new Bloque(10, 190),
    new Bloque(120, 190),
    new Bloque(230, 190),
    new Bloque(340, 190),
    new Bloque(450, 190),
]

function addBloque() {
    for(let i = 0; i < bloques.length; i++) {
        const bloque = document.createElement('div')
        bloque.classList.add('bloque')
        bloque.style.left = bloques[i].bottomLeft[0] + 'px'
        bloque.style.bottom = bloques[i].bottomLeft[1] + 'px'
        contenedor.appendChild(bloque)

    }
}

function dibujarUsuario() {

    usuario.style.left = posicionActualUsuario[0] + 'px'
    usuario.style.bottom = posicionInicialUsuario[1] + 'px'
}
const usuario = document.createElement('div')
usuario.classList.add('usuario')
contenedor.appendChild(usuario)

function dibujarBola() {
    
    bola.style.left = posicionActualBola[0] + 'px'
    bola.style.bottom = posicionInicialBola[1] + 'px'
}
const bola = document.createElement('div')
bola.classList.add('bola')
contenedor.appendChild(bola)

function moverBola() {
    posicionActualBola[0] += xDireccionBola
    posicionActualBola[1] += yDireccionBola 
    dibujarBola()
}

timerID = setInterval(moverBola, 20)

addBloque()
dibujarUsuario()
dibujarBola()

document.addEventListener('keydown', moverUsuario)

function moverUsuario(e) {
    if(e.key === 'ArrowLeft') {
        if(posicionActualUsuario[0] > 0) {
            posicionActualUsuario[0] -= 10
            dibujarUsuario()
        }
    }

    if(e.key === 'ArrowRight') {
        if(posicionActualUsuario[0] < (anchoTablero - anchoBloque)) {
            posicionActualUsuario[0] += 10
            dibujarUsuario()
        }
    }
}

function cambiarDireccion() {
    if(xDireccionBola === 2 && yDireccionBola === 2) {
        yDireccionBola = -2
        return
    }
    if(xDireccionBola === 2 && yDireccionBola === -2) {
        yDireccionBola = -2
        return
    }
}
    
