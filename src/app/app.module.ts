import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingDivComponent } from './home/landing-div/landing-div.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { CarouselModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CourierServicesComponent } from './courier-services/courier-services.component';
import { FoodDeliveryComponent } from './food-delivery/food-delivery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantFinderComponent } from './food-delivery/restaurant-finder/restaurant-finder.component';
import { RestaurantDetailComponent } from './food-delivery/restaurant-detail/restaurant-detail.component';
import { OrderComponent } from './food-delivery/restaurant-detail/order/order.component';
import { ReviewComponent } from './food-delivery/restaurant-detail/review/review.component';
import { InfoComponent } from './food-delivery/restaurant-detail/info/info.component';
import { DriverModule } from './driver/driver.module';
import { SharedModule } from './shared/shared.module';
import { FoodDeliveryModule } from './food-delivery/food-delivery.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingDivComponent,
    TestimonialComponent,
    CourierServicesComponent,
    FoodDeliveryComponent,
    PageNotFoundComponent,
    RestaurantFinderComponent,
    RestaurantDetailComponent,
    OrderComponent,
    ReviewComponent,
    InfoComponent
    
  ],

  // check browser console for errors if your page is blank
  // if you have another module that uses your components delete from here.
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    SharedModule,
    DriverModule,
    FoodDeliveryModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
