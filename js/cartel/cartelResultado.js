import { getCalorias } from "../calculadora/calculadora.js";
let resultadoText = document.getElementById("resultadoText");
const fuegosIcon = document.querySelectorAll(".fuego");
export function appendResult() {
  let resultado = getCalorias();
  if (resultado == 0) {
    appendDatoinvalido();
  } else {
    resultado = parseInt(resultado);
    fuegosIcon[0].classList.remove("hidden");
    fuegosIcon[1].classList.remove("hidden");
    resultadoText.style.color = "white";
    resultadoText.style.fontSize = "30px";
    resultadoText.innerText = resultado;
  }
}

function appendDatoinvalido() {
  fuegosIcon[0].classList.add("hidden");
  fuegosIcon[1].classList.add("hidden");
  resultadoText.style.color = "#FF4747";
  resultadoText.style.fontSize = "20px";
  resultadoText.innerText = "Uno de los valores ingresados es invalido";
}
