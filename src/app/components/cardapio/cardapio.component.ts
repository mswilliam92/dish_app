import { Component } from '@angular/core';
import { Dish, DishService } from '../../services/dish.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
  

})

export class CardapioComponent {

  constructor(private dishService: DishService) {}

  dishes: Dish[] = [];
  
  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes() {
    this.dishService.getDishes().subscribe((data: Dish[]) => {
      this.dishes = data;
    });
  }

}
