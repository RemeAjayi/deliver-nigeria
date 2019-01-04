import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestOverlayComponent } from './request-overlay/request-overlay.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { MapComponent } from './driver-detail/map/map.component';
import { MessageComponent } from './driver-detail/message/message.component';
import { ProfileComponent } from './driver-detail/profile/profile.component';


const routes: Routes = [
  { path: ':id/request-driver', component: RequestOverlayComponent},
  { path: ':id', component: DriverDetailComponent}, 
  
//   children:[
//     {path: ':id/map', component: MapComponent},
//     {path: ':id/message', component: MessageComponent},
//     {path: ':id/profile', component: ProfileComponent}
//   ] }

{path: ':id/map', component: MapComponent},
{path: ':id/message', component: MessageComponent},
{path: ':id/profile', component: ProfileComponent}

 ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DriverRoutingModule { }
