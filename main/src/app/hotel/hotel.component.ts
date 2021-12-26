import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  public hotelList: any;
  constructor(private api: ApiService){}
 
  ngOnInit(): void {
    this.api.getHotel().subscribe(res=>{
      this.hotelList =res;
    })
  }
}


 // Hotels[];
  // Hotels = [
  //   {id:'PR147',Name:'Radisson Blu',Location:'CP',Contact:'7865462876',Rating:'4.5'},
  //   {id:'PR178',Name:'Vivanta by Taj',Location:'Dwarka',Contact:'6437846840',Rating:'4'},
  //   {id:'EX324',Name:'Le Meridian',Location:'CP',Contact:'6473984739',Rating:'4'},
  //   {id:'EX345',Name:'Pullman',Location:'Aerocity',Contact:'9872536478',Rating:'3.5'},
  //   {id:'EX765',Name:'Roseate House',Location:'Aerocity',Contact:'8764563728',Rating:'4.5'},
  //   {id:'SU786',Name:'Trident',Location:'Gurgaon',Contact:'9823554676',Rating:'4'},
  //   {id:'SU023',Name:'The Umrao',Location:'Gurgaon',Contact:'9873452657',Rating:'3.5'},
  //   {id:'SU768',Name:'The Oberoi',Location:'Udyog Vihar',Contact:'9965478328',Rating:'4'},
  //   {id:'SU355',Name:'Crown Plaza',Location:'Rohini',Contact:'7634526770',Rating:'3.5'},
  //   {id:'EX333',Name:'Lemon Tree',Location:'Janakpuri',Contact:'8764356279',Rating:'4'}
  // ];