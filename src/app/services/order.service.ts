import { Injectable } from '@angular/core';
import { Dish } from './dish.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




export interface Order {
  id?: number;
  status?: string; 
  products?: Dish[] | undefined;
  numeroPedido? : number
   // products?: Array<{id:number}>
      
}

@Injectable({
  providedIn: 'root'
})

export class OrderService {

    private apiUrl = 'http://localhost:8080/orders';
  
    constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  updateOrder(id: number, dish: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/${id}`, dish);
  }

}