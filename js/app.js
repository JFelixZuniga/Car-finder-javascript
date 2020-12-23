// VARIABLES
const year = document.querySelector("#year");
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 10;

// EVENTOS
document.addEventListener("DOMContentLoaded", () => {
  // Muestra ls vehículos al cargar
  mostrarAutos();

  // Llena las opciones de años
  llenarSelect();
});

// FUNCIONES
function mostrarAutos() {
  autos.forEach((auto) => {
    const autoHTML = document.createElement("p");

    const { marca, modelo, year, puertas, transmision, precio, color } = auto;

    autoHTML.textContent = `
      ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
    `;

    // Insertar en el Html
    resultado.appendChild(autoHTML);
  });
}
// Genera los años del select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    // Agregamos las opciones de año al select
    year.appendChild(opcion)
  }
}
