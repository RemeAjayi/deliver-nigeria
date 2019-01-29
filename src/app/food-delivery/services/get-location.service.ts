import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  constructor(private http: HttpClient) { }

  getStates()
  {
    return this.http.get('http://locationsng-api.herokuapp.com/api/v1/states');
  }
}
