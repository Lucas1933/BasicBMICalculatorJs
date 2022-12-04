let sexo = document.querySelectorAll("input[type=checkbox]");
let botonCalcular = document.getElementById("calcularBoton");
let sexoSeleccionado;

sexo.forEach((radio) => {
  radio.addEventListener("click", setCheckBoxSelection, false);
});
botonCalcular.addEventListener("click", crearFormulario, false);

function setCheckBoxSelection(event) {
  sexo.forEach((cadaRadio) => {
    cadaRadio.checked = false;
  });
  event.target.checked = true;
  sexoSeleccionado = event.target.id;
}

class Persona {
  constructor() {
    this.peso = document.getElementById("peso").value;
    this.altura = document.getElementById("altura").value;
    this.edad = document.getElementById("edad").value;
    this.sexo = sexoSeleccionado;
    this.nivelDeActividad = document.getElementById("nivelDeActividad").value;
  }
}

/* Hombres	TMB = (10 x peso en kg) + (6,25 × altura en cm) – (5 × edad en años) + 5
Mujeres	TMB = (10 x peso en kg) + (6,25 × altura en cm) – (5 × edad en años) – 161 */
class CalculadoraMetabolica {
  constructor() {}
  obtenerCalorias(peso, altura, edad, sexo, nivelDeActividad) {
    let resultado;
    let valorPorSexo = 5;
    if (sexo === "femenino") {
      valorPorSexo = -161;
    }
    resultado =
      10 * parseInt(peso) +
      6.25 * parseInt(altura) -
      5 * parseInt(edad) +
      valorPorSexo;

    return resultado * parseFloat(nivelDeActividad);
  }
}

function crearFormulario() {
  let persona = new Persona();
  let calculadora = new CalculadoraMetabolica();
  console.log(
    calculadora.obtenerCalorias(
      persona.peso,
      persona.altura,
      persona.edad,
      persona.sexo,
      persona.nivelDeActividad
    )
  );
  let div = document.createElement("div");
  let p = document.createElement("p");
  div.style.backgroundColor = "black";
  p.innerText = calculadora.obtenerCalorias(
    persona.peso,
    persona.altura,
    persona.edad,
    persona.sexo,
    persona.nivelDeActividad
  );
  p.style.color = "white";
  div.append(p);
  document.body.append(div);
}
