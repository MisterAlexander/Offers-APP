import { AfterViewInit, Component, ViewChild,} from '@angular/core';
import { OffersService } from '../services/offers.service';
import { OfferModel } from '../models/offer.model';
import { NgFor} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { offerFormDialogComponent } from '../offer-form-dialog/offer-form-dialog.component';


@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [NgFor,MatTableModule,MatButtonModule,MatIconModule,MatPaginatorModule,MatPaginator],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements AfterViewInit {
  displayedColumns: string[] = ['ID', 'DESTINATION', 'DURATION', 'HOTEL', 'PRICE', 'UPDATE', 'DELETE'];
dataSource: any;

@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private offersService: OffersService, public dialog: MatDialog){
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
 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
 }

 openDialog(offer?: OfferModel): void{
  const dialogRef = this.dialog.open(offerFormDialogComponent, {
    width: '500px',
    backdropClass: 'custom-dialog-backdrop-class',
    panelClass: 'custom-dialog-panel-class',
    data: offer
  });

  dialogRef.afterClosed().subscribe(res=>{
    console.log(res)
    if(res.event === 'add'){
      this.offersService.addOffer(res.data).subscribe();
    } else if(res.event === 'update'){
      if(offer){
        this.offersService.updateoffer(offer.id.toString(), res.data).subscribe();
      }
    }
  })
}



delete(id: string): void{
  this.offersService.delete(id).subscribe(res=>{
    console.log(res);
    location.reload();
  });
}





}
