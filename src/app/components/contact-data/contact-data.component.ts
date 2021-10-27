import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss']
})
export class ContactDataComponent {

  public formGroup: FormGroup;
  public preferredWayOptions: SelectItem[];

  constructor(private fb: FormBuilder) {
    this.initFormGroup();
    this.initPreferredWayOptions();
  }

  private initFormGroup(): void {
    this.formGroup = this.fb.group({
      phoneNumber: [null],
      email: [null],
      preferredWay: [null],
      address: this.fb.group({
        country: [null],
        city: [null],
        zipCode: [null],
        street: [null],
        houseNumber: [null],
      })
    });
  }

  private initPreferredWayOptions(): void {
    this.preferredWayOptions = [
      { label: 'Telefon', value: 'PHONE' },
      { label: 'E-mail', value: 'email' }
    ];
  }


}
