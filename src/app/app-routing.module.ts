import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './features/clients/client-form/client-form.component';
import { ClientTableComponent } from './features/clients/client-table/client-table.component';
import { OrderFormComponent } from './features/orders/order-form/order-form.component';
import { OrderTableComponent } from './features/orders/order-table/order-table.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';
import { ProductTableComponent } from './features/products/product-table/product-table.component';

const routes: Routes = [
  {
    path: 'clients',
    children: [
      { path: 'table', component: ClientTableComponent },
      { path: 'form', component: ClientFormComponent },
    ],
  },
  {
    path: 'products',
    children: [
      { path: 'table', component: ProductTableComponent },
      { path: 'form', component: ProductFormComponent },
    ],
  },
  {
    path: 'orders',
    children: [
      { path: 'table', component: OrderTableComponent },
      { path: 'form', component: OrderFormComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
