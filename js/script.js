// EJERCICIO 1
let vida = 100;
let pociones = 3;
const limiteInferior = 50;
const limiteSuperior = 100;

console.log("EJERCICIO 1: Autocuración");
console.log(`Vida inicial: ${vida}. Pociones: ${pociones}`);

const intervalo = setInterval(() => {
  vida -= 5;

  if (vida <= 0) {
    vida = 0;
    console.log("Vida: 0. Fin del juego.");
    clearInterval(intervalo);
    return;
  }

  console.log(`La vida bajó a: ${vida}`);

  if (vida < limiteInferior && pociones > 0) {
    vida += 30;
    pociones--;

    if (vida > limiteSuperior) {
      vida = limiteSuperior;
    }

    console.log(`Poción utilizada. Vida: ${vida}. Pociones: ${pociones}`);
  }
}, 2000);

// EJERCICIO 2
const bolsa = [
  { nombre: "Pokeball", cantidad: 5, tipo: "Normal" },
  { nombre: "Repel", cantidad: 3, tipo: "Normal" },
  { nombre: "Quick Attack", cantidad: 2, tipo: "TM" },
  { nombre: "Surf", cantidad: 3, tipo: "TM" },
  { nombre: "Soda Pop", cantidad: 10, tipo: "Consumable" }
];

function organizarBolsa(elementos) {
  const normales = [];
  const maquinasTecnicas = [];
  const consumibles = [];

  elementos.forEach(elemento => {
    if (elemento.tipo === "Normal") {
      normales.push(elemento);
    } else if (elemento.tipo === "TM") {
      maquinasTecnicas.push(elemento);
    } else if (elemento.tipo === "Consumable") {
      consumibles.push(elemento);
    }
  });

  normales.sort((a, b) => b.cantidad - a.cantidad);
  maquinasTecnicas.sort((a, b) => b.cantidad - a.cantidad);
  consumibles.sort((a, b) => b.cantidad - a.cantidad);

  console.log("Normales:", normales);
  console.log("Máquinas técnicas:", maquinasTecnicas);
  console.log("Consumibles:", consumibles);
}

console.log("EJERCICIO 2: Bolsa ordenada");
organizarBolsa(bolsa);

// EJERCICIO 3
const pikachu = {
  nombre: "Pikachu",
  tipo: "Eléctrico",
  ataque: "Impacto",
  daño: 20,
  vida: 50,
  defensa: 10
};

const squirtle = {
  nombre: "Squirtle",
  tipo: "Agua",
  ataque: "Pistola Agua",
  daño: 25,
  vida: 50,
  defensa: 10
};

function calcularDanio(atacante, defensor) {
  let danio = atacante.daño - defensor.defensa;

  if (danio < 0) {
    danio = 0;
  }

  return danio;
}

function atacar(atacante, defensor) {
  if (atacante.vida <= 0 || defensor.vida <= 0) {
    console.log("No se puede atacar: uno de los Pokémon está debilitado.");
    return;
  }

  const danio = calcularDanio(atacante, defensor);
  console.log(`${atacante.nombre} usa ${atacante.ataque} contra ${defensor.nombre}.`);
  console.log(`Vida antes del ataque: ${defensor.vida}. Defensa: ${defensor.defensa}`);
  defensor.vida -= danio;

  if (defensor.vida < 0) {
    defensor.vida = 0;
  }

  console.log(`Daño causado: ${danio}. Vida de ${defensor.nombre}: ${defensor.vida}`);

  if (defensor.vida === 0) {
    console.log(`${defensor.nombre} quedó debilitado.`);
  }
}

console.log("EJERCICIO 3: Ataques Pokémon");
atacar(pikachu, squirtle);
atacar(squirtle, pikachu);
