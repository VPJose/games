import "./style.scss";

const boton = document.getElementById("boton");

boton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Hola Mudo estoy usando Webpack");
});
