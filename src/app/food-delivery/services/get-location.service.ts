import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  private api = 'http://locationsng-api.herokuapp.com/api/v1/states';
  constructor(private http: HttpClient) { }

  getStates(): Observable<any>
  {
    return this.http.get(this.api);
  }
  getCities(state: string): Observable<any> {
    const url = `http://locationsng-api.herokuapp.com/api/v1/states/${state}/cities`;
    return this.http.get(url);
  }
}
