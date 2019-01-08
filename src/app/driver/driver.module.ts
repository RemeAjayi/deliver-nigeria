import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { DriverComponent, ModalShowComponent } from './driver.component';
import { RequestOverlayComponent } from './request-overlay/request-overlay.component';
import { DriverDetailComponent } from './driver-detail/driver-detail.component';
import { MapComponent } from './driver-detail/map/map.component';
import { MessageComponent } from './driver-detail/message/message.component';
import { ProfileComponent } from './driver-detail/profile/profile.component';
import { DriverRoutingModule } from './driver-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DriverComponent,
    RequestOverlayComponent,
    DriverDetailComponent,
    MapComponent,
    MessageComponent,
    ProfileComponent,
    ModalShowComponent
    
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    DriverRoutingModule,
    SharedModule
  ],
  providers: [],
  entryComponents: [DriverComponent]
})
export class DriverModule { }
