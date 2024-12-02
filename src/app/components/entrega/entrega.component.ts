import { Component } from '@angular/core';
import { Order, OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Dish } from '../../services/dish.service';

@Component({
  selector: 'app-entrega',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entrega.component.html',
  styleUrl: './entrega.component.css'
})
export class EntregaComponent {

  orders: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      const filterStatusOrder = data.filter(order => order.status === "AGUARDANDO ENTREGA")
      const orderRevarse = filterStatusOrder.reverse();
      this.orders = orderRevarse.map((order, index) => {
        return {
          ...order,
          numeroPedido: orderRevarse.length - index

        }
      })
      console.log("teste", this.orders)
    });
  }

  valorTotal(products: Dish[] | undefined): number {
    return (products ?? []).reduce((total, product) => total + (product.price ?? 0), 0);
  }


  modifierStatus(event: Event, order: Order): void {
    const valueSelect = (event.target as HTMLSelectElement).value;
    if (valueSelect === "entregue") {

      const updateOrder = {
        ...order,
        status: "ENTREGUE"
      }

      console.log(updateOrder)
      this.orderService.updateOrder(order.id!, updateOrder).subscribe(() => {
        setTimeout(() => {
          this.router.navigate(['/cardapio'],)
        }, 1500);

      })
    }




  }

}
