import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Dish } from '../../services/dish.service';

@Component({
  selector: 'app-cozinha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cozinha.component.html',
  styleUrl: './cozinha.component.css'
})
export class CozinhaComponent {

  orders: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      const orderRevarse = data.filter(order=> order.status=== "AGUARDANDO PREPARO").reverse();
      // const orderRevarse = data.reverse()
      this.orders = orderRevarse.map((order, index) => {
        return {
          ...order,
          numeroPedido: orderRevarse.length - index

        }
      })
      console.log("teste",this.orders)
    });
  }

  valorTotal(products: Dish[] | undefined): number {
    return (products ?? []).reduce((total, product) => total + (product.price ?? 0), 0);
  }


  modifierStatus(event: Event, order:Order):void {
    const valueSelect = (event.target as HTMLSelectElement).value;
    if (valueSelect === "pronto"){

      const updateOrder = {
        ...order,
        status: "AGUARDANDO ENTREGA"
      }
  
    
      this.orderService.updateOrder(order.id!,updateOrder).subscribe(()=>{
        setTimeout(() => {
          this.router.navigate(['/entrega'],)
        }, 1500);
      })
    }
    
    

    

  }
}
