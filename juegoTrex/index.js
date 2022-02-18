var ancho = 700;
var alto = 300;

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var interval = null

canvas.width = ancho;
canvas.height = alto;

var n3ja = {
    x: 50,
    y: 250,
    vy: 3,
    width: 50, 
    height: 50
}
var paredes = [{
    x: 650,
    y: 220,
    width: 50, 
    height: 80
}]

document.addEventListener('keydown', (event) => {
    if(event.keyCode == 32) {
        saltar()
    }
})

function saltar() {
    n3ja.y -= 100
}

function limpiar() {
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, ancho, alto)
}

function dibujar() {
    limpiar()
    ctx.fillStyle = '#000'
    ctx.fillRect(n3ja.x, n3ja.y, n3ja.width, n3ja.height);
}

function debujarParedes() {
    // limpiar()
    paredes.forEach(pared => {
        ctx.fillStyle = '#E51010'
        ctx.fillRect(pared.x, pared.y, pared.width, pared.height);
    })
}

function contains(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.height + rect1.y > rect2.y) {
      const alert = confirm('Has perdido')
      if(alert) {
        clearInterval(interval)
        location.reload()
      } 
    }    
}

function bajarN3ja() {
    if (n3ja.y < 250) n3ja.y += n3ja.vy
}

function detectarColiseon() {
    paredes.forEach( pared => {
        pared.x -= 3
        contains(pared, n3ja)

        if(pared.x <= -100) {
            pared.x = 650
        } 
    }) 
}

function principal() {
    dibujar()
    debujarParedes()
    bajarN3ja()
    detectarColiseon()
}

interval = setInterval(() => {
    principal()
}, 1000/40)

