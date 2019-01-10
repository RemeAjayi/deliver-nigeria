import { Component, OnInit } from '@angular/core';
import { DRIVERS } from './../../mock-drivers';
import { Driver } from './../../driver-model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  drivers = DRIVERS;
  constructor(
    private route: ActivatedRoute
  ) { 
   
    // const id: any = 4+
  }

 
  ngOnInit() {
    const id: any = this.route.snapshot.params.id
  }
}
