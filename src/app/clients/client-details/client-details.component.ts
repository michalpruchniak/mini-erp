import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/client.service';
import { Client } from 'src/app/client';
import { Location } from '@angular/common'
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
    @Input() client?: Client;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location
  ) { }

  private id = Number(this.route.snapshot.paramMap.get('id'));

updateClientForm = this.fb.group({
    name: [this.client?.name, [Validators.required,
                Validators.minLength(4),
                Validators.maxLength(45)
               ]
          ],
    city: [this.client?.city, [Validators.required,
                Validators.minLength(4),
                Validators.maxLength(40)
               ]
          ],
    streetNumber: [this.client?.streetNumber, [Validators.required,
                        Validators.maxLength(4)
                  ]
              ],
    flatNumber: [this.client?.flatNumber, [Validators.maxLength(4)]],
    phoneNumber: [this.client?.phoneNumber, [Validators.pattern('[+0-9]{9,12}')]]
  });

  getClient(): void {
    this.clientService.getClient(this.id)
        .subscribe(client => this.client = client);
  }

  onSubmit(): void {
    if(this.updateClientForm.value){
      this.clientService.updateClient(this.updateClientForm.value, this.id)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getClient();
  }
}
