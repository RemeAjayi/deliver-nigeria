import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Restaurant } from './../models/restaurant';
import { GetLocationService } from './../services/get-location.service';

@Component({
  selector: 'app-restaurant-finder',
  templateUrl: './restaurant-finder.component.html',
  styleUrls: ['./restaurant-finder.component.css']
})
export class RestaurantFinderComponent implements OnInit {

  restaurants$: Observable<Restaurant[]>;
  private searchTerms = new Subject<string>();

  constructor(private getLocationService: GetLocationService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.restaurants$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.getLocationService.searchRestaurants(term)),
    );
  }
}
