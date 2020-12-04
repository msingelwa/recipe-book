import { Directive, ElementRef, HostBinding } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appRecipeDirectiveTs]'
})
export class RecipeDirective {

  constructor(private element: ElementRef) { }

  @HostBinding('click') click(){

  }
}
