import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';







@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
