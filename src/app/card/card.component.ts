import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dog } from 'src/model/dog.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
    dog!: Dog

    @Output()
    DogSelected = new EventEmitter<Dog>();

    onCardClick(){
      console.log("Card onCardClick");
      this.DogSelected.emit(this.dog);
    };
}

