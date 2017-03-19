import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KeysPipe } from './keys.pipe';
import { IterateOverObjectPipe } from './iterate-over-object.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, KeysPipe, IterateOverObjectPipe]
})
export class SharedModule { }
