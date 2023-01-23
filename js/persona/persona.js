import { sexoSeleccionado } from "./sex.js";
import { nivelDeActividadSeleccionado } from "./actividad.js";
function validarValores(peso, altura, edad) {
  if (
    isNaN(peso) ||
    isNaN(altura) ||
    isNaN(edad) ||
    peso <= 0 ||
    altura <= 0 ||
    edad <= 0
  ) {
    return false;
  } else {
    peso = parseInt(peso);
    altura = parseInt(altura);
    edad = parseInt(edad);
    return true;
  }
}

export function crearPersona() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let edad = document.getElementById("edad").value;
  let sexo = sexoSeleccionado;
  let nivelDeActividad = nivelDeActividadSeleccionado;
  if (!validarValores(peso, altura, edad)) {
    return null;
  }
  let persona = {
    peso: peso,
    altura: altura,
    edad: edad,
    sexo: sexo,
    nivelDeActividad: nivelDeActividad,
    fecha: new Date().toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
    id: 1,
  };
  return persona;
}
