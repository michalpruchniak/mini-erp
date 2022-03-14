import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Client } from 'src/app/clients/client';
import { ClientService } from 'src/app/clients/client.service';
import clientForms from 'src/app/clients/clientForms';

@Component({
  selector: 'app-forms-client',
  templateUrl: './forms-client.component.html',
  styleUrls: ['./forms-client.component.css']
})
export class FormsClientComponent implements OnInit {
  @Input() clientID = '';
  @Output() formData = new EventEmitter<Client>();

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private location: Location
  ) { }

  clientForm = this.fb.group(clientForms);

  onSubmit(){
    this.formData.emit(this.clientForm.value);
    this.goBack();
  }

  getClient(): void {
    this.clientService.getClient(Number(this.clientID))
      .subscribe(client => this.clientForm.patchValue(client));
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getClient();
  }


}
