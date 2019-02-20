import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { CourierServicesComponent } from './courier-services/courier-services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'courier-services', component: CourierServicesComponent },
  { path: 'driver', loadChildren:'./driver/driver.module#DriverModule'},
  { path: 'food-delivery', loadChildren:'./food-delivery/food-delivery.module#FoodDeliveryModule'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
