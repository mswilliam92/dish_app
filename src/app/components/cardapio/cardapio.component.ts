import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Order, OrderService } from '../../services/order.service';
import { FormsModule } from '@angular/forms';
import { Dish, DishService } from '../../services/dish.service';


@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})

export class CardapioComponent {

  constructor(private orderService: OrderService, private dishService: DishService) {}

  dishes: Dish[] = [];

  orders: Order[] = [];
  
  ngOnInit(): void {
    // this.loadOrders();
    this.loadDishes();  }

  loadOrders() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }

  filterSelectedDishes () :Dish []{
    // const dishesSelected = this.orders.map((order) => order.products?.filter((dish) => dish.checked))
    const dishesSelected = this.dishes.filter((dish) => dish.checked)
    return dishesSelected
  }

  loadDishes() {
    this.dishService.getDishes().subscribe((data: Dish[]) => {
      this.dishes = data;
    });
  }

   createdOrder() {

    const dishselected = this.filterSelectedDishes()
    const order : Order = {
      status : "aguardando preparo",
      products: dishselected.map((dish) => ({id: dish.id}))
    }

    // this.orderService.createOrder (order)
    this.orderService.createOrder(order).subscribe((response) => { 
      console.log ("pedido criado", response)

      // this.router.navigate(['/']);
    });
    console.log("request enviada para o back")
    // this.router.navigate(['/']);
    
 

    // this.orderService.createOrder(this.dish.id!, this.dish).subscribe(() => {
    //      this.router.navigate(['/']);
    //    });
    //  }
   }
  
}

