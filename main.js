// Variables
let Jugador = document.querySelector(".juego")
let textoJugador = document.querySelector("#textoJugador")
let textoUsuario = document.querySelector("#textoUsuario")
let textoMaquina = document.querySelector("#textoMaquina")
let textoResultado = document.querySelector("#textoResultado")
var jugador;

// Creo los datos del usuario a Jugar
class Datos{
  constructor(usuario, puntos, estado){
    this.usuario= usuario
    this.puntos = puntos
    this.estado = estado
  }
}
const Usuario1 = new Datos(prompt("Nombre"), 0, "")
textoUsuario.innerHTML= `${Usuario1.usuario}`

// Opciones del juego en Array
const opciones = ["Piedra", "Papel", "Tijera"];
const historial = []

// Se genera un numero random para la elección maquina
const azar = Math.round(Math.random() * 2);

// Eleccion del usuario (jugador)
function eleccionJugador1() {
  eleccion = Number(prompt("Elije una opción: Piedra(1) - Papel(2) - Tijera(3)"));
  if (eleccion == 1) {
    jugador = 1;
    textoJugador.innerHTML= "Has elegido PIEDRA"
  } else if (eleccion == 2) {
    jugador = 2;
    textoJugador.innerHTML= "Has elegido PAPEL"
  } else if (eleccion == 3) {
    jugador = 3;
    textoJugador.innerHTML= "Has elegido TIJERA"
  } else {
    textoJugador.innerHTML = "No has elegido nada"
  }
}
function preguntaHistorial(){
  let pregunta = prompt("¿Ver historial? SI(1) NO(2)");
  if(pregunta == 2){
    textoResultado.innerHTML="¡Gracias por jugar!"
  } else if(pregunta == 1){
    historial.push(Usuario1)
    textoResultado.innerHTML = `${Usuario1.estado}`
  }
}

// Se compara el valor del usuario y el generado por el random de la maquina
function juego() {
  eleccionJugador1();
  // piedra
  if (jugador === 1 && azar === 0) {
    textoMaquina.innerHTML="La maquina elije PIEDRA"
    textoResultado.innerHTML="¡Hay empate!"
    Usuario1.estado = "Empate"
    Usuario1.puntos = 1
  } else if (jugador === 1 && azar === 1) {
    textoMaquina.innerHTML="La maquina elije PAPEL"
    textoResultado.innerHTML="¡Gana la maquina!"
    Usuario1.estado = "Derrota"
  } else if (jugador === 1 && azar === 2) {
    textoMaquina.innerHTML="La maquina elije TIJERA"
    textoResultado.innerHTML="¡Ganaste!"
    Usuario1.estado = "Victoria"
    Usuario1.puntos = 3
    // papel
  } else if (jugador === 2 && azar === 0) {
    textoMaquina.innerHTML="La maquina elije PIEDRA"
    textoResultado.innerHTML="¡Ganaste!"
    Usuario1.estado = "Victoria"
    Usuario1.puntos = 3
  } else if (jugador === 2 && azar === 1) {
    textoMaquina.innerHTML="La maquina elije PAPEL"
    textoResultado.innerHTML="¡Hay empate!"
    Usuario1.estado = "Empate"
    Usuario1.puntos = 2
  } else if (jugador === 2 && azar === 2) {
    textoMaquina.innerHTML="La maquina elije TIJERA"
    textoResultado.innerHTML="¡Gana la maquina!"
    Usuario1.estado = "Derrota"
    // tijera
  } else if (jugador === 3 && azar === 0) {
    textoMaquina.innerHTML="La maquina elije PIEDRA"
    textoResultado.innerHTML="¡Gana la maquina!"
    Usuario1.estado = "Derrota"
  } else if (jugador === 3 && azar === 1) {
    textoMaquina.innerHTML="La maquina elije PAPEL"
    textoResultado.innerHTML="¡Ganaste!"
    Usuario1.estado = "Victoria"
    Usuario1.puntos = 3
  } else if (jugador === 3 && azar === 2) {
    textoMaquina.innerHTML="La maquina elije TIJERA"
    textoResultado.innerHTML="¡Hay empate!"
    Usuario1.estado = "Empate"
    Usuario1.puntos = 1
  } else {
    textoJugador.innerHTML="Elije una opción"
    eleccionJugador1();
  }
}
juego();
preguntaHistorial()


