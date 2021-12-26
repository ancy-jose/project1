import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { RoomComponent } from './room/room.component';
import { BookingComponent } from './booking/booking.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "**", redirectTo: '/home', pathMatch: 'full' },
  { path: 'hotels', component: HotelComponent },
  { path: 'room/:id', component: RoomComponent },
  { path: 'booking/:num', component: BookingComponent },
  { path: 'guest/:Order_Id', component: GuestComponent },
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
