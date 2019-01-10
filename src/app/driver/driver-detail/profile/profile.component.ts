import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DRIVERS} from './../../mock-drivers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  drivers = DRIVERS;
  id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id;
    });
  }
}
