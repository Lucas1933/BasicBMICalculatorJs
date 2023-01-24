const radioInputMasa = [];
radioInputMasa.push(
  document.getElementById("kg"),
  document.getElementById("lb")
);
export let unidadDeMasaSeleccionada;

function setUnidadDefault() {
  radioInputMasa[0].checked = true;
  unidadDeMasaSeleccionada = "kg";
}
function setListenerForRadios() {
  radioInputMasa.forEach((cadaInput) => {
    cadaInput.addEventListener("click", getMasa);
  });
}

function getMasa(event) {
  radioInputMasa.forEach((cadaInput) => {
    cadaInput.checked = false;
  });
  event.target.checked = true;
  unidadDeMasaSeleccionada = event.target.id;
}

setUnidadDefault();
setListenerForRadios();
