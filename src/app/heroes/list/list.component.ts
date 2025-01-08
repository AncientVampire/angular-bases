import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America','Black Widow', 'Doctor Strange', 'Black Panther', 'Antman', 'Wasp'];
  public deletedHero?: string;
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();

    // console.log(`Deleted hero: ${this.deletedHero}`);


  }

}
