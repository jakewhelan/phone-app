// imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// routing module
import { PhoneDetailRoutingModule } from './phone-detail.routes';

// components
import { PhoneDetailComponent } from './phone-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PhoneDetailRoutingModule
  ],
  declarations: [
  	PhoneDetailComponent
  ]
})
export class PhoneDetailModule { }
