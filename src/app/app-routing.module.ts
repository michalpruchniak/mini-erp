import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsComponent } from './clients/clients.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/new', component: NewClientComponent },
  { path: 'clients/details/:id', component: ClientDetailsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/new', component: NewOrderComponent },
  { path: 'orders/details/:id', component: OrderDetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/new', component: NewProductComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
