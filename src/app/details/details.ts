import {Component, inject} from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';
import {Housing} from '../housing';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  route = inject(ActivatedRoute);
  service = inject(Housing);
  housingLocation: HousingLocationInfo | undefined;

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.service.getHousingLocationById(housingLocationId).then((housingLocation: HousingLocationInfo | undefined) => {
      this.housingLocation = housingLocation;
    });
  }
}
