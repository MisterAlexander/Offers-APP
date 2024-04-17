import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfterViewInit,Inject,Component,OnInit, ViewChild,} from '@angular/core';
import { OffersService } from '../services/offers.service';
import { NgFor} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { OfferModel } from '../models/offer.model';

@Component({
  selector: 'app-offer-form-dialog',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, ReactiveFormsModule, MatDividerModule],
  templateUrl: './offer-form-dialog.component.html',
  styleUrl: './offer-form-dialog.component.css'
})
export class offerFormDialogComponent implements OnInit{
  offerForm = new FormGroup({
    Destination: new FormControl('', Validators.required),
    Duration: new FormControl('', Validators.required),
    Hotel: new FormControl('', Validators.required),
    Price: new FormControl('', Validators.required)
  });

  currentoffer: OfferModel;
  constructor(
    public dialogRef: MatDialogRef<offerFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){
    console.log(data);
    this.currentoffer = data;
  }

  ngOnInit():void{
    if(this.currentoffer){
      this.offerForm.controls.Destination.setValue(this.currentoffer.destination);
      this.offerForm.controls.Duration.setValue(this.currentoffer.duration);
      this.offerForm.controls.Hotel.setValue(this.currentoffer.hotel);
      this.offerForm.controls.Price.setValue(this.currentoffer.price.toString());
    }
  }

  onSubmit(){
    const newoffer = {
      Destination: this.offerForm.controls.Destination.getRawValue(),
      Duration: this.offerForm.controls.Duration.getRawValue(),
      Hotel: this.offerForm.controls.Hotel.getRawValue(),
      Price: this.offerForm.controls.Price.getRawValue()
    }

    console.log(newoffer);
    if(this.currentoffer){
      this.dialogRef.close({
        event:"update",
        data:newoffer 
       })
    } else {
      this.dialogRef.close({
        event:"add",
        data:newoffer 
       })
    }
  }

  close():void{
    console.log("Cancel")
    this.dialogRef.close({
      event:"cancel"
     });
  }
}