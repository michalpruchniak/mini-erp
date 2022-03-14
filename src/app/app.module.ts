import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ErpDataService } from './erp-data.service';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { AlertComponent } from './alert/alert.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { OrdersComponent } from './orders/orders.component';
import { NewOrderComponent } from './orders/new-order/new-order.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NewClientComponent,
    AlertComponent,
    ClientDetailsComponent,
    OrdersComponent,
    NewOrderComponent,
    NavigationComponent,
    OrderDetailsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ErpDataService, { dataEncapsulation: false }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
