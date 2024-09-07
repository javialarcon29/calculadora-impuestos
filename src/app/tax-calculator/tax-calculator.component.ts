import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxDataService } from '../services/tax-data.service';
import { CountryTaxRate } from '../models/country-tax-rate.model';

@Component({
  selector: 'app-tax-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent {

  public countries: CountryTaxRate[] = [];
  public selectedCountry: CountryTaxRate | null = null;
  public annualIncome: number = 0;
  public taxResult: { corporateTaxAmount: number, corporateTaxRate: number } | null = null;

  constructor(private taxDataService: TaxDataService) {
    this.countries = this.taxDataService.getTaxRates();
  }

  // Calcular impuestos
  calculateTaxes() {
    if (this.selectedCountry && this.annualIncome > 0) {
      const corporateTaxAmount = this.annualIncome * (this.selectedCountry.corporateTax / 100);
      this.taxResult = {
        corporateTaxAmount: corporateTaxAmount,
        corporateTaxRate: this.selectedCountry.corporateTax
      };
    }
  }

  getCountryFlag(countryName: string): string {
    const flagMap: { [key: string]: string } = {
      'Alemania': 'de',
      'Austria': 'at',
      'Bélgica': 'be',
      'Bulgaria': 'bg',
      'Chipre': 'cy',
      'Croacia': 'hr',
      'Dinamarca': 'dk',
      'Eslovaquia': 'sk',
      'Eslovenia': 'si',
      'España': 'es',
      'Estonia': 'ee',
      'Finlandia': 'fi',
      'Francia': 'fr',
      'Grecia': 'gr',
      'Hungría': 'hu',
      'Irlanda': 'ie',
      'Italia': 'it',
      'Letonia': 'lv',
      'Lituania': 'lt',
      'Luxemburgo': 'lu',
      'Malta': 'mt',
      'Países Bajos': 'nl',
      'Polonia': 'pl',
      'Portugal': 'pt',
      'Rumanía': 'ro',
      'Suecia': 'se',
      'Chequia': 'cz'
    };

    return flagMap[countryName] || 'eu'; // Si no se encuentra el país, muestra la bandera de la UE por defecto
  }

  // Método para desplazar el deslizador horizontalmente
  scrollSlider(direction: string) {
    const container = document.querySelector('.slider-container');
    const scrollAmount = 150; // Cantidad de desplazamiento en píxeles por cada clic en la flecha

    if (direction === 'left') {
      container!.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container!.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
