import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
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

  constructor(private orderService: OrderService, private dishService: DishService, private router: Router) {}

  dishes: Dish[] = [];

  orders: Order[] = [];

  pedidoCriado: boolean = false; // Controla a exibição da mensagem
  
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

    this.orderService.createOrder(order).subscribe((response) => { 
      console.log ("pedido criado", response)
    });
    console.log("request enviada para o back")
    // this.showMessage()
    
      this.pedidoCriado = true; // Mostra a mensagem
      // Oculta a mensagem após 3 segundos
      setTimeout(() => {
        this.pedidoCriado = false;
        this.router.navigate(['/cozinha'],{state:{pedido:order}})
      }, 3500);
  }

   

  // showMessage() {
  //   this.pedidoCriado = true; // Mostra a mensagem
  //   // Oculta a mensagem após 3 segundos
  //   setTimeout(() => {
  //     this.pedidoCriado = false;
  //     this.router.navigate(['/cozinha'],{state:{pedido:order}})
  //   }, 3500);
    
  // }
  
}

