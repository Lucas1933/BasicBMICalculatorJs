/* botones radio de sexo */
const sexo = document.querySelectorAll("input[type=checkbox]");
/* se lo deja hardcodeado para no tener que controlar si fue seleccionado */
sexo[0].checked = true;
sexo.forEach((radio) => {
  radio.addEventListener("click", setCheckBoxSelection, false);
});
let sexoSeleccionado = "masculino";
/**
 * Deja seleccionar solo un input radio (M || F).
 * Asigna al final a sexoSeleccionado el id del input seleccionado ("masculino" || "femenino").
 * @param {Event} event el input radio que dispara el evento.
 * @return {void}.
 */
function setCheckBoxSelection(event) {
  sexo.forEach((cadaRadio) => {
    cadaRadio.checked = false;
  });
  event.target.checked = true;
  sexoSeleccionado = event.target.id;
}

/* seleccion y animacion de niveles de actividad listeners */
const inputsNivelDeActividad = document.getElementsByName("nivelDeActividad");
inputsNivelDeActividad.forEach((boton) => {
  boton.addEventListener("click", setNivelDeActividad, false);
  boton.addEventListener("click", setNivelDeActividadBotonEstilo, false);
});

let nivelDeActividad;
/**
 * Asigna el value del boton de nivel de actividad seleccionado ("1.34, 1.75, etc")
 * @param {Event} event el boton de nivel de actividad que dispara el evento.
 * @return {void}.
 */
function setNivelDeActividad(event) {
  nivelDeActividad = event.target.value;
}
/**
 * Obtengo las labels, al clickear en una se cambia su borde y se restaura el borde del resto
 * finalmente a la etiqueta que triggerea el evento se la pasa por parametro a otra funcion
 * para animarla
 * @param {Event} event el boton de nivel de actividad que dispara el evento.
 * @return {void}.
 */
function setNivelDeActividadBotonEstilo(event) {
  const etiquetas = document
    .getElementById("nivelDeActividadDiv")
    .querySelectorAll("label:nth-child(odd)");
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
/**
 * Añado la animacion a la etiqueta que disparo el evento de la funcion anterior
 * Añado un listener que espera a que la animacion termine para remover la animacion (class)
 * esto permite que se pueda volver a disparar la animacion al seleccionar nuevamente
 * la misma etiqueta.
 * @param {Parameter} etiquetaSeleccionada la etiqueta que fue clickeada.
 * @return {void}.
 */
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

/**
 * funcion main que se ejecuta al presionar "calcular"
 * da pie a la creacion de un objeto Persona con los datos obtenidos del form
 * (peso, altura, etc)
 * se crea un objeto calculadora y se le pasa al metodo de la misma obtenerCalorias()
 * la persona creada.
 * @return {void}.
 */
const botonCalcular = document.getElementById("calcularBoton");
botonCalcular.addEventListener("click", main, false);
function main() {
  const persona = new Persona();
  const calculadora = new CalculadoraMetabolica();
  calculadora.obtenerCalorias(persona);
}

// eslint-disable-next-line require-jsdoc
class Persona {
  // eslint-disable-next-line require-jsdoc
  constructor() {
    this.peso = document.getElementById("peso").value;
    this.altura = document.getElementById("altura").value;
    this.edad = document.getElementById("edad").value;
    this.sexo = sexoSeleccionado;
    this.nivelDeActividad = nivelDeActividad;
  }
}
/**
 *Class CalculadoraMetabolica, se encarga de calcular las calorias
 *validar los valores y mostrar el resultado del calculo.
 */
class CalculadoraMetabolica {
  /**
   * constructor por defecto
   */
  constructor() {}
  /**
   *recibe una persona y valida que los datos sean numericos y mayores a cero
   *de ser invalidados llama appendDatoinvalido()
   *de otra forma devuelve true
   * @param {Persona} persona
   * @return {boolean}
   */
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
  /**
   *añade al div que contiene el cartel para mostrar el resultado
   *informando que uno de los valores es invalido
   *finalmente remueve la class hidden mostrando asi el cartel
   * @return {void}
   */
  appendDatoinvalido() {
    const cartelResultado = document.body.querySelector(
      "div:first-child" /* primer hijo del body, el div que es el cartel con el resultado */
    );
    const caloriasQuemadasPorDia = cartelResultado.firstElementChild;
    const resultadoText = cartelResultado.lastElementChild;
    caloriasQuemadasPorDia.innerText = " ";
    resultadoText.style.color = "#FF4747";
    resultadoText.innerText = "Uno de los valores ingresados es invalido";
    cartelResultado.classList.remove("hidden");
  }
  /**
   *utilizando la formula mifflin st jeor se calcula utilizando los valores
   *de la persona
   *retorna el resultado multiplicado por el nivel de actividad
   * @param {Persona} persona
   * @return {float}
   */
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
  /**
   *accede a los elementos del cartel, les da estilo y appends el resultado.
   * @param {floar} resultado
   */
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

/* cuadro de dialogo sobre los niveles de actividad */
let iconoDeAyuda = document.getElementById("helpIcon");
iconoDeAyuda.addEventListener("click", abrirCuadroDeDialogo, false);

let iconoDeCierre = document.getElementById("closeIcon");
iconoDeCierre.addEventListener("click", cerrarCuadroDeDialogo, false);

let cuadroDeDialogoNdeActividad =
  iconoDeCierre.parentNode.parentNode.parentNode.parentNode;
/**
 *remueve la class hidden del cuadro de dialogo
 *con la informacion acerca de los niveles de actividad
 * @param {Event} event el icono de ayuda azul
 */
function abrirCuadroDeDialogo(event) {
  cuadroDeDialogoNdeActividad.classList.remove("hidden");
}
/**
 *añade la class hidden del cartel con la informacion acerca de los niveles de actividad
 * @param {Event} event el icono de cierre del cuadro de dialogo
 */
function cerrarCuadroDeDialogo(event) {
  cuadroDeDialogoNdeActividad.classList.add("hidden");
}
