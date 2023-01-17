import { CalculadoraMetabolica } from "./calculadora.js";
const botonDesplegarHistorial = document.getElementById("historial");
const btnImg = document.getElementById("historialIcon");
const historialCartel = document.getElementById("historialCartel");
const btnEliminarHistorial = document.getElementById("clean");
const historialDiv = document.getElementById("historialCartel");
export function setHistorialDeCalculos(persona) {
  localStorage.setItem(persona.id, JSON.stringify(persona));
}

export function setHistorialListeners() {
  botonDesplegarHistorial.addEventListener("click", print);
  btnEliminarHistorial.addEventListener("click", () => {
    localStorage.clear();
    print();
  });
  botonDesplegarHistorial.addEventListener("click", () => {
    let activeClass =
      botonDesplegarHistorial.classList[
        botonDesplegarHistorial.classList.length - 1
      ];
    let iconoExpand = "../assets/icons/toggle-expand-all-svgrepo-com.svg";
    let iconoCollapse = "../assets/icons/toggle-collapse-all-svgrepo-com.svg";

    if (activeClass == "active") {
      botonDesplegarHistorial.classList.remove("active");
      historialCartel.classList.add("invisible");
      btnImg.src = iconoExpand;
    } else {
      botonDesplegarHistorial.classList.add("active");
      historialCartel.classList.remove("invisible");
      btnImg.src = iconoCollapse;
    }
  });
}

export function print() {
  let calculadora = new CalculadoraMetabolica();
  historialDiv.innerText = " ";
  for (let i = 1; i < localStorage.length; i++) {
    let cadaPersona = JSON.parse(localStorage.getItem(i));
    const { peso, altura, edad, sexo, _ignore, fecha, id } = cadaPersona;
    if (calculadora.validateValues(cadaPersona)) {
      historialDiv.innerHTML += `<div class= "border-solid border-[1px] border-black" >
        Peso: ${peso} 
        <br> 
        Altura: ${altura} 
        <br> 
        Edad: ${edad} 
        <br> 
        Sexo: ${sexo} 
        <br> 
        Fecha: ${fecha} 
        <br>
        ID: ${id} 
        </div>`;
    }
  }
}
