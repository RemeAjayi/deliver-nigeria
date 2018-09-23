import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingDivComponent } from './landing-div/landing-div.component';
import { DispatchDivComponent } from './dispatch-div/dispatch-div.component';
import { SuscribeComponent } from './suscribe/suscribe.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CarouselModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CourierServicesComponent } from './courier-services/courier-services.component';
import { NavbarSecondaryComponent } from './navbar-secondary/navbar-secondary.component';
import { FoodDeliveryComponent } from './food-delivery/food-delivery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DriverComponent } from './driver/driver.component';

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
    DriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DriverComponent]
})
export class AppModule { }
