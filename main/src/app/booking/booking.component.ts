import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  
  Room_num: number;
  public BookingList: any;
  constructor(private booking: BookingService,private actRoute: ActivatedRoute){
    this.Room_num = this.actRoute.snapshot.params['num'];
  }
 
  ngOnInit(): void {
    this.booking.getBooking().subscribe(res=>{
      this.BookingList =res;
    })
  } 
}
