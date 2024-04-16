import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OffersComponent } from "./offers/offers.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, OffersComponent]
})
export class AppComponent {
  title = 'Offers-app';
}
