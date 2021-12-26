import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';
// import { GuestService } from '../services/room.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
 export class GuestComponent implements OnInit {
// booking_id: string;
// public roomList: any;
// constructor(private booking: BookingService,private actRoute: ActivatedRoute){
//   this.booking_id = this.actRoute.snapshot.params['id'];
// }

 ngOnInit(): void {
//   this.room.getRoom().subscribe(res=>{
//     this.roomList =res;
//   })
}
 }