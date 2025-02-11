export class Vehiculo {
    constructor(marca, modelo, velocidadMaxima, valor, id){
        
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
        this.valor = valor;
        this.id = id;
    }
    obtenerInformacion(){
        return this.marca + " " + this.modelo + " " + this.velocidadMaxima + " " + this.valor + " " + this.id;
    }
}