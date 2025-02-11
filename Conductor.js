export class Conductor {
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
        this.vehiculos = [];
    }
    agregarVehiculo(vehiculo){
        this.vehiculos.push(vehiculo);
    }
}