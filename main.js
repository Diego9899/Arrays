// Variables y DOM
let Jugador = document.querySelector(".juego")
let textoJugador = document.querySelector("#textoJugador")
let textoUsuario = document.querySelector("#textoUsuario")
let textoMaquina = document.querySelector("#textoMaquina")
let textoResultado = document.querySelector("#textoResultado")
let botonJugar = document.querySelector("#botonJugar")
let cuadroPuntos = document.querySelector("#cuadroPuntos")
let formularioNombreUsuario = document.querySelector("#formularioNombreUsuario")
var scrollJuego = document.querySelector("#botonJugar")

var jugador;

// Creo un constructor para los datos del usuario a jugar
class Datos{
    constructor(usuario, puntos, estado){
      this.usuario= usuario
      this.puntos = puntos
      this.estado = estado
    }
  }
  const Usuario1 = new Datos()

// Elección del nombre del usuario para jugar
formularioNombreUsuario.addEventListener("submit", validarNombre)
function validarNombre(e){
  e.preventDefault();
  let formulario = e.target;
  Usuario1.usuario = formulario.children[0].value
  textoUsuario.innerHTML= `${Usuario1.usuario}`
  scrollJuego.scrollIntoView({ behavior: 'smooth', block: 'end'});
}

// Array con las opciones para jugar
const opciones = ["Piedra", "Papel", "Tijera"];

// Array donde se almacenarán las partidas a futuro
const historial = []

// Se genera un numero random para la elección maquina
const azar = Math.round(Math.random() * 2);

// Eleccion del usuario (jugador) se agrega evento al boton "jugar"
botonJugar.addEventListener("click", eleccionJugador1)

// Funcion que procesa la eleccion del jugador
function eleccionJugador1(e) {
  e.preventDefault();
  let piedra = document.getElementById("piedra")
  let papel = document.getElementById("papel")
  let tijera = document.getElementById("tijera")
  if (piedra.checked == true) {
    jugador = 1;
    textoJugador.innerHTML= "Has elegido PIEDRA"
    juego()
  } else if (papel.checked == true) {
    jugador = 2;
    textoJugador.innerHTML= "Has elegido PAPEL"
    juego()
  } else if (tijera.checked == true) {
    jugador = 3;
    textoJugador.innerHTML= "Has elegido TIJERA"
    juego()
  } else {
    textoJugador.innerHTML = "No has elegido nada"
  }
}

let botonHistorial = document.querySelector("#botonHistorial")
// Se pregunta si se quiere ver el historial de partidas
botonHistorial.onclick = preguntaHistorial
function preguntaHistorial(e){
  e.preventDefault();
    historial.push(Usuario1)
    textoResultado.innerHTML = `${Usuario1.estado}`
}

// Se compara el valor del usuario y el generado por el random de la maquina
function juego() {
  // piedra
  if (jugador === 1 && azar === 0) {
    textoMaquina.innerHTML="La maquina elije PIEDRA"
    textoResultado.innerHTML="¡Hay empate!"
    Usuario1.estado = "Empataste la última partida"
    Usuario1.puntos = 1
  } else if (jugador === 1 && azar === 1) {
    textoMaquina.innerHTML="La maquina elije PAPEL"
    textoResultado.innerHTML="¡Gana la maquina!"
    Usuario1.estado = "Perdiste la última partida"
  } else if (jugador === 1 && azar === 2) {
    textoMaquina.innerHTML="La maquina elije TIJERA"
    textoResultado.innerHTML="¡Ganaste!"
    Usuario1.estado = "Ganaste la última partida"
    Usuario1.puntos = 3
    // papel
  } else if (jugador === 2 && azar === 0) {
    textoMaquina.innerHTML="La maquina elije PIEDRA"
    textoResultado.innerHTML="¡Ganaste!"
    Usuario1.estado = "Ganaste la última partida"
    Usuario1.puntos = 3
  } else if (jugador === 2 && azar === 1) {
    textoMaquina.innerHTML="La maquina elije PAPEL"
    textoResultado.innerHTML="¡Hay empate!"
    Usuario1.estado = "Empataste la última partida"
    Usuario1.puntos = 2
  } else if (jugador === 2 && azar === 2) {
    textoMaquina.innerHTML="La maquina elije TIJERA"
    textoResultado.innerHTML="¡Gana la maquina!"
    Usuario1.estado = "Perdiste la última partida"
    // tijera
  } else if (jugador === 3 && azar === 0) {
    textoMaquina.innerHTML="La maquina elije PIEDRA"
    textoResultado.innerHTML="¡Gana la maquina!"
    Usuario1.estado = "Perdiste la última partida"
  } else if (jugador === 3 && azar === 1) {
    textoMaquina.innerHTML="La maquina elije PAPEL"
    textoResultado.innerHTML="¡Ganaste!"
    Usuario1.estado = "Ganaste la última partida"
    Usuario1.puntos = 3
  } else if (jugador === 3 && azar === 2) {
    textoMaquina.innerHTML="La maquina elije TIJERA"
    textoResultado.innerHTML="¡Hay empate!"
    Usuario1.estado = "Empataste la última partida"
    Usuario1.puntos = 1
  } else {
    textoJugador.innerHTML="Elije una opción"
  }
}



