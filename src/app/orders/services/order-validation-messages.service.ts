import { Injectable } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrderValidationMessagesService {
  private readonly validationMessages = {
    firstName: {
      required: 'First Name required.',
      userNameValid: 'First Name should contain only letters: a-z, A-Z.'
    },
    lastName: {
      required: 'Last Name required.',
      userNameValid: 'Last Name should contain only letters: a-z, A-Z.'
    },
    phoneNumber: {
      required: 'Phone Number is required.',
      pattern: 'It should be a valid phone number.'
    },
    address: {
      required: 'Address is required.'
    }
  };

  getValidationMessages(control: AbstractControl, controlName: string): string {
    if ((control.touched || control.dirty) && control.errors) {
      return Object.keys(control.errors).map(key => this.validationMessages[controlName][key]).join(', ');
    }
  }
}
