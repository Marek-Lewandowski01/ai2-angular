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
    const id = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.service.getHousingLocationById(id);
  }
}
