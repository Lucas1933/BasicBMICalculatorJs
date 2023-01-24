/* M o F radio input */
const radioInputSexo = [];
radioInputSexo.push(
  document.getElementById("masculino"),
  document.getElementById("femenino")
);
export let sexoSeleccionado;

function setRadioSexoDefault() {
  radioInputSexo[0].checked = true;
  sexoSeleccionado = "masculino";
}
function setListenerForRadios() {
  radioInputSexo.forEach((cadaRadio) => {
    cadaRadio.addEventListener("click", getSexo);
  });
}

function getSexo(event) {
  radioInputSexo.forEach((cadaRadio) => {
    cadaRadio.checked = false;
  });
  event.target.checked = true;
  sexoSeleccionado = event.target.id;
}
setRadioSexoDefault();
setListenerForRadios();
