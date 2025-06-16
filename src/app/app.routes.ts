import { Routes } from '@angular/router';
import { DishListComponent } from './components/dish-list/dish-list.component';
import { DishFormComponent } from './components/dish-form/dish-form.component';
import { CozinhaComponent } from './components/cozinha/cozinha.component';

export const routes: Routes = [
  { path: '',            redirectTo: 'dishes', pathMatch: 'full' },
  { path: 'dishes',      component: DishListComponent },
  { path: 'dishes/new',  component: DishFormComponent },
  { path: 'dishes/:id/edit', component: DishFormComponent },
  { path: 'orders/kitchen', component: CozinhaComponent }
];
