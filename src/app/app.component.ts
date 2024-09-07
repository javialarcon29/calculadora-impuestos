import { Component } from '@angular/core';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaxCalculatorComponent],
  template: `<app-tax-calculator></app-tax-calculator>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
