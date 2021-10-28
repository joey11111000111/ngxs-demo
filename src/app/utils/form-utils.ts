import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export function setDisabledState(form: FormGroup | FormArray, isDisabled: boolean): void {
  Object.keys(form.controls).map(currentControlName => form.controls[currentControlName])
    .forEach((currentControl: AbstractControl) => {
      if (currentControl instanceof FormGroup || currentControl instanceof FormArray) {
        setDisabledState(currentControl, isDisabled);
      } else {
        isDisabled ? currentControl.disable() : currentControl.enable();
      }
    });
}
