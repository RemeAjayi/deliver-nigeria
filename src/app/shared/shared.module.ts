import { NgModule } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { NavbarSecondaryComponent } from "../navbar-secondary/navbar-secondary.component";
import { SuscribeComponent } from "../home/suscribe/suscribe.component";
import { DispatchDivComponent } from "../home/dispatch-div/dispatch-div.component";
import { FooterComponent } from "../footer/footer.component";
// import { AppRoutingModule } from './../app-routing.module';

import { CommonModule } from '@angular/common';

// All component used across app and feature modules should go here
@NgModule({
// imports:[
//     AppRoutingModule
// ],
declarations:[
    NavbarComponent,
    NavbarSecondaryComponent,
    SuscribeComponent,
    DispatchDivComponent,
    FooterComponent
],
exports:[
    CommonModule,
    // AppRoutingModule,
    NavbarComponent,
    NavbarSecondaryComponent,
    SuscribeComponent,
    DispatchDivComponent,
    FooterComponent 
]
})
export class SharedModule
{

}