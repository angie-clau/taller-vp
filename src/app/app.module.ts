import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Modules
import {TallerModule} from './modules/taller/taller.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TallerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
