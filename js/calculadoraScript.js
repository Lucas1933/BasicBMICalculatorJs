/* botones radio de sexo */
let sexo = document.querySelectorAll("input[type=checkbox]");
sexo[0].checked = true; /*se lo deja checkeado para no tener que controlar si fue seleccionado*/
sexo.forEach((radio) => {
  radio.addEventListener("click", setCheckBoxSelection, false);
});
let sexoSeleccionado = "masculino";
function setCheckBoxSelection(event) {
  sexo.forEach((cadaRadio) => {
    cadaRadio.checked = false;
  });
  event.target.checked = true;
  sexoSeleccionado = event.target.id;
}
/* botones radio de sexo */

/* inputs niveles de actividad */
let botonesNivelDeActividad = document.getElementsByName("nivelDeActividad");
botonesNivelDeActividad.forEach((boton) => {
  boton.addEventListener("click", setNivelDeActividad, false);
  boton.addEventListener("click", setNivelDeActividadBotonEstilo, false);
});

let nivelDeActividad;
function setNivelDeActividad(event) {
  nivelDeActividad = event.target.value;
}

function setNivelDeActividadBotonEstilo(event) {
  let etiquetas = document
    .getElementById("nivelDeActividadDiv")
    .querySelectorAll(
      "label:nth-child(odd)" /* obtengo los hijos impares que son las labels para animarlas */
    );
  for (let i = 0; i < etiquetas.length; i++) {
    if (etiquetas[i].htmlFor === event.target.id) {
      etiquetas.forEach((cadaEtiqueta) => {
        cadaEtiqueta.style.borderColor = "black";
      });
      etiquetas[i].style.borderColor = "#2196F3";
      setNivelDeActividadBotonAnimation(etiquetas[i]);
    }
  }
}

function setNivelDeActividadBotonAnimation(etiquetaSeleccionada) {
  etiquetaSeleccionada.classList.add("animate-pingOnce");
  etiquetaSeleccionada.addEventListener(
    "animationend",
    function () {
      etiquetaSeleccionada.classList.remove("animate-pingOnce");
    },
    false
  );
}
/* inputs niveles de actividad */

/* boton calcular */
let botonCalcular = document.getElementById("calcularBoton");
botonCalcular.addEventListener("click", main, false);
/* boton calcular */

/* function principal, se ejecuta al presionar calcular dando pie a la parte principal del programa */
const historial = [];
function main() {
  let persona = new Persona();
  let calculadora = new CalculadoraMetabolica();
  calculadora.obtenerCalorias(persona);
  /* codigo para consigna uso metodo de array. De no ser obligatorio no va a estar en la implementacion final */
  historial.push(persona);
  console.log(
    "Historial femenino: " +
      JSON.stringify(
        historial.filter((cadaPersona) => cadaPersona.sexo === "femenino")
      )
  );
  console.log(
    "Historial masculino: " +
      JSON.stringify(
        historial.filter((cadaPersona) => cadaPersona.sexo === "masculino")
      )
  );
  /* codigo para consigna uso metodo de array. De no ser obligatorio no va a estar en la implementacion final */
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
  validateValues(persona) {
    if (
      isNaN(persona.peso) ||
      isNaN(persona.altura) ||
      isNaN(persona.edad) ||
      persona.peso <= 0 ||
      persona.altura <= 0 ||
      persona.edad <= 0
    ) {
      this.appendDatoinvalido();
      return false;
    } else {
      return true;
    }
  }
  appendDatoinvalido() {
    let cartelResultado = document.body.querySelector(
      "div:first-child" /* primer hijo del body, el div que es el cartel con el resultado */
    );
    let caloriasQuemadasPorDia = cartelResultado.firstElementChild;
    let resultadoText = cartelResultado.lastElementChild;
    caloriasQuemadasPorDia.innerText = " ";
    resultadoText.style.color = "#FF4747";
    resultadoText.innerText = "Uno de los valores ingresados es invalido";
    cartelResultado.classList.remove("hidden");
  }
  /* ecuacion Mifflin-St Jeor para la Tasa Metabolica Basal */
  /* TMB = (10 x peso en kg) + (6,25 × altura en cm) – (5 × edad en años) + 5 */ /* de ser femenino se cambia el 5 por un -161 */
  obtenerCalorias(persona) {
    if (this.validateValues(persona)) {
      let resultado;
      let valorPorSexo = 5;
      if (persona.sexo === "femenino") {
        valorPorSexo = -161;
      }
      resultado =
        10 * parseInt(persona.peso) +
        6.25 * parseInt(persona.altura) -
        5 * parseInt(persona.edad) +
        valorPorSexo;
      this.appendResult(resultado * parseFloat(persona.nivelDeActividad));
      return resultado * parseFloat(persona.nivelDeActividad);
    }
  }
  appendResult(resultado) {
    let cartelResultado = document.body.querySelector("div:first-child");
    let caloriasQuemadasPorDia = cartelResultado.firstElementChild;
    let resultadoText = cartelResultado.lastElementChild;
    resultadoText.style.color = "white";

    if (!isNaN(resultado)) {
      caloriasQuemadasPorDia.innerText = "Calorias quemadas por dia:";
      resultadoText.innerText = parseInt(resultado) + " Kl";
      cartelResultado.classList.remove("hidden");
    }
  }
}

/* function principal, se ejecuta al presionar calcular dando pie a la parte principal del programa */

/* cuadro de dialogo sobre los niveles de actividad */
let iconoDeAyuda = document.getElementById("helpIcon");
iconoDeAyuda.addEventListener("click", abrirCuadroDeDialogo, false);

let iconoDeCierre = document.getElementById("closeIcon");
iconoDeCierre.addEventListener("click", cerrarCuadroDeDialogo, false);

let cuadroDeDialogoNdeActividad =
  iconoDeCierre.parentNode.parentNode.parentNode.parentNode;

function abrirCuadroDeDialogo(event) {
  cuadroDeDialogoNdeActividad.classList.remove("hidden");
}

function cerrarCuadroDeDialogo(event) {
  cuadroDeDialogoNdeActividad.classList.add("hidden");
}
/* cuadro de dialogo sobre los niveles de actividad */
