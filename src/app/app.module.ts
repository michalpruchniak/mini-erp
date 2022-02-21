import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClientsDataService } from './clients-data.service';
import { NewClientComponent } from './clients/new-client/new-client.component';
import { AlertComponent } from './alert/alert.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NewClientComponent,
    AlertComponent,
    ClientDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      ClientsDataService, { dataEncapsulation: false }
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
