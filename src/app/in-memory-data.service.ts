import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Restaurant } from './food-delivery/models/restaurant';
import { RESTAURANTS } from './food-delivery/models/restaurant_list';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService {
   createDb()
   {
     const restaurants = RESTAURANTS;
     return {restaurants};
   }
  genId(restaurants: Restaurant[]): number {
    return restaurants.length > 0 ? Math.max(...restaurants.map(restaurant => restaurant.id)) + 1 : 11;
  }
  constructor() { }
}
