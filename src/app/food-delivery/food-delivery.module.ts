import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { GetLocationService } from './services/get-location.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    GetLocationService
  ],
  declarations: []
})
export class FoodDeliveryModule { }
