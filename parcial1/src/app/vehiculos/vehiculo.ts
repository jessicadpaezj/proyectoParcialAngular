export class Vehiculo {
    id: number;
    marca: string;
    linea: string;
    modelo: number;

    public constructor(id: number, marca: string, linea: string,modelo: number) {
        this.id = id;
        this.marca = marca;
        this.linea = linea;
        this.modelo = modelo;
    }
}
