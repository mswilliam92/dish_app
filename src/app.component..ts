// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container"> 
        <div class="pedido">
            <div class="pedido-numero">Pedido 03:</div>
            <div class="pedido-item">
                <p>Hamburger</p>
                <b>Pão, Salada, Tomate, Maionese, Hamburger 180g.</b>
            </div>
            <div class="pedido-item">Batata</div>
            <div class="pedido-item">Coca Cola</div>
            <select class="status">
                <option>EM ESPERA</option>
                <option>EM PREPARO</option>
                <option>PRONTO</option>
            </select>
        </div>

        <div class="pedido">
            <div class="pedido-numero">Pedido 03:</div>
            <div class="pedido-item">
                <p>Hamburger</p>
                <b>Pão, Salada, Tomate, Maionese, Hamburger 180g.</b>
            </div>
            <div class="pedido-item">Batata</div>
            <div class="pedido-item">Coca Cola</div>    
            <select class="status">
                <option>EM ESPERA</option>
                <option>EM PREPARO</option>
                <option>PRONTO</option>
            </select>
        </div>     

        <div class="pedido">
            <div class="pedido-numero">Pedido 04:</div>
            <div class="pedido-item">
                <p>Hamburger</p>
                <b>Pão, Salada, Tomate, Maionese, Hamburger 180g.</b>
            </div>
            <div class="pedido-item">Batata</div>
            <div class="pedido-item">Coca Cola</div>    
            <select class="status">
                <option>EM ESPERA</option>
                <option>EM PREPARO</option>
                <option>PRONTO</option>
            </select>
        </div>     
    </div>
  `,
  styleUrls: ['./styles.css']
})
export class AppComponent {}
