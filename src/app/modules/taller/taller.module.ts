import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Components
import { WelcomeComponent } from './../../componets/welcome/welcome.component';
import { ContactFieldsComponent } from 'app/componets/contact-fields/contact-fields.component';
import { ContactInfoComponent } from 'app/componets/contact-info/contact-info.component';

//containers
import { ContactComponent } from 'app/containers/contact/contact.component';

//Services
import { TallerService } from 'app/services/taller.service';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        WelcomeComponent,
        ContactComponent,
        ContactFieldsComponent,
        ContactInfoComponent
    ],
    providers: [TallerService]
})

export class TallerModule { }
