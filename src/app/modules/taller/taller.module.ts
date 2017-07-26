import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import {WelcomeComponent} from './../../componets/welcome/welcome.component';
import { ContactFieldsComponent } from 'app/componets/contact-fields/contact-fields.component';
import { ContactInfoComponent } from 'app/componets/contact-info/contact-info.component';

// Containers
import { ContactComponent } from 'app/containers/contact/contact.component';

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
  providers: [ ]
})
export class TallerModule { }
