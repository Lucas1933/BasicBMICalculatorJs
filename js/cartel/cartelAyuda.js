/* cuadro de dialogo sobre los niveles de actividad */
const iconoDeAyuda = document.getElementById("helpIcon");
const iconoDeCierre = document.getElementById("closeIcon");
const cuadroDeDialogo = document.getElementById("cuadroDeAyuda");

export function setCartelAyudaListeners() {
  iconoDeAyuda.addEventListener("click", abrirCuadroDeDialogo);
  iconoDeCierre.addEventListener("click", cerrarCuadroDeDialogo);
}

function abrirCuadroDeDialogo(event) {
  cuadroDeDialogo.classList.remove("hidden");
}

function cerrarCuadroDeDialogo(event) {
  cuadroDeDialogo.classList.add("hidden");
}
setCartelAyudaListeners();
