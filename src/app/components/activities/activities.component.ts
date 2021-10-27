import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

  public formGroup: FormGroup;
  public activitiyFormAray: FormArray;

  constructor(private fb: FormBuilder) {
    this.initFormGroup();
    this.addActivityGroup();
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
