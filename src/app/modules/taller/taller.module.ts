import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import {WelcomeComponent} from './../../componets/welcome/welcome.component';
import { ContactFieldsComponent } from 'app/componets/contact-fields/contact-fields.component';
import { ContactInfoComponent } from 'app/componets/contact-info/contact-info.component';
import { ContactComponent } from 'app/containers/contact/contact.component';
import { TallerService } from 'app/services/taller.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    WelcomeComponent,
    ContactFieldsComponent,
    ContactInfoComponent,
    ContactComponent
  ],
  providers: [ TallerService ]
})
export class TallerModule { }
