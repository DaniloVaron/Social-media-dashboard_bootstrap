const modo_oscuro = document.querySelector("#cambio_id");
const localConfig = localStorage.getItem("modo");

if (localConfig === "dark") {
  document.body.classList.toggle("cambio_oscuro");
} else if (localConfig === "light") {
  document.body.classList.toggle("cambio_claro");
}

modo_oscuro.addEventListener("click", () => {
  let tema;

  document.body.classList.toggle("cambio_claro");
  document.body.classList.toggle("cambio_oscuro");
  tema = document.body.classList.contains("cambio_claro") ? "light" : "dark";

  localStorage.setItem("modo", tema);
});

//------------------------------------------------------------------------------------------------//
