import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent {

  public formGroup: FormGroup;
  public genderOptions: SelectItem[];

  constructor(private fb: FormBuilder) {
    this.initFormGroup();
    this.initGenderOptions();
  }

  private initFormGroup(): void {
    this.formGroup = this.fb.group({
      firstName: [null],
      lastName: [null],
      birthDate: [null],
      gender: [null]
    });
  }

  private initGenderOptions(): void {
    this.genderOptions = [
      { label: 'Férfi', value: 'F' },
      { label: 'Nő', value: 'N' }
    ];
  }

}
