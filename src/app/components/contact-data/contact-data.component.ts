import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ContactTypes } from '../../models/contact-types';
import { Actions, ofActionCompleted, ofActionSuccessful, Store } from '@ngxs/store';
import { DetailsState, LoadDetails } from '../../store/details/details-state';
import { UserState } from '../../store/user-state';
import { Roles } from '../../models/roles';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss']
})
export class ContactDataComponent {

  public formGroup: FormGroup;
  public preferredWayOptions: SelectItem[];

  constructor(private fb: FormBuilder, private store: Store, private actions$: Actions) {
    this.initFormGroup();
    this.initPreferredWayOptions();
    this.actions$.pipe(ofActionSuccessful(LoadDetails)).subscribe(() => {
      this.patchDefaultValues();
    });
    this.store.select(UserState.activeUserRole).subscribe((activeRole: Roles) => {
      if (activeRole === Roles.readonly) {
        this.formGroup.disable();
      } else {
        this.formGroup.enable();
      }
    });
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
      { label: 'Telefon', value: ContactTypes.phone },
      { label: 'E-mail', value: ContactTypes.email }
    ];
  }

  private patchDefaultValues(): void {
    const defaultValues = this.store.selectSnapshot(DetailsState.getDetails).contactData;
    this.formGroup.patchValue(defaultValues);
  }


}
