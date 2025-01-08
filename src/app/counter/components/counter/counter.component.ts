import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: `
              <h3> {{counter}}</h3>

            <button class="btn btn-primary mx-2" (click)="increaseBy(+1)" >+1</button>
            <button class="btn btn-primary mx-2" (click)="resetCounter()">Reset</button>
            <button class="btn btn-primary mx-2" (click)="decreaseBy()">-1</button>

  `,
})
export class counterComponent
{
 constructor(){

  }
  public title: string  = 'Hola Mundo';
  public counter: number = 10;

    increaseBy(value: number):void{
      this.counter += value;

    }

    resetCounter():void{

      this.counter = 10;
    }

    decreaseBy():void{
      this.counter -= 1;
    }
}
