import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OffersComponent } from "./offers/offers.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, OffersComponent,HttpClientModule]
})
export class AppComponent {
  title = 'Offers-app';
}
