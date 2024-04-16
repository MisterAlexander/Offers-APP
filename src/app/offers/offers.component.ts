import { Component, OnInit,} from '@angular/core';
import { OffersService } from '../services/offers.service';
import { OfferModel } from '../models/offer.model';
import { NgFor} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
          destination: offer.Destination,
          duration: offer.Duration,
          hotel:  offer.Hotel,
          price: offer.Price
        }
      })
    })

 }

}
