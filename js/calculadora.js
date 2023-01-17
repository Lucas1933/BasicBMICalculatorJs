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
    let { peso, altura, edad, sexo, nivelDeActividad } = persona;
    let resultado;
    if (this.validateValues(persona)) {
      let valorPorSexo = 5;
      if (sexo === "femenino") {
        valorPorSexo = -161;
      }
      resultado =
        10 * parseInt(peso) +
        6.25 * parseInt(altura) -
        5 * parseInt(edad) +
        valorPorSexo;
    } else {
      resultado = NaN;
    }
    return resultado * parseFloat(nivelDeActividad);
  }

  validateValues(persona) {
    let { peso, altura, edad } = persona;
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
      return true;
    }
  }
}
