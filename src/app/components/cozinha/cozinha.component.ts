import { Component, OnInit } from '@angular/core';
import { Order } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cozinha',
  standalone: true,
  imports: [],
  templateUrl: './cozinha.component.html',
  styleUrl: './cozinha.component.css'
})
export class CozinhaComponent implements OnInit {

  pedido!: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Acessa os dados enviados pela navegação
    const navigation = this.router.getCurrentNavigation();
    this.order = navigation?.extras.state?.['pedido'];
    console.log('Order recebida:', this.order);
  }

}
