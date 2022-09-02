import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); para emitir informacion, se cambio luego por el servicio

  constructor(private dbzService: DbzService) { }


  agregar() {

    if (this.nuevo.nombre.trim().length === 0) { return }

    // this.onNuevoPersonaje.emit(this.nuevo); funciona con el event emitter, tambien reemplazado por el servicio 


    this.dbzService.agregarPersonaje(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    }
    //Al escribir nuevamente el objeto como vacio lo que hacemos es reiniciar los datos del formulario



  }
}
