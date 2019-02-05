import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Restaurant } from './../models/restaurant'


@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  private api = 'http://locationsng-api.herokuapp.com/api/v1/states';
  private r_url = 'api/restaurants';

  constructor(private http: HttpClient) { }

  getStates(): Observable<any>
  {
    return this.http.get(this.api);
  }
  getCities(state: string): Observable<any> {
    const url = `http://locationsng-api.herokuapp.com/api/v1/states/${state}/cities`;
    return this.http.get(url);
  }
  searchRestaurants(term: string): Observable<Restaurant[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Restaurant[]>(`${this.r_url}/?name=${term}`);
  }
}
