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
  let cartelResultado = document.getElementById("resultadoDiv");
  let resultadoText = cartelResultado.firstChild;
  cartelResultado.style.backgroundColor = "black";
  resultadoText.innerText = resultado;
  resultadoText.style.color = "white";
  cartelResultado.append(resultadoText);
}
function main() {
  let persona = new Persona();
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
