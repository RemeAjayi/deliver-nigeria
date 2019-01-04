import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestOverlayComponent } from './request-overlay/request-overlay.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { MapComponent } from './driver-detail/map/map.component';
import { MessageComponent } from './driver-detail/message/message.component';
import { ProfileComponent } from './driver-detail/profile/profile.component';


const routes: Routes = [
  { path: ':id', component: DriverDetailComponent, children:[
    {path: 'map', component: MapComponent},
    {path: 'message', component: MessageComponent},
    {path: 'profile', component: ProfileComponent}
  ] }
 ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DriverRoutingModule { }
