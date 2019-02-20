import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDeliveryComponent } from './food-delivery.component';
import { RestaurantFinderComponent } from './restaurant-finder/restaurant-finder.component';



const routes: Routes = [
  { path: '', component: FoodDeliveryComponent},
  { path: 'restaurant-finder',  component:RestaurantFinderComponent}
 ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FoodDeliveryRoutingModule { }