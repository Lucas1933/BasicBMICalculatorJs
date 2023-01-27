import { getCalorias } from "../calculadora/calculadora.js";
const cartelResultado = document.getElementById("cartelResultado");
export function showResult() {
  let resultado = getCalorias();
  if (resultado == 0) {
    appendDatoinvalido();
    return false;
  } else {
    appendResult(resultado);
    return true;
  }
}
function appendResult(resultado) {
  cartelResultado.innerHTML = `<div class="flex flex-shrink justify-center">
  <div class="flex flex-col justify-center">
    <img
      class="fuego mr-4  h-[32px] w-[32px] scale-x-[-1]"
      src="../assets/icons/fire-svgrepo-com.webp"
      alt=""
    />
  </div>

  <p class="text-white text-center font-mono text-lg font-bold text-[30px]">${resultado}</p>

  <div class="flex flex-col justify-center">
    <img
      class="fuego ml-4 h-[32px] w-[32px]"
      src="../assets/icons/fire-svgrepo-com.webp"
      alt=""
    />
  </div>
</div>`;
}
function appendDatoinvalido() {
  cartelResultado.innerHTML = `<div class="flex flex-shrink justify-center">
  <p class="text-center text-[20px] font-mono text-lg font-bold text-[#ff0000]">Uno de los datos ingresados es invalido</p>
  </div>`;
}
