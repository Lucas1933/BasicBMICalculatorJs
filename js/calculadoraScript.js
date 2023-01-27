import { showResult } from "./cartel/cartelResultado.js";
import { printHistorial } from "./historial/historial.js";
import { setCartelAyudaListeners } from "./cartel/cartelAyuda.js";
import { showExercises } from "./APIexercises/showExercises.js";
setCartelAyudaListeners();
const btnCalcular = document.getElementById("calcularBoton");
btnCalcular.addEventListener("click", exeCalculo);
function exeCalculo() {
  if (showResult()) {
    showExercises();
  }
  printHistorial();
}
