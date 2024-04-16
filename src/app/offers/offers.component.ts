import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { OffersService } from '../services/offers.service';
import { OfferModel } from '../models/offer.model';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  offers: OfferModel[] = [];

  constructor(private offersService: OffersService){}

  ngOnInit(): void {
    this.offersService.getAll().subscribe(res => {
      this.offers = res.map((offer:any) =>{
        return{
          id: offer.id,
          offerDestination: offer.offerDestination,
          offerDuration: offer.offerDuration,
          offerHotel:  offer.offerHotel,
          offerPrice: offer.offerPrice
        }
      })
    })

 }

}
