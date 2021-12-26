import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomComponent } from './room/room.component';
import { BookingComponent } from './booking/booking.component';
import { GuestComponent } from './guest/guest.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    RoomComponent,
    BookingComponent,
    GuestComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
