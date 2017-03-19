import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

// services
import { PhoneDataService } from '../shared/services/phone-data/phone-data.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit, OnDestroy {

  constructor(
    private phoneDataService: PhoneDataService,
    private route: ActivatedRoute
  ) {}

  private sub: any;
  phoneSeoName: string;
  phone: any = {};

  getPhone(seoName: string) {
    this.phoneDataService.getPhone(seoName).then(phone => { 
      this.phone = phone[0]; 
      this.phone.filterKeys = Object.keys(phone[0].filterfeatures) 
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => this.phoneSeoName = params['phoneSeoName']);
    this.getPhone(this.phoneSeoName);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
