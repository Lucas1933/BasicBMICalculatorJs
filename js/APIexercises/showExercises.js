async function fetchExercises() {
  let ejercicios = [];
  let tire = await fetch(
    "https://api.api-ninjas.com/v1/exercises?muscle=lats",
    {
      method: "GET",
      headers: { "X-Api-Key": "SdCemAtVyQb1kcwD/dIkhw==a8c3wP24oCVaaZNm" },
      contentType: "application/json",
    }
  ).then((respuesta) => respuesta.json());
  let empuje = await fetch(
    "https://api.api-ninjas.com/v1/exercises?muscle=chest",
    {
      method: "GET",
      headers: { "X-Api-Key": "SdCemAtVyQb1kcwD/dIkhw==a8c3wP24oCVaaZNm" },
      contentType: "application/json",
    }
  ).then((respuesta) => respuesta.json());
  let piernas = await fetch(
    "https://api.api-ninjas.com/v1/exercises?muscle=quadriceps",
    {
      method: "GET",
      headers: { "X-Api-Key": "SdCemAtVyQb1kcwD/dIkhw==a8c3wP24oCVaaZNm" },
      contentType: "application/json",
    }
  ).then((respuesta) => respuesta.json());
  let cardio = await fetch("https://api.api-ninjas.com/v1/exercises?cardio", {
    method: "GET",
    headers: { "X-Api-Key": "SdCemAtVyQb1kcwD/dIkhw==a8c3wP24oCVaaZNm" },
    contentType: "application/json",
  }).then((respuesta) => respuesta.json());
  ejercicios.push(tire, empuje, piernas, cardio);
  return ejercicios;
}

export async function showExercises() {
  loadingExercises();
  let ejercicios = [];
  ejercicios = await fetchExercises();
  let cardio = ejercicios.pop();
  let piernas = ejercicios.pop();
  let empuje = ejercicios.pop();
  let tire = ejercicios.pop();
  let randomIndex = Math.floor(
    Math.random() * (10 - 0 + 1) + 0
  ); /* min 0 max 10 */
  let div = document.getElementById("ejercicios");
  div.classList.add("flex", "grow", "w-[%35]", "justify-evenly");
  div.innerHTML = " ";
  hideLoading();
  div.innerHTML = ` 
  <div>
    <p>Ganar musculo</p>
    <ul>
      <li>${tire[randomIndex].name}</li>
      <li>${empuje[randomIndex].name}</li>
      <li>${piernas[randomIndex].name}</li>
    </ul>
  </div>
  <div>
    <p>Perder grasa</p>
    <ul>
      <li>${cardio[randomIndex].name}</li>
      <li>${cardio[0].name}</li>
      <li>${cardio[6].name}</li>
    </ul>
  </div>
`;
}

function loadingExercises() {
  let divLoading = document.getElementById("loading");
  divLoading.classList.add("flex", "flex-col", "items-center");
  divLoading.innerHTML = `<p>Cargando ejercicios</p>
  <img
    class="h-12 w-12 animate-spin"
    src="./assets/icons/loading-spinner-svgrepo-com.svg"
    alt=""
  /> `;
}
function hideLoading() {
  let divLoading = document.getElementById("loading");
  divLoading.classList.add("hidden");
}
