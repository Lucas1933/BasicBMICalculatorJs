/* seleccion y animacion de niveles de actividad listeners */
const inputsNivelDeActividad = document.getElementsByName("nivelDeActividad");
const etiquetas = document
  .getElementById("nivelDeActividadDiv")
  .querySelectorAll("label:nth-child(odd)");
export let nivelDeActividadSeleccionado;

function setNivelDeActividadDefault() {
  etiquetas[0].style.borderColor = "#2196F3";
  nivelDeActividadSeleccionado = 1.2;
}
function setInputActividadListener() {
  inputsNivelDeActividad.forEach((boton) => {
    boton.addEventListener("click", setNivelDeActividad);
    boton.addEventListener("click", setNivelDeActividadBotonEstilo);
  });
}

function setNivelDeActividad(event) {
  nivelDeActividadSeleccionado = parseFloat(event.target.value);
}

function setNivelDeActividadBotonEstilo(event) {
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
  etiquetaSeleccionada.addEventListener("animationend", function () {
    etiquetaSeleccionada.classList.remove("animate-pingOnce");
  });
}
setNivelDeActividadDefault();
setInputActividadListener();
