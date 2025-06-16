// src/app/services/dish.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Dish {
  id?: number;
  name?: string;
  description?: string;
  status?: string;
  price?: number;
  checked?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DishService {
  // base URL monta dinamicamente a partir do environment
  private readonly apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {
    // só para confirmar qual URL está pegando em tempo de execução
    console.log('>>> DishService API URL:', this.apiUrl);
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.apiUrl);
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(`${this.apiUrl}/${id}`);
  }

  createDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(this.apiUrl, dish);
  }

  updateDish(id: number, dish: Dish): Observable<Dish> {
    return this.http.put<Dish>(`${this.apiUrl}/${id}`, dish);
  }

  deleteDish(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
