import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

import { CartService } from 'src/app/cart/services/cart.service';
import { RouterFacade } from 'src/app/core/@ngrx/router/router.facade';
import { CustomValidators } from '../shared/validators/custom.validators';
import { OrderValidationMessagesService } from './services/order-validation-messages.service';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  totalSum: number;
  orderForm: FormGroup;
  emailValidationMessage = '';
  firstNameValidationMessage = '';

  get phoneNumbersFormArray(): FormArray {
    return this.orderForm.get('phoneNumbers') as FormArray;
  }

  constructor(
    private cartService: CartService,
    private routerFacade: RouterFacade,
    private formBuilder: FormBuilder,
    private orderValidationMessagesService: OrderValidationMessagesService
  ) {
  }

  ngOnInit() {
    this.totalSum = this.cartService.totalSum;
    this.buildForm();
    this.orderForm.get('inStorePickup').valueChanges.subscribe(value => this.inStorePickupValueChangedHandler(value));
  }

  onConfirmOrder() {
    console.log(`You created an order for ${this.totalSum}`);
    console.log(`Order details: ${JSON.stringify(this.orderForm.getRawValue())}`);

    this.cartService.removeAllProducts();
    this.routerFacade.goTo({ path: ['products-list'] });
  }

  onAddPhoneNumber(): void {
    this.phoneNumbersFormArray.push(this.buildPhoneNumberFormGroup());
  }

  onRemovePhoneNumber(index: number): void {
    this.phoneNumbersFormArray.removeAt(index);
  }

  getValidationMessages(controlName: string) {
    const control = this.orderForm.get(controlName);

    return this.orderValidationMessagesService.getValidationMessages(control, controlName);
  }

  getPhoneNumberValidationMessages(index: number) {
    const control = this.phoneNumbersFormArray.controls[index].get('phoneNumber');

    return this.orderValidationMessagesService.getValidationMessages(control, 'phoneNumber');
  }

  private buildForm() {
    this.orderForm = this.formBuilder.group({
      firstName: this.formBuilder.control('', [Validators.required, CustomValidators.userNameValid]),
      lastName: this.formBuilder.control('', [Validators.required, CustomValidators.userNameValid]),
      email: '',
      phoneNumbers: this.formBuilder.array([this.buildPhoneNumberFormGroup()]),
      inStorePickup: false,
      address: this.formBuilder.control('', [Validators.required])
    });
  }

  private buildPhoneNumberFormGroup(): FormGroup {
    return this.formBuilder.group({
      phoneNumber: this.formBuilder.control('', [Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)])
    });
  }

  private inStorePickupValueChangedHandler(value) {
    const addressControl: AbstractControl = this.orderForm.get('address');

    if (value) {
      addressControl.clearValidators();
      addressControl.setValue(null);
    } else {
      addressControl.setValidators([Validators.required]);
    }

    addressControl.updateValueAndValidity();
  }
}
