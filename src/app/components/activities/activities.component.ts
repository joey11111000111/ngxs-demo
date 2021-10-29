import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { DetailsState, LoadDetails } from '../../store/details/details-state';
import { UserState } from '../../store/user-state';
import { Roles } from '../../models/roles';
import { setDisabledState } from '../../utils/form-utils';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

  public formGroup: FormGroup;
  public activitiyFormAray: FormArray;

  constructor(private fb: FormBuilder, private store: Store, private actions$: Actions) {
    this.initFormGroup();
    this.addActivityGroup();
    this.actions$.pipe(ofActionSuccessful(LoadDetails)).subscribe(() => this.patchDefaultValues());
  }

  private initFormGroup(): void {
    this.activitiyFormAray = this.fb.array([]);
    this.formGroup = this.fb.group({
      activities: this.activitiyFormAray
    });
  }

  public addActivityGroup(): void {
    const newActivityGroup = this.fb.group({
      name: [null],
      description: [null],
      startDate: [null],
      endDate: [null]
    });
    this.activitiyFormAray.push(newActivityGroup);
  }

  private patchDefaultValues(): void {
    const defaultValues = this.store.selectSnapshot(DetailsState.getDetails).activities;
    this.clearActivities();
    defaultValues.forEach(() => this.addActivityGroup());
    this.formGroup.patchValue({ activities: defaultValues });
    this.store.select(UserState.activeUserRole).subscribe((activeRole: Roles) => {
      if (activeRole === Roles.readonly) {
        setDisabledState(this.formGroup, true);
      } else {
        setDisabledState(this.formGroup, false);
      }
    });
  }

  public clearActivities(): void {
    this.activitiyFormAray.clear();
  }

  public removeActiviy(index: number): void {
    this.activitiyFormAray.removeAt(index);
  }

  public get activityGroups(): FormGroup[] {
    return this.activitiyFormAray.controls as FormGroup[];
  }

}
