import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffersService {


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/offers");
  }
}
