import { Injectable } from '@angular/core';
import { CountryTaxRate } from '../models/country-tax-rate.model';

@Injectable({
  providedIn: 'root'
})
export class TaxDataService {

  // Datos de impuestos de sociedades en los países de la UE
  private taxRates: CountryTaxRate[] = [
    { country: 'Alemania', corporateTax: 15 },
    { country: 'Austria', corporateTax: 25 },
    { country: 'Bélgica', corporateTax: 25 },
    { country: 'Bulgaria', corporateTax: 10 },
    { country: 'Chipre', corporateTax: 12.5 },
    { country: 'Croacia', corporateTax: 18 },
    { country: 'Dinamarca', corporateTax: 22 },
    { country: 'Eslovaquia', corporateTax: 21 },
    { country: 'Eslovenia', corporateTax: 19 },
    { country: 'España', corporateTax: 25 },
    { country: 'Estonia', corporateTax: 20 },
    { country: 'Finlandia', corporateTax: 20 },
    { country: 'Francia', corporateTax: 25 },
    { country: 'Grecia', corporateTax: 22 },
    { country: 'Hungría', corporateTax: 9 },
    { country: 'Irlanda', corporateTax: 12.5 },
    { country: 'Italia', corporateTax: 24 },
    { country: 'Letonia', corporateTax: 20 },
    { country: 'Lituania', corporateTax: 15 },
    { country: 'Luxemburgo', corporateTax: 24.94 },
    { country: 'Malta', corporateTax: 35 },
    { country: 'Países Bajos', corporateTax: 25.8 },
    { country: 'Polonia', corporateTax: 19 },
    { country: 'Portugal', corporateTax: 21 },
    { country: 'Rumanía', corporateTax: 16 },
    { country: 'Suecia', corporateTax: 20.6 },
    { country: 'Chequia', corporateTax: 19 }
  ];

  getTaxRates(): CountryTaxRate[] {
    return this.taxRates;
  }

  constructor() { }
}
