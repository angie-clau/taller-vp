import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { ContactComponent } from './../../containers/contact/contact.component';
import { WelcomeComponent } from './../../componets/welcome/welcome.component';

const routes: Routes = [
     { path: 'contact', component: ContactComponent }
     , { path: 'welcome', component: WelcomeComponent }
     , { path: '', component: WelcomeComponent }
     , { path: '**', component: WelcomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class TallerRoutingModule {
     constructor(router: Router) { }
}
