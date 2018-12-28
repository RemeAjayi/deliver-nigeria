import { Component, OnInit } from '@angular/core';
import {DRIVERS} from '../mock-drivers';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
   drivers = DRIVERS;
   motorTag: string = 'all';
  // results = [];
  constructor() { }

  ngOnInit() {
  }

  switch(getTag){
   this.motorTag = getTag;     
  }
}