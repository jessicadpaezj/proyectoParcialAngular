import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { dataVehiculos } from './dataVehiculos';
import { VehiculoService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }
  vehiculos: Array<Vehiculo> = [];
  
  /*
  getCourseList(): Array<Vehiculo> {
    return dataVehiculos;
  }*/

  getVehiculos() {
    this.vehiculoService.getCourses().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
    });
  }

  calcularTotalRenault(): number {
    let i = 0;
    for (const vehiculo of this.vehiculos) {
      if(vehiculo.marca == 'Renault') {
        i++;
      };
    }
    return i;
  }
  calcularTotalChevrolet(): number {
    let i = 0;
    for (const vehiculo of this.vehiculos) {
      if(vehiculo.marca == 'Chevrolet') {
        i++;
      };
    }
    return i;
  }

  calcularTotalNissan(): number {
    let i = 0;
    for (const vehiculo of this.vehiculos) {
      if(vehiculo.marca == 'Nissan') {
        i++;
      };
    }
    return i;
  }


  ngOnInit() {
    this.getVehiculos();
  }

  
}
