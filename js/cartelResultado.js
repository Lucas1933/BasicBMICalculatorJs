let resultadoText = document.getElementById("resultadoText");
const fuegosIcon = document.querySelectorAll(".fuego");
/**
 *accede a los elementos del cartel, les da estilo y appends el resultado.
 * @param {floar} resultado
 */
export function appendResult(resultado) {
  if (!isNaN(resultado)) {
    fuegosIcon[0].classList.remove("hidden");
    fuegosIcon[1].classList.remove("hidden");
    resultadoText.style.color = "white";
    resultadoText.style.fontSize = "30px";
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
  fuegosIcon[0].classList.add("hidden");
  fuegosIcon[1].classList.add("hidden");
  resultadoText.style.color = "#FF4747"; /* rojo error je */
  resultadoText.style.fontSize = "20px";
  resultadoText.innerText = "Uno de los valores ingresados es invalido";
}
