import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OffersComponent } from "./offers/offers.component";
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgFor} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, OffersComponent,NgFor,MatTableModule,MatSlideToggleModule,MatButtonModule, MatDividerModule, MatIconModule,HttpClientModule]
})
export class AppComponent {
  title = 'Offers-app';


  }

