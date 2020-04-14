import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HighlightDirective } from './directives/highlight.directive';
import { ClickHighlightDirective } from './directives/click-highlight.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EmailValidatorDirective } from './validators/email-validator.directive';

@NgModule({
  declarations: [HighlightDirective, ClickHighlightDirective, OrderByPipe, EmailValidatorDirective],
  imports: [
    CommonModule, RouterModule, HttpClientModule
  ],
  exports: [HighlightDirective, ClickHighlightDirective, OrderByPipe, EmailValidatorDirective, CommonModule,
    FormsModule, ReactiveFormsModule, RouterModule]
})
export class SharedModule { }
