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
  activePreviewImage: number = 1;
  quantity: number = 1;

  /*
   *  @function getPhone
   *
   *  Get phone data from PhoneDataService using seoName as a filter,
   *  assign the result to this.phone any. Generates a list of filter
   *  keys from the data which are used to render a list of features.
   *
   *  PhoneDetailComponent will update once these values are set, 
   *  rendering the phone detail view.
   */
  getPhone(seoName: string) {
    this.phoneDataService.getPhone(seoName).then(phone => { 
      this.phone = phone[0]; 
      this.phone.filterKeys = Object.keys(phone[0].filterfeatures);
      console.log(phone[0]);
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
