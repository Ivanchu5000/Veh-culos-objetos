export class Vehiculo {
    constructor(marca, modelo, velocidadMaxima, valor){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
        this.valor = valor;
    }
    obtenerInformacion(){
        return this.marca + " " + this.modelo + " " + this.velocidadMaxima + " " + this.valor;
    }
}