import {Component, inject} from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInfo} from '../housinglocation';
import {Housing} from '../housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      @for (location of housingLocationList; track location.id) {
        <app-housing-location
          [housingLocation]="location">
        </app-housing-location>
      }
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService = inject(Housing);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

