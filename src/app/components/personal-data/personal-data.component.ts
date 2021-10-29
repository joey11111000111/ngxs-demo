import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Actions, ofActionCompleted, Store } from '@ngxs/store';
import { DetailsState, LoadDetails } from '../../store/details/details-state';
import { Gender } from '../../models/gender';
import { UserState } from '../../store/user-state';
import { Roles } from '../../models/roles';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent {

  public formGroup: FormGroup;
  public genderOptions: SelectItem[];

  constructor(private fb: FormBuilder, private store: Store, private actions$: Actions) {
    this.initGenderOptions();
    this.initFormGroup();
    this.actions$.pipe(ofActionCompleted(LoadDetails)).subscribe(() => {
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
      firstName: [null],
      lastName: [null],
      birthDate: [null],
      gender: [null]
    });
  }

  private initGenderOptions(): void {
    this.genderOptions = [
      { label: 'Férfi', value: Gender.male },
      { label: 'Nő', value: Gender.female }
    ];
  }

  private patchDefaultValues(): void {
    const defaultValues = this.store.selectSnapshot(DetailsState.getDetails).personalData;
    this.formGroup.patchValue(defaultValues);
  }

}
