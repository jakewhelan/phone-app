// imports
import { Component, OnInit } from '@angular/core';

// services
import { PhoneDataService } from '../shared/services/phone-data/phone-data.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {

  constructor(
    private phoneDataService: PhoneDataService
  ) {}

  phones: any[];
  filteredPhones: any[];
  filters: string[] = ["3G", "Android", "Bluetooth", "Camera", "Email", "FM radio", "Internet browser", "MP3 player", "Picture messaging", "Smartphone", "Touchscreen", "Video messaging", "Video recording", "WiFi", "Large keys", "Memory card", "QWERTY keyboard", "LandlineOnly"];
  filterValues: string[] = [];

  getPhones() {
    this.phoneDataService.getPhones().then(phones => {
      this.phones = phones;
      this.filteredPhones = phones;
    });
  }

  updateFilterValues(value: string) {
    let index = this.filterValues.indexOf(value);
    if(index > -1) {
      this.filterValues.splice(index, 1);
    } else {
      this.filterValues.push(value);
    }
    this.filterPhones();
  }

  /*
   *  @function filterPhones
   *
   *  Filters an array of objects using an array of strings(keys).
   *
   *  Each string in this.filterValues any[] represents a desired
   *  key which can be found in the this.phones[i].filterfeatures 
   *  Object. We are filtering for results that strictly contain 
   *  _all_ desired keys.
   *
   *  For each phone Object in the this.phones any[] we loop through 
   *  the filterValues string[] and check that the value for each key
   *  is truthy. If truthy, continue - once the loop has complete we
   *  know the values for all desired keys are truthy, this is a positive
   *  result. If falsey, exit the current filter iteration and begin the
   *  next one as we know this is a negative result.
   *
   *  Once the operation has been complete, return an array of all 
   *  positive results, and assign to the this.filterPhones any[].
   *  
   */
  filterPhones() {
    this.filteredPhones = this.phones.filter(phone => {
      for(let i = 0; i < this.filterValues.length; i++) {
        let feature = this.filterValues[i];
        let phoneDoesNotHaveFeature = !phone.filterfeatures[feature];
        if(phoneDoesNotHaveFeature) {
          return false;
        }
      }
      return true;
    });
  }

  ngOnInit() {
    this.getPhones();
  }

}
