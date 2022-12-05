let sexo = document.querySelectorAll("input[type=checkbox]");
let botonCalcular = document.getElementById("calcularBoton");
let sexoSeleccionado;

sexo.forEach((radio) => {
  radio.addEventListener("click", setCheckBoxSelection, false);
});
botonCalcular.addEventListener("click", main, false);

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
function appendResult(resultado) {
  let resultadoText = document.getElementById("resultadoText");
  resultadoText.style.color = "white";
  resultadoText.innerText = parseInt(resultado) + " Kl";
}

function validateValues(peso, altura, edad) {
  if (isNaN(peso) || isNaN(altura) || isNaN(edad)) {
    document.getElementById("resultadoText").style.color = "#FF4747";
    document.getElementById("resultadoText").innerText =
      "Uno de los valores ingresados es invalido";
    return false;
  } else {
    return true;
  }
}
function main() {
  let persona = new Persona();
  if (validateValues(persona.peso, persona.altura, persona.edad)) {
    let calculadora = new CalculadoraMetabolica();
    let resultado = calculadora.obtenerCalorias(
      persona.peso,
      persona.altura,
      persona.edad,
      persona.sexo,
      persona.nivelDeActividad
    );
    appendResult(resultado);
  }
}
