/* M o F radio input */
const sexo = document.querySelectorAll("input[type=checkbox]");
export let sexoSeleccionado;

export function setRadioSexoDefault() {
  sexo[0].checked = true;
  sexoSeleccionado = "masculino";
}
export function setListenerForRadios() {
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
