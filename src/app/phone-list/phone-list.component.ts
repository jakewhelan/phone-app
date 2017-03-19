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
  phones2 = {};
  filters: string[] = ["3G", "Android", "Bluetooth", "Camera", "Email", "FM radio", "Internet browser", "MP3 player", "Picture messaging", "Smartphone", "Touchscreen", "Video messaging", "Video recording", "WiFi", "Large keys", "Memory card", "QWERTY keyboard", "LandlineOnly"];

  getPhones() {
    this.phoneDataService.getPhones().then(phones => this.phones = phones);
  }

  ngOnInit() {
    this.getPhones();
  }

}
