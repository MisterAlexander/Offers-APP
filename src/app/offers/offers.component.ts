import { Component, OnInit,} from '@angular/core';
import { OffersService } from '../services/offers.service';
import { OfferModel } from '../models/offer.model';
import { NgFor} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [NgFor,MatTableModule,MatButtonModule,MatIconModule,MatPaginatorModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'DESTINATION', 'DURATION', 'HOTEL', 'PRICE', 'UPDATE', 'DELETE'];
dataSource: any;

  constructor(private offersService: OffersService){}

  ngOnInit(): void {
    this.offersService.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource<OfferModel>(res.map((offer:any) =>{
        return{
          id: offer.id,
          destination: offer.destination,
          duration: offer.duration,
          hotel:  offer.hotel,
          price: offer.price
        }
      }));
     
    })

 }
update():void{
  console.log("Update Called");
}
delete():void{
  console.log("Delete Called");
}

}
