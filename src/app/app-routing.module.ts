import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  { path: 'clients/details/:id', component: ClientDetailsComponent },
  { path: 'clients', component: ClientsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
