import { unidadDeMasaSeleccionada } from "../inputs/unidadMasa.js";
import { unidadDeAlturaSeleccionada } from "../inputs/unidadAltura.js";
const desplegarBtn = document.getElementById("desplegarHistorial");
const cleanBtn = document.getElementById("cleanHistorial");
const historialDiv = document.getElementById("historialCartel");
const expandIcon = "../assets/icons/toggle-expand-all-svgrepo-com.svg";
const collapseIcon = "../assets/icons/toggle-collapse-all-svgrepo-com.svg";
desplegarBtn.addEventListener("click", desplegarHistorial);
cleanBtn.addEventListener("click", clearHistorial);
function desplegarHistorial() {
  if (historialDiv.classList.contains("invisible")) {
    printHistorial();
    historialDiv.classList.remove("invisible");
    desplegarBtn.firstElementChild.src = " ";
    desplegarBtn.firstElementChild.src = collapseIcon;
  } else {
    historialDiv.classList.add("invisible");
    desplegarBtn.firstElementChild.src = expandIcon;
  }
}
function clearHistorial() {
  localStorage.clear();
  historialDiv.innerHTML = " ";
}
export function printHistorial() {
  historialDiv.innerHTML = " ";
  for (let i = 1; i < localStorage.length; i++) {
    let persona = JSON.parse(localStorage.getItem(i));
    let { peso, altura, edad, sexo, _ignore, fecha, id } = persona;
    historialDiv.innerHTML += `<div class="border-solid border-black border-2">
    Peso: ${peso} ${unidadDeMasaSeleccionada} 
      <br> 
      Altura: ${altura} ${unidadDeAlturaSeleccionada}  
      <br> 
      Edad: ${edad} 
      <br>
      Sexo: ${sexo} 
      <br>
      Nivel de actividad: ${persona.nivelDeActividad} 
      <br>
      Fecha: ${fecha} 
      <br>
      ID: ${id} 
      <br>
      </div>`;
  }
}
