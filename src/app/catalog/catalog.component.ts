import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../services/pizza.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [PizzaService]
})
export class CatalogComponent implements OnInit {
  total =0;
  constructor(private pizzaService: PizzaService) { };
  ngOnInit(): void {
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }
  selectedPizza: Pizza;

  onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }
  pizzas: Pizza[]; 
  

  changeCart(event){
    this.total += event;
  }
}
