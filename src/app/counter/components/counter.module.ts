import { NgModule } from '@angular/core';
import { counterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    counterComponent
  ],
  imports: [],
  exports: [counterComponent],
  providers: [],
})
export class CounterModule {
}
