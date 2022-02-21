import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/client.service';
import { Client } from 'src/app/client';
import { Location } from '@angular/common'


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
    @Input() client?: Client;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }
  getClient(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clientService.getClient(id)
        .subscribe(client => this.client = client);
  }
  ngOnInit(): void {
    this.getClient();
  }

}
