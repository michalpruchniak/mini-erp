import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsComponent } from './clients/clients.component';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';

const routes: Routes = [
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/new', component: NewClientComponent },
  { path: 'clients/details/:id', component: ClientDetailsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/new', component: NewOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
