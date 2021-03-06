import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import  { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza.component';
import { menuComponent } from './menu/menu.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from "./counter/counter.component";
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    menuComponent,
    CatalogComponent,
    HomeComponent,
    CounterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'pizzas',
        component: CatalogComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
