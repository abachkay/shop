import { AbstractControl, Validators } from '@angular/forms';

export class CustomValidators extends Validators {
    constructor() {
        super();
    }

    static userNameValid(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.value && !new RegExp(/^[a-zA-Z]+$/).test(control.value)) {
            return { userNameValid: true };
        }
    }
}
