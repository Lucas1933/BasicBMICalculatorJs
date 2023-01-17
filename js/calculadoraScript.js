import { CalculadoraMetabolica } from "./calculadora.js";
import { Persona } from "./persona.js";
import { setRadioSexoDefault, setListenerForRadios } from "./radios.js";
import { setInputActividadListener } from "./nivelesDeActividad.js";
import { appendResult as mostrarResultado } from "./cartelResultado.js";
import { setCuadroDeAyudaListeners } from "./cuadroDeAyuda.js";
import {
  setHistorialDeCalculos,
  setHistorialListeners,
  print,
} from "./historial.js";
setRadioSexoDefault();
setListenerForRadios();
setInputActividadListener();
setCuadroDeAyudaListeners();
setHistorialListeners();
const botonCalcular = document.getElementById("calcularBoton");
botonCalcular.addEventListener("click", main);
botonCalcular.addEventListener("click", print);
function main() {
  let persona = new Persona();
  const calculadora = new CalculadoraMetabolica();
  let resultado = calculadora.obtenerCalorias(persona);
  mostrarResultado(resultado);
  setHistorialDeCalculos(persona);
}
