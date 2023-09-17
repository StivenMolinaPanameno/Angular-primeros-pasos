import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as id } from 'uuid';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  @Input()
  public characterList:Character[] = [{
      name:'Trunks',
      power:10
  }];


  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string | undefined):void{
    console.log({id});
    if(!id)
    return;
    this.onDelete.emit(id);
  }


}
