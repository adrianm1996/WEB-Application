import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ClubDetailComponent } from './club-detail/club-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    ClubDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
