import { Component } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { Client } from 'src/app/client';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {

  constructor(
    private clientService: ClientService,
    private fb: FormBuilder
  ) { }

  addClientForm = this.fb.group({
    name: ['', [Validators.required,
                Validators.minLength(4),
                Validators.maxLength(45)
               ]
          ],
    city: ['', [Validators.required,
                Validators.minLength(4),
                Validators.maxLength(40)
               ]
          ],
    streetNumber: ['', [Validators.required,
                        Validators.maxLength(4)
                  ]
              ],
    flatNumber: ['', [Validators.maxLength(4)]],
    phoneNumber: ['', [Validators.pattern('[+0-9]{9,12}')]]
  });

  onSubmit(){
    this.clientService.addClient(this.addClientForm.value as Client)
      .subscribe(client => {
        this.clientService.add(client);
        this.addClientForm.reset();
      });
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.clientService.addClient({ name } as Client)
  //     .subscribe(client => {
  //       this.clientService.add(client);
  //     });
  // }
}
