// src/app/components/dish-form/dish-form.component.ts

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DishService, Dish } from '../../services/dish.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class DishFormComponent implements OnInit {
  dish: Dish = {
    name: '',
    description: '',
    status: '',
    price: 0
  };
  isEdit: boolean = false;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.dishService.getDish(+id).subscribe((data: Dish) => {
        this.dish = data;
      });
    }
  }

  saveDish() {
    if (this.isEdit) {
      this.dishService.updateDish(this.dish.id!, this.dish).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.dishService.createDish(this.dish).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  backDish() {
    this.router.navigate(['/']);
  }

  deletDish() {
    this.dishService.deleteDish(this.dish.id!).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  confirmDish() {
    if (this.isEdit) {
      this.dishService.updateDish(this.dish.id!, this.dish).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.dishService.createDish(this.dish).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  formatPrice(): void {
    if (this.dish.price) {
      this.dish.price = parseFloat(this.dish.price.toFixed(2));
    }
  }

}
