import { showResult } from "./cartel/cartelResultado.js";
import { setCuadroDeAyudaListeners } from "./cartel/cartelAyuda.js";
setCuadroDeAyudaListeners();

const btnCalcular = document.getElementById("calcularBoton");
btnCalcular.addEventListener("click", exeCalculo);

function exeCalculo() {
  showResult();
}
