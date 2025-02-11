import { Vehiculo } from './Vehiculo.js';
import { Conductor } from './Conductor.js';

const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const velocidadMaxima = document.getElementById('velocidadMaxima');
const valor = document.getElementById('valor');
const tablaVehiculos = document.getElementById('listaVehiculos');
const formVehiculos = document.getElementById('formulario');
const conductorSelect = document.getElementById('selectConductor');
let listaVehiculos = [];
let listaCond = [];
let numeroId = 1;

const conductorIvan = new Conductor(1, "Iván");
const conductorGian = new Conductor(2, "Gian");

listaCond.push(conductorIvan);
listaCond.push(conductorGian);

window.onload = cargarSelectCond();

function cargarSelectCond()
{
    listaCond.forEach(conductor => {
        const option = document.createElement("option");
        option.value = conductor.id;
        option.textContent = conductor.nombre;
        conductorSelect.appendChild(option);
    });
}


function actualizarVehiculo(){ 
    tablaVehiculos.innerHTML = ""; // Limpiar tabla

    listaVehiculos.forEach(veh => { //for i in array
        const fila = document.createElement("tr");

        // Crear y agregar celdas
        const celdaMarca = document.createElement("td");
        celdaMarca.textContent = veh.marca;

        const celdaModelo = document.createElement("td");
        celdaModelo.textContent = veh.modelo;

        const celdaVelocidadMaxima = document.createElement("td");
        celdaVelocidadMaxima.textContent = veh.velocidadMaxima;

        const celdaValor = document.createElement("td");
        celdaValor.textContent = veh.valor;

        const celdaBoton = document.createElement("td");

        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.onclick = () => eliminarVehiculo(veh.id);

        fila.appendChild(celdaMarca);
        fila.appendChild(celdaModelo);
        fila.appendChild(celdaVelocidadMaxima);
        fila.appendChild(celdaValor);
        fila.appendChild(celdaBoton);
        celdaBoton.appendChild(botonEliminar);
        tablaVehiculos.appendChild(fila);
    });
}

formVehiculos.addEventListener("submit", (event) => {
    event.preventDefault();

    const marcaValue = marca.value;
    const modeloValue = modelo.value;
    const velocidadMaximaValue = velocidadMaxima.value;
    const valorValue = valor.value;

    const conductorId = parseInt(conductorSelect.value);

    const vehiculo = new Vehiculo(marcaValue,modeloValue,velocidadMaximaValue,valorValue,numeroId);
    numeroId++;
    
    let conductorSeleccionado = listaCond.find(c => c.id === conductorId);
    conductorSeleccionado.agregarVehiculo(vehiculo);
    //listaVehiculos.push(vehiculo);
    actualizarVehiculo();
    formVehiculos.reset();
});

function eliminarVehiculo(idVehiculo){
   const vIndex = listaVehiculos.findIndex(v => v.id === idVehiculo);
   listaVehiculos.splice(vIndex,1);
   actualizarVehiculo();
}