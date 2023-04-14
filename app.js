document.addEventListener("DOMContentLoaded" , () => {
  const cardAdj = [
    { name: "MU.png", img: "images/MU.png" },
    { name: "Olaf.png", img: "images/Olaf.png" },
    { name: "Wall-E.png", img: "images/Wall-E.png" },
    { name: "cars.png", img: "images/cars.png" },
    { name: "forky.png", img: "images/forky.png" },
    { name: "intensamente.png", img: "images/intensamente.png" },
    { name: "minions.png", img: "images/minions.png" },
    { name: "pascal.png", img: "images/pascal.png" },
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "imagenes/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);

function verificarPareja() {
  var cards = document.querySelectorAll("img");
  const opcionUnoId = cartasEscogidas[0];
  const opcionDosId = cartasEscogidas[1];

  if (opcionUnoId === opcionDosId) {
    cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
    cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
    alert("¡Diste click a la misma imagen!");
  } else if(cartasEscogidas[0] === cartasEscogidas[1]) {
    alert("¡Correcto!");
    cards[opcionUnoId].setAttribute("src", "imagenes/balnk.png");
    cards[opcionUnoId].setAttribute("src", "imagenes/balnk.png");
    cards[opcionUnoId].removeEventListener("click", voltearCarta);
    cards[opcionUnoId].removeEventListener("click", voltearCarta);
  }