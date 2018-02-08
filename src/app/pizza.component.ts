import { Component, Input } from '@angular/core';
import { Pizza } from './models/pizza.model';


@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  // template: `
  //   <div *ngIf="pizza">
  //     <div class="card">
  //       <img class="card-img-top" [src]="pizza.image" alt="{{ pizza.name }}">
  //       <h2>{{pizza.name}}</h2>
  //       <div class="card-body">
  //         <h5 class="card-title">{{ pizza.name }}</h5>
  //         <p class="card-text">{{ pizza.price }}</p>
  //         <label>name: </label>
  //         <input [(ngModel)]="pizza.name" placeholder="name">
  //       </div>
  //     </div>
  //   </div>
  // `
})
export class PizzaComponent {
    @Input() pizza: Pizza;
}

