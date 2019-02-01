import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  constructor(private http: HttpClient) { }

  getStates(): Observable<any>
  {
    return this.http.get('http://locationsng-api.herokuapp.com/api/v1/states');
  }
}
