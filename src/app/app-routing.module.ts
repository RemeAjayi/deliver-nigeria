import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { CourierServicesComponent } from './courier-services/courier-services.component';
import { FoodDeliveryComponent } from './food-delivery/food-delivery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantFinderComponent } from './food-delivery/restaurant-finder/restaurant-finder.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'courier-services', component: CourierServicesComponent },
  {path: 'food-delivery', component: FoodDeliveryComponent},
  {path: 'restaurants', component:RestaurantFinderComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
