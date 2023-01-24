const radioInputAltura = [];
radioInputAltura.push(
  document.getElementById("cm"),
  document.getElementById("ft")
);
export let unidadDeAlturaSeleccionada;

function setUnidadDefault() {
  radioInputAltura[0].checked = true;
  unidadDeAlturaSeleccionada = "cm";
}
function setListenerForRadios() {
  radioInputAltura.forEach((cadaInput) => {
    cadaInput.addEventListener("click", getAltura);
  });
}

function getAltura(event) {
  radioInputAltura.forEach((cadaInput) => {
    cadaInput.checked = false;
  });
  event.target.checked = true;
  unidadDeAlturaSeleccionada = event.target.id;
}

setUnidadDefault();
setListenerForRadios();
