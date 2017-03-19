// imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// pipes
import { KeysPipe } from './pipes/keys/keys.pipe';
import { IterateOverObjectPipe } from './pipes/iterate-over-object/iterate-over-object.pipe';

// services
import { PhoneDataService } from './services/phone-data/phone-data.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    KeysPipe, 
    IterateOverObjectPipe
  ],
  exports: [
    // @angular modules
    HttpModule,
    FormsModule,
    RouterModule,
    
    // components
    HeaderComponent,
    FooterComponent,

    // pipes
    KeysPipe,
    IterateOverObjectPipe
  ]
})
export class SharedModule { }