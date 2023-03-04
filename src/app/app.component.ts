import { Component } from '@angular/core';
import { dogData } from 'src/data/dog.data';
import { tableData } from 'src/data/table.data';
import { Dog } from 'src/model/dog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Asignacion 1';

  dogList = dogData;
  tableList = tableData;

  onDogSelected(dog: Dog){
    console.log("Card onCardClick", dog);
  }
}
