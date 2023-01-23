import { appendResult } from "./cartel/cartelResultado.js";
import { setCuadroDeAyudaListeners } from "./cartel/cartelAyuda.js";
const btnCalcular = document.getElementById("calcularBoton");
btnCalcular.addEventListener("click", exeCalculo);

function exeCalculo() {
  appendResult();
}
setCuadroDeAyudaListeners();
