import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';
//  import {DriverComponent} from '../driver/driver.component';

@Component({
  selector: 'app-courier-services',
  templateUrl: './courier-services.component.html',
  styleUrls: ['./courier-services.component.css']
})
export class CourierServicesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
){}


  findDriver()
  {
    this.router.navigate(['driver']);
  }

  ngOnInit() {
  }

}
