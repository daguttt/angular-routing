import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.interface';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  countries$!: Observable<Country[]>;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries$ = this.countriesService.getAllCountries();
  }
}
