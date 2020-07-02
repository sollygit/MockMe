import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../models/country.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private countryUrl = `${environment.restUrl}/country`;
  private offerUrl = `${environment.restUrl}/offer`;

  constructor(private httpClient: HttpClient) { }

  public getCountries() {
    return this.httpClient.get<Country[]>(this.countryUrl);
  }

  public sendOffer(request: string) {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<string>(this.offerUrl, request, { headers: header });
  }

}
