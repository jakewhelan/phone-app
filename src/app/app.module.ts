// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing module
import { AppRoutingModule } from './app.routes';

// shared module
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneComponent } from './phone/phone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// services
import { PhoneDataService } from './shared/services/phone-data/phone-data.service';

// decorator
@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [  
    PhoneDataService
  ],
  bootstrap: [AppComponent]
})

// module export
export class AppModule { }