import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deal } from 'src/models/Deal';
import { API_URL } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  constructor(private http: HttpClient) {}

  getDeals(): Observable<Deal[]> {
    return this.http
      .get<Deal[]>(API_URL + '/')
      .pipe(map((response: any) => response.deals));
  }
}
