import { sexoSeleccionado as sexo } from "./radios.js";
import { nivelDeActividad } from "./nivelesDeActividad.js";
export class Persona {
  constructor() {
    this.peso = document.getElementById("peso").value;
    this.altura = document.getElementById("altura").value;
    this.edad = document.getElementById("edad").value;
    this.sexo = sexo;
    this.nivelDeActividad = nivelDeActividad;
    this.fecha = new Date().toLocaleString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    this.id = this.asignarId();
  }

  asignarId() {
    let contador = 0;
    if (localStorage.getItem("id") == contador) {
      contador++;
      localStorage.setItem("id", contador);
    } else {
      contador = localStorage.getItem("id");
      contador++;
      localStorage.setItem("id", contador);
    }
    return localStorage.getItem("id");
  }
}
