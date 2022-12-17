let sexo = document.querySelectorAll("input[type=checkbox]");
sexo[0].checked = true;
let botonesNivelDeActividad = document.getElementsByName("nivelDeActividad");
let botonCalcular = document.getElementById("calcularBoton");
let nivelDeActividad;
let sexoSeleccionado;

sexo.forEach((radio) => {
  radio.addEventListener("click", setCheckBoxSelection, false);
});
botonCalcular.addEventListener("click", main, false);

botonesNivelDeActividad.forEach((boton) => {
  boton.addEventListener("click", setNivelDeActividad, false);
  boton.addEventListener("click", setNivelDeActividadBotonEstilo, false);
});

function setNivelDeActividad(event) {
  nivelDeActividad = event.target.value;
}

function setNivelDeActividadBotonEstilo(event) {
  let etiquetas = document
    .getElementById("nivelDeActividadDiv")
    .querySelectorAll("label:nth-child(odd)");
  for (let i = 0; i < etiquetas.length; i++) {
    if (etiquetas[i].htmlFor === event.target.id) {
      etiquetas.forEach((cadaEtiqueta) => {
        cadaEtiqueta.style.borderColor = "black";
      });
      etiquetas[i].style.borderColor = "#2196F3";
      setNivelDeActividadBotonAnimation(etiquetas[i], etiquetas);
    }
  }
}

function setNivelDeActividadBotonAnimation(etiquetaSeleccionada, etiquetas) {
  etiquetaSeleccionada.classList.add("animate-pingOnce");
  etiquetaSeleccionada.addEventListener(
    "animationend",
    function () {
      etiquetaSeleccionada.classList.remove("animate-pingOnce");
    },
    false
  );
}

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
    this.nivelDeActividad = nivelDeActividad;
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
  if (!isNaN(resultado)) {
    resultadoText.innerText = parseInt(resultado) + " Kl";
    let cartelResultado = document.body.querySelector("div:first-child");
    cartelResultado.classList.remove("hidden");
  }
}

function validateValues(peso, altura, edad) {
  if (
    isNaN(peso) ||
    isNaN(altura) ||
    isNaN(edad) ||
    peso <= 0 ||
    altura <= 0 ||
    edad <= 0
  ) {
    document.getElementById("resultadoText").style.color = "#FF4747";
    document.getElementById("resultadoText").innerText =
      "Uno de los valores ingresados es invalido";
    let cartelResultado = document.body.querySelector("div:first-child");
    cartelResultado.classList.remove("hidden");
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
