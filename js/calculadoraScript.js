class Persona {
  constructor() {
    this.peso = document.getElementById("peso").value;
    this.altura = document.getElementById("altura").value;
    this.edad = document.getElementById("edad").value;
    this.sexo = sexoSeleccionado;
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

/**
 *Class CalculadoraMetabolica, se encarga de calcular las calorias y
 *validar los valores.
 */
class CalculadoraMetabolica {
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
/* M o F radio input */
const sexo = document.querySelectorAll("input[type=checkbox]");
let sexoSeleccionado;
setRadioSexoDefault();
setListenerForRadios();

function setRadioSexoDefault() {
  sexo[0].checked = true;
  sexoSeleccionado = "masculino";
}
function setListenerForRadios() {
  sexo.forEach((radio) => {
    radio.addEventListener("click", setCheckBoxSelection, false);
  });
}
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
let nivelDeActividad;
setInputActividadListener();

function setInputActividadListener() {
  inputsNivelDeActividad.forEach((boton) => {
    boton.addEventListener("click", setNivelDeActividad, false);
    boton.addEventListener("click", setNivelDeActividadBotonEstilo, false);
  });
}
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

/* Calculo*/
const botonCalcular = document.getElementById("calcularBoton");
botonCalcular.addEventListener("click", main);
botonCalcular.addEventListener("click", print);
function main() {
  let persona = new Persona();
  const calculadora = new CalculadoraMetabolica();
  let resultado = calculadora.obtenerCalorias(persona);
  appendResult(resultado);
  setHistorialDeCalculos(persona);
}
/**
 *accede a los elementos del cartel, les da estilo y appends el resultado.
 * @param {floar} resultado
 */
function appendResult(resultado) {
  if (!isNaN(resultado)) {
    let resultadoText = document.getElementById("resultadoText");
    let fuegosIcon = document.querySelectorAll(".fuego");
    fuegosIcon[0].classList.remove("hidden");
    fuegosIcon[1].classList.remove("hidden");
    resultadoText.style.color = "white";
    resultadoText.innerText = parseInt(resultado);
  } else {
    appendDatoinvalido();
  }
}
/**
 *añade al div que contiene el cartel para mostrar el resultado
 *informando que uno de los valores es invalido
 *finalmente remueve la class hidden mostrando asi el cartel
 * @return {void}
 */
function appendDatoinvalido() {
  const resultadoText = document.getElementById("resultadoText");
  let fuegosIcon = document.querySelectorAll(".fuego");
  fuegosIcon[0].classList.add("hidden");
  fuegosIcon[1].classList.add("hidden");
  resultadoText.style.color = "#FF4747";
  resultadoText.innerText = "Uno de los valores ingresados es invalido";
}
function setHistorialDeCalculos(persona) {
  localStorage.setItem(persona.id, JSON.stringify(persona));
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

document.getElementById("clean").addEventListener("click", () => {
  localStorage.clear();
  print();
});

const botonDesplegarHistorial = document.getElementById("historial");
const btnImg = document.getElementById("historialIcon");
const historialCartel = document.getElementById("historialCartel");

botonDesplegarHistorial.addEventListener("click", print);
botonDesplegarHistorial.addEventListener("click", () => {
  let activeClass =
    botonDesplegarHistorial.classList[
      botonDesplegarHistorial.classList.length - 1
    ];
  let iconoExpand = "../assets/icons/toggle-expand-all-svgrepo-com.svg";
  let iconoCollapse = "../assets/icons/toggle-collapse-all-svgrepo-com.svg";

  if (activeClass == "active") {
    botonDesplegarHistorial.classList.remove("active");
    historialCartel.classList.add("invisible");
    btnImg.src = iconoExpand;
  } else {
    botonDesplegarHistorial.classList.add("active");
    historialCartel.classList.remove("invisible");
    btnImg.src = iconoCollapse;
  }
});
function print() {
  let calculadora = new CalculadoraMetabolica();
  const historialDiv = document.getElementById("historialCartel");
  historialDiv.innerText = " ";
  for (let i = 1; i < localStorage.length; i++) {
    let cadaPersona = JSON.parse(localStorage.getItem(i));
    if (calculadora.validateValues(cadaPersona)) {
      historialDiv.innerHTML +=
        '<div class= "border-solid border-[1px] border-black" >' +
        "Peso: " +
        cadaPersona.peso +
        "<br>" +
        "Altura: " +
        cadaPersona.altura +
        "<br>" +
        "Edad: " +
        cadaPersona.edad +
        "<br>" +
        "Sexo: " +
        cadaPersona.sexo +
        "<br>" +
        "Fecha: " +
        cadaPersona.fecha +
        "<br>" +
        "ID: " +
        cadaPersona.id +
        "</div>";
    }
  }
}
