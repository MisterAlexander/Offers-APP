import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit, OnChanges, OnDestroy {
  ngOnInit(): void {
    console.log("Offers compononet initiallized!");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes Loading Succes!");
  }
ngOnDestroy(): void {
  console.log("Destroy Called!");
}
}
