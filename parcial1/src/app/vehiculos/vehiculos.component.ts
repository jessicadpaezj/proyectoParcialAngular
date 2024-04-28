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

  ngOnInit() {
    this.getVehiculos();
  }

}
