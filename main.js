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
  const Usuario1 = new Datos(puntos = 0)

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

// Se compara el valor del usuario y el generado por el random de la maquina
function juego() {
  // piedra
  if (jugador === 1 && azar === 0) {
    textoMaquina.innerHTML="La maquina elije PIEDRA"
    resultado("3")
  } else if (jugador === 1 && azar === 1) {
    textoMaquina.innerHTML="La maquina elije PAPEL"
    resultado("2")
  } else if (jugador === 1 && azar === 2) {
    textoMaquina.innerHTML="La maquina elije TIJERA"
    resultado("1")
    // papel
  } else if (jugador === 2 && azar === 0) {
    textoMaquina.innerHTML="La maquina elije PIEDRA"
    resultado("1")
  } else if (jugador === 2 && azar === 1) {
    textoMaquina.innerHTML="La maquina elije PAPEL"
    resultado("3")
  } else if (jugador === 2 && azar === 2) {
    textoMaquina.innerHTML="La maquina elije TIJERA"
    resultado("2")
    // tijera
  } else if (jugador === 3 && azar === 0) {
    textoMaquina.innerHTML="La maquina elije PIEDRA"
    resultado("2")
  } else if (jugador === 3 && azar === 1) {
    textoMaquina.innerHTML="La maquina elije PAPEL"
    resultado("1")
  } else if (jugador === 3 && azar === 2) {
    textoMaquina.innerHTML="La maquina elije TIJERA"
    resultado("3")
  } else {
    textoJugador.innerHTML="Elije una opción"
  }
}

// Escribe el resultado en el HTML
function resultado(resultado){
  switch(resultado){
    case "1":
      textoResultado.innerHTML="¡Ganaste!"
      Usuario1.estado = "Ganaste la última partida"
      Usuario1.puntos =  Usuario1.puntos +3
      cuadroPuntos.innerHTML = `${Usuario1.puntos}`
      break;
    case "2":
      textoResultado.innerHTML="¡Gana la maquina!"
      Usuario1.estado = "Perdiste la última partida"
      cuadroPuntos.innerHTML = `${Usuario1.puntos}`
      break;
    case "3":
      Usuario1.estado = "Empataste la última partida"
      Usuario1.puntos = Usuario1.puntos + 1
      cuadroPuntos.innerHTML = `${Usuario1.puntos}`
      break;
  }

}
// Storage
sessionStorage.setItem("usuario", Usuario1);
let usuarioJson = JSON.stringify(Usuario1);
let usuario = JSON.parse(sessionStorage.getItem("usuario"));


let botonHistorial = document.querySelector("#botonHistorial")
// Se pregunta si se quiere ver el historial de partidas
botonHistorial.onclick = preguntaHistorial
function preguntaHistorial(e){
  e.preventDefault();
    historial.push(Usuario1)
    textoResultado.innerHTML = `${Usuario1.estado}`;
}