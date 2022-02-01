var maquina = random(0, 2);
var jugador;
// Randomizacion del numero maquina
function random(minimo, maximo) {
  eleccionMaquina = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return eleccionMaquina;
}
// Eleccion del jugador
function eleccionJugador1() {
  eleccion = parseInt(prompt("Piedra(1) - Papel(2) - Tijera(3)"));
  if ((eleccion = 1)) {
    jugador = 1;
    console.log("Has elegido PIEDRA");
  } else if ((eleccion = 2)) {
    jugador = 2;
    console.log("Has elegido PAPEL");
  } else if ((eleccion = 3)) {
    jugador = 3;
    console.log("Has elegido TIJERA");
  } else {
    console.log("Elije una opción");
  }
}
// Comparacion de valores
function juego() {
  random(0,2);
  eleccionJugador1();
  // piedra
  if (jugador === 1 && maquina === 0) {
    console.log("La maquina elije PIEDRA");
    console.log("¡Hay empate!");
  } else if (jugador === 1 && maquina === 1) {
    console.log("La maquina elije PAPEL");
    console.log("¡Gana la maquina!");
  } else if (jugador === 1 && maquina === 2) {
    console.log("La maquina elije TIJERA");
    console.log("¡Ganaste!");
    // papel
  } else if (jugador === 2 && maquina === 0) {
    console.log("La maquina elije PIEDRA");
    console.log("¡Ganaste!");
  } else if (jugador === 2 && maquina === 1) {
    console.log("La maquina elije PAPEL");
    console.log("¡Hay empate!");
  } else if (jugador === 2 && maquina === 2) {
    console.log("La maquina elije TIJERA");
    console.log("¡Gana la maquina!");
    // tijera
  } else if (jugador === 3 && maquina === 0) {
    console.log("La maquina elije PIEDRA");
    console.log("¡Gana la maquina!");
  } else if (jugador === 3 && maquina === 1) {
    console.log("La maquina elije PAPEL");
    console.log("¡Ganaste!");
  } else if (jugador === 3 && maquina === 2) {
    console.log("La maquina elije TIJERA");
    console.log("¡Hay empate!");
  } else {
    console.log("Coloca un número");
}
}
  
juego();
