import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private restUrl = `${environment.restUrl}/products`;

  public first = '';
  public prev = '';
  public next = '';
  public last = '';

  constructor(private httpClient: HttpClient) {}

  parseLinkHeader(header: string) {
    if (header.length === 0) {
      return;
    }

    const parts = header.split(',');
    const links = {};
    parts.forEach((p: string) => {
      const section = p.split(';');
      const url = section[0].replace(/<(.*)>/, '$1').trim();
      const name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });

    this.first = links['first'];
    this.last = links['last'];
    this.prev = links['prev'];
    this.next = links['next'];
  }

  public sendGetRequest(page: any, limit: any) {
    return this.httpClient.get<Product[]>(
      this.restUrl,
      { params: new HttpParams({ fromString: `_page=${page}&_limit=${limit}` }), observe: 'response' })
      .pipe(retry(3), tap(response => {
        this.parseLinkHeader(response.headers.get('Link'));
      }));
  }

  public sendGetRequestToUrl(url: string) {
    return this.httpClient.get<Product[]>(url, { observe: 'response' })
      .pipe(retry(3), tap(res => {
        this.parseLinkHeader(res.headers.get('Link'));
      }));
  }

}