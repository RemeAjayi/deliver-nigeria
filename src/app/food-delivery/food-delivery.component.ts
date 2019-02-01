import { Component, OnInit } from '@angular/core';
import { GetLocationService } from './services/get-location.service';


@Component({
  selector: 'app-food-delivery',
  templateUrl: './food-delivery.component.html',
  styleUrls: ['./food-delivery.component.css']
})
export class FoodDeliveryComponent implements OnInit {
   
  states= [];
  constructor(private getLocationSerivice: GetLocationService) { }

  ngOnInit() {
    this.loadStates();
  }

  loadStates()
  {
    this.getLocationSerivice.getStates().subscribe(
      (data)=> this.states = data,
      (error) =>console.log(error)
    );
}
}
