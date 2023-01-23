import { crearPersona } from "../persona/persona.js";

export function getCalorias() {
  let persona = crearPersona();
  if (persona == null) {
    return 0;
  }
  let { peso, altura, edad, sexo, nivelDeActividad } = persona;
  let resultado;
  let valorPorSexo = 5;
  if (sexo === "femenino") {
    valorPorSexo = -161;
  }
  /* Fórmula de Mifflin 
     hombres: (10 x peso en kg) + (6,25 x altura en cm) - (5 x edad en años) + 5
     mujeres: (10 × peso en kg) + (6,25 x altura en cm) - (5 × edad en años) - 161
   */
  resultado = 10 * peso + 6.25 * altura - 5 * edad + valorPorSexo;
  return resultado * nivelDeActividad;
}
