import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value && !new RegExp(/^[a-zA-Z0-9_.+-]+@gmail.com$/).test(control.value) && { email: true } || null;
  }
}
