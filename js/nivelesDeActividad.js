/* seleccion y animacion de niveles de actividad listeners */
const inputsNivelDeActividad = document.getElementsByName("nivelDeActividad");
const etiquetas = document
  .getElementById("nivelDeActividadDiv")
  .querySelectorAll("label:nth-child(odd)");
/* valores iniciales para evitar errores si se presiona calcular sin ingresar nada */
etiquetas[0].style.borderColor = "#2196F3";
export let nivelDeActividad = 1.2;

export function setInputActividadListener() {
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
 * @param {Parameter} etiquetaSeleccionada
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
