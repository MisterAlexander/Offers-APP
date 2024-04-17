import { Component, OnInit,} from '@angular/core';
import { OffersService } from '../services/offers.service';
import { OfferModel } from '../models/offer.model';
import { NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [NgFor,MatTableModule,MatSlideToggleModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  offers: OfferModel[] = [];
dataSource: any;
displayedColumns: any;

  constructor(private offersService: OffersService){}

  ngOnInit(): void {
    this.offersService.getAll().subscribe(res => {
      this.offers = res.map((offer:any) =>{
        return{
          id: offer.id,
          destination: offer.destination,
          duration: offer.duration,
          hotel:  offer.hotel,
          price: offer.price
        }
      })
    })

 }
update():void{
  console.log("Update Called");
}
delete():void{
  console.log("Delete Called");
}

}
