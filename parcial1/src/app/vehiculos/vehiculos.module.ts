import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosComponent } from './vehiculos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VehiculosComponent],
  exports: [VehiculosComponent] 
})
export class VehiculosModule { }
