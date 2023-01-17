/**
 *Class CalculadoraMetabolica, se encarga de calcular las calorias y
 *validar los valores.
 */
export class CalculadoraMetabolica {
  constructor() {}

  /* Fórmula de Mifflin 
     hombres: (10 x peso en kg) + (6,25 x altura en cm) - (5 x edad en años) + 5
     mujeres: (10 × peso en kg) + (6,25 x altura en cm) - (5 × edad en años) - 161
   */
  obtenerCalorias(persona) {
    let resultado;
    if (this.validateValues(persona)) {
      let valorPorSexo = 5;
      if (persona.sexo === "femenino") {
        valorPorSexo = -161;
      }
      resultado =
        10 * parseInt(persona.peso) +
        6.25 * parseInt(persona.altura) -
        5 * parseInt(persona.edad) +
        valorPorSexo;
    } else {
      resultado = NaN;
    }
    return resultado * parseFloat(persona.nivelDeActividad);
  }

  validateValues(persona) {
    if (
      isNaN(persona.peso) ||
      isNaN(persona.altura) ||
      isNaN(persona.edad) ||
      persona.peso <= 0 ||
      persona.altura <= 0 ||
      persona.edad <= 0
    ) {
      return false;
    } else {
      return true;
    }
  }
}
