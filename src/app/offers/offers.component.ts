import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { OffersService } from '../services/offers.service';
import { OfferModel } from '../models/offer.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [NgFor],
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
          offerDestination: offer.Destination,
          offerDuration: offer.Duration,
          offerHotel:  offer.Hotel,
          offerPrice: offer.Price
        }
      })
    })

 }

}
