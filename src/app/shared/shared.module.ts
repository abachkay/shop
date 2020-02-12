import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickHighlightDirective } from './directives/click-highlight.directive';



@NgModule({
  declarations: [HighlightDirective, ClickHighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, ClickHighlightDirective]
})
export class SharedModule { }
