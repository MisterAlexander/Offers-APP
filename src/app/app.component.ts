import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OffersComponent } from "./offers/offers.component";
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, OffersComponent,HttpClientModule,MatSlideToggleModule]
})
export class AppComponent {

  title = 'Offers-app';
}
