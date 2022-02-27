import { Component } from '@angular/core'

@Component ({
    selector:'app-contador',
    template:`

<h1>{{title}}</h1>

<h2> Ejemplo contador con dos metodos para sumar y restar</h2>
<button (click)="sumar()"> +1 </button>

<span> {{numero}} </span>

<button (click)="restar()"> -1 </button>


<h2>Ejempolo contador con un unico metodo</h2>
<button (click)="acumular(1)"> +1 </button>
<span>{{numero2}}</span>
<button (click)="acumular(-1)"> -1</button>


<h2> Acumulador</h2>
<h3>La base es: <strong> {{base}}</strong></h3>

<button (click)="acumular2(base)"> + {{base}}</button>
<span>{{numero3}}</span>
<button (click)="acumular2(-base)"> -5</button>
    
    
    `
})

export class ContadorComponent{
  
   title:string = 'Contador App';
   numero:number = 10;
   numero2:number = 20;
   base:number = 5;
   numero3:number = 30;

   sumar() {
     this.numero +=1
   };

   restar(){
     this.numero -=1
   }
    //Ejemplo 2 de contador 
   acumular(valor:number){ 
     this.numero2 += valor
   }
    acumular2(valor:number){ 
     this.numero3 += valor
   }

}