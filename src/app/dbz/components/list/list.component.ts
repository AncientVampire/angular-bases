import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
  name: 'Trunk',
  power:10
}]

@Output()
onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id?: string): void {
    if (!id) return;
    // console.log('Delete character with id:', id);

    this.onDelete.emit(id);
  }

}
