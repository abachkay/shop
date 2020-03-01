import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickHighlightDirective } from './directives/click-highlight.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HighlightDirective, ClickHighlightDirective, OrderByPipe],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HighlightDirective, ClickHighlightDirective, OrderByPipe, CommonModule, FormsModule, RouterModule]
})
export class SharedModule { }
