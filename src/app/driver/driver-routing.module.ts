import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { MapComponent } from './driver-detail/map/map.component';
import { MessageComponent } from './driver-detail/message/message.component';
import { ProfileComponent } from './driver-detail/profile/profile.component';


const driverRoutes: Routes = [
  { path: '', component: DriverComponent},
  { path: ':id', component: DriverDetailComponent, children:[
    {path: 'map', component: MapComponent},
    {path: 'message', component: MessageComponent},
    {path: 'profile', component: ProfileComponent}
  ] }
 ];

@NgModule({
  imports: [ RouterModule.forChild(driverRoutes) ],
  exports: [ RouterModule ]
})
export class DriverRoutingModule { }