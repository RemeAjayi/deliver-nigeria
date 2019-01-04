import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingDivComponent } from './home/landing-div/landing-div.component';
import { DispatchDivComponent } from './home/dispatch-div/dispatch-div.component';
import { SuscribeComponent } from './home/suscribe/suscribe.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { CarouselModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CourierServicesComponent } from './courier-services/courier-services.component';
import { NavbarSecondaryComponent } from './navbar-secondary/navbar-secondary.component';
import { FoodDeliveryComponent } from './food-delivery/food-delivery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DriverComponent } from './driver/driver.component';
import { RequestOverlayComponent } from './driver/request-overlay/request-overlay.component';
import { DriverDetailComponent } from './driver/driver-detail/driver-detail.component';
import { MapComponent } from './driver/driver-detail/map/map.component';
import { MessageComponent } from './driver/driver-detail/message/message.component';
import { ProfileComponent } from './driver/driver-detail/profile/profile.component';
import { RestaurantFinderComponent } from './food-delivery/restaurant-finder/restaurant-finder.component';
import { RestaurantDetailComponent } from './food-delivery/restaurant-detail/restaurant-detail.component';
import { OrderComponent } from './food-delivery/restaurant-detail/order/order.component';
import { ReviewComponent } from './food-delivery/restaurant-detail/review/review.component';
import { InfoComponent } from './food-delivery/restaurant-detail/info/info.component';
import { DriverModule } from './driver/driver.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LandingDivComponent,
    DispatchDivComponent,
    SuscribeComponent,
    FooterComponent,
    TestimonialComponent,
    CourierServicesComponent,
    NavbarSecondaryComponent,
    FoodDeliveryComponent,
    PageNotFoundComponent,
    DriverComponent,
    RequestOverlayComponent,
    DriverDetailComponent,
    MapComponent,
    MessageComponent,
    ProfileComponent,
    RestaurantFinderComponent,
    RestaurantDetailComponent,
    OrderComponent,
    ReviewComponent,
    InfoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    DriverModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DriverComponent]
})
export class AppModule { }
