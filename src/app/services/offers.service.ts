import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferModel } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private url: string = "http://localhost:8080/offers";


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get(this.url)
  }

  addOffer(request: OfferModel): Observable<any>{
    return this.httpClient.post(this.url, request);
  }

  delete(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/" + id);
  }

  updateOffer(id: string, request:OfferModel):Observable<any>{
    console.log(this.url + "/" + id);
    return this.httpClient.put(this.url + "/" + id, request);
  }















}