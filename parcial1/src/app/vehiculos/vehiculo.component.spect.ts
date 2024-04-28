import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { VehiculosComponent } from './vehiculos.component'; 
import { VehiculoService } from './vehiculo.service'; 
import { Vehiculo } from './vehiculo'; 

describe('VehiculoListComponent', () => {
 let component: VehiculosComponent;
 let fixture: ComponentFixture<VehiculosComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ VehiculosComponent ],
     providers: [ VehiculoService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(VehiculosComponent);
   component = fixture.componentInstance;
   let vehiculos: Array<Vehiculo>=[];
   vehiculos.push( new Vehiculo(faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(), faker.number.int()));
   vehiculos.push( new Vehiculo(faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(), faker.number.int()));
   vehiculos.push( new Vehiculo(faker.number.int(), faker.lorem.sentence(), faker.lorem.sentence(), faker.number.int()));
    component.vehiculos = vehiculos;

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.vehiculos[0].linea)
 });


});