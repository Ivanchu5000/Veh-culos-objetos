import { Vehiculo } from './Vehiculo.js';

const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const velocidadMaxima = document.getElementById('velocidadMaxima');
const valor = document.getElementById('valor');
const tablaVehiculos = document.getElementById('tabla');
const formVehiculos = document.getElementById('formulario');
let listaVehiculos = [];

function agregarVehiculo(){ 
    listaVehiculos.forEach((vehiculo) => { //for i in array
        const fila = document.createElement("tr");

        // Crear y agregar celdas
        const celdaMarca = document.createElement("td");
        celdaMarca.textContent = vehiculo.marca;

        const celdaModelo = document.createElement("td");
        celdaModelo.textContent = vehiculo.modelo;

        const celdaVelocidadMaxima = document.createElement("td");
        celdaVelocidadMaxima.textContent = vehiculo.velocidadMaxima;

        const celdaValor = document.createElement("td");
        celdaValor.textContent = vehiculo.valor;

        fila.appendChild(celdaMarca);
        fila.appendChild(celdaModelo);
        fila.appendChild(celdaVelocidadMaxima);
        fila.appendChild(celdaValor);
        tablaVehiculos.appendChild(fila);
    });
}

formVehiculos.addEventListener("submit", (event) => {
    event.preventDefault();

    const marcaValue = marca.value;
    const modeloValue = modelo.value;
    const velocidadMaximaValue = velocidadMaxima.value;
    const valorValue = valor.value;

    listaVehiculos.push({ marcaValue, modeloValue, velocidadMaximaValue, valorValue });
    agregarVehiculo();
    formVehiculos.reset();
});