import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

// const PIZZAS : Pizza[] = [
//   { id: 1, name: 'Reine', price: 12 },
//   { id: 2, name: '4 fromages', price: 13 },
//   { id: 3, name: 'Orientale', price: 11 },
//   { id: 4, name: 'Cannibale', price: 9 }
// ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .pizzas li:hover {
    cursor: pointer;
  },
  h1{background-color: 'black;}
`],

  /*styleUrls: ['./app.component.css']*/
})
export class AppComponent {

  title = 'Pizza Party';


}
