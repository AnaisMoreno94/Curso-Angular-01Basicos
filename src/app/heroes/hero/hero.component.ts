import { Component } from "@angular/core";



@Component({
    selector:'app-hero',
    templateUrl:'hero.component.html'
})
export class HeroComponent {

    name:string= 'Ironman'
    age:number= 45

    obtainName():string{
        return`El nombre es ${this.name}`
    }

    get nameCapitalized():string {
        return this.name.toUpperCase()
    }

    changeName():void {
        this.name= 'Spideman';
    }

    changeAge():void {
        this.age= 22
    }

}