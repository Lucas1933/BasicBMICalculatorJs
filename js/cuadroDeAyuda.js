/* cuadro de dialogo sobre los niveles de actividad */
let iconoDeAyuda = document.getElementById("helpIcon");
let iconoDeCierre = document.getElementById("closeIcon");
export function setCuadroDeAyudaListeners() {
  iconoDeAyuda.addEventListener("click", abrirCuadroDeDialogo, false);
  iconoDeCierre.addEventListener("click", cerrarCuadroDeDialogo, false);
}

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
