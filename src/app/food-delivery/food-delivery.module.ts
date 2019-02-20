import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GetLocationService } from './services/get-location.service';
import { FoodDeliveryRoutingModule } from './food-delivery-routing.module';
import { FoodDeliveryComponent } from './food-delivery.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantFinderComponent } from './restaurant-finder/restaurant-finder.component';
import { InfoComponent } from './restaurant-detail/info/info.component';
import { OrderComponent } from './restaurant-detail/order/order.component';
import { ReviewComponent } from './restaurant-detail/review/review.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FoodDeliveryRoutingModule
  ],
  providers: [
    GetLocationService
  ],
  declarations: [
    FoodDeliveryComponent,
    RestaurantDetailComponent,
    RestaurantFinderComponent,
    InfoComponent,
    OrderComponent,
    ReviewComponent
  ]
})
export class FoodDeliveryModule { }
