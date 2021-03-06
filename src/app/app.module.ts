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
import { FormsOrderComponent } from './forms/forms-order/forms-order.component';
import { FormsClientComponent } from './forms/forms-client/forms-client.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './products/new-product/new-product.component';
import { FormsProductComponent } from './forms/forms-product/forms-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AllProductsFromOrderComponent } from './orders/products/all-products-from-order/all-products-from-order.component';
import { AddNewProductToOrderComponent } from './orders/products/add-new-product-to-order/add-new-product-to-order.component';
import { FormsAddProductToOrderComponent } from './forms/forms-add-product-to-order/forms-add-product-to-order.component';
import { ProductsToOrderComponent } from './orders/products-to-order/products-to-order.component';
import { ProductsListComponent } from './orders/products-to-order/products-list/products-list.component';


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
    FormsOrderComponent,
    FormsClientComponent,
    ProductsComponent,
    NewProductComponent,
    FormsProductComponent,
    ProductDetailsComponent,
    AllProductsFromOrderComponent,
    AddNewProductToOrderComponent,
    FormsAddProductToOrderComponent,
    ProductsToOrderComponent,
    ProductsListComponent,
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
