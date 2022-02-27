import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'  
})


export class ListadoComponent  {
 
  heroes:string[] =['Spiderman', 'Ironman','Thor', 'Dr. Strange'];
  deletedHeros:string[] = [];

  deleteHero(){
    if (this.heroes.length >= 1) {
    const deletedHero= this.heroes.pop() || ''; // se le coloca la evaluacion del or ya que la propiedad shift puede retornar undefined (asi como varios metodos de los arrays) y no se podria asginar a la variable que tenemos pautada como string. 
    this.deletedHeros.push(deletedHero);
    } 

    console.log(this.deletedHeros)
    }

    addHero(){
      if (this.deletedHeros.length>= 1){
        const addedHero = this.deletedHeros.pop() || ''
        this.heroes.push(addedHero)
        console.log(addedHero)
      }
    }
}
