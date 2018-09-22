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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LandingDivComponent,
    DispatchDivComponent,
    SuscribeComponent,
    FooterComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
