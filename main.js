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

// Opciones del juego en Array
const opciones = ["Piedra", "Papel", "Tijera"];
const historial = []
// Se genera un numero random para la elección maquina
const azar = Math.round(Math.random() * 2);

// Eleccion del usuario (jugador)
function eleccionJugador1() {
  eleccion = Number(prompt("Elije una opción: Piedra(1) - Papel(2) - Tijera(3)"));
  if (eleccion == 1) {
    console.log("Has elegido PIEDRA");
    jugador = 1;
  } else if (eleccion == 2) {
    console.log("Has elegido PAPEL");
    jugador = 2;
  } else if (eleccion == 3) {
    console.log("Has elegido TIJERA");
    jugador = 3;
  } else {
    console.log("Elije una opción: Piedra(1) - Papel(2) - Tijera(3)");
  }
}
function preguntaHistorial(){
  let pregunta = prompt("¿Ver historial? SI(1) NO(2)");
  if(pregunta == 2){
    console.log("¡Gracias por jugar!");
  } else if(pregunta == 1){
    historial.push(Usuario1)
  }
}

// Se compara el valor del usuario y el generado por el random de la maquina
function juego() {
  eleccionJugador1();
  // piedra
  if (jugador === 1 && azar === 0) {
    console.log("La maquina elije PIEDRA");
    console.log("¡Hay empate!");
    Usuario1.estado = "Empate"
    Usuario1.puntos = 1
  } else if (jugador === 1 && azar === 1) {
    console.log("La maquina elije PAPEL");
    console.log("¡Gana la maquina!");
    Usuario1.estado = "Derrota"
  } else if (jugador === 1 && azar === 2) {
    console.log("La maquina elije TIJERA");
    console.log("¡Ganaste!");
    Usuario1.estado = "Victoria"
    Usuario1.puntos = 3
    // papel
  } else if (jugador === 2 && azar === 0) {
    console.log("La maquina elije PIEDRA");
    console.log("¡Ganaste!");
    Usuario1.estado = "Victoria"
    Usuario1.puntos = 3
  } else if (jugador === 2 && azar === 1) {
    console.log("La maquina elije PAPEL");
    console.log("¡Hay empate!");
    Usuario1.estado = "Empate"
    Usuario1.puntos = 2
  } else if (jugador === 2 && azar === 2) {
    console.log("La maquina elije TIJERA");
    console.log("¡Gana la maquina!");
    Usuario1.estado = "Derrota"
    // tijera
  } else if (jugador === 3 && azar === 0) {
    console.log("La maquina elije PIEDRA");
    console.log("¡Gana la maquina!");
    Usuario1.estado = "Derrota"
  } else if (jugador === 3 && azar === 1) {
    console.log("La maquina elije PAPEL");
    console.log("¡Ganaste!");
    Usuario1.estado = "Victoria"
    Usuario1.puntos = 3
  } else if (jugador === 3 && azar === 2) {
    console.log("La maquina elije TIJERA");
    console.log("¡Hay empate!");
    Usuario1.estado = "Empate"
    Usuario1.puntos = 1
  } else {
    console.log("Coloca un número");
    eleccionJugador1();
  }
}
juego();
preguntaHistorial()
console.log(historial);

