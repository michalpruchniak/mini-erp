import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(
    private clientService: ClientService
  ) { }
  ngOnInit(){
    this.clientService.getClients();
  }
}
