import { Component, OnInit } from '@angular/core';
import {DRIVERS} from '../mock-drivers';
import { Driver } from '../driver';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
   drivers = DRIVERS;
   motorTag: string = 'all';
   results: Driver[] = this.drivers;

  constructor() { }

  ngOnInit() {
  }

  switch(getTag){
<<<<<<< HEAD
   this.motorTag = getTag;     
  }
}
=======
    //  this.motorTag = getTag; 
       this.results = [];   
         if(getTag == 'all')
       {
         this.results = this.drivers;
       }
       //end of if
       else if(getTag == 'car-alt' || getTag == 'motorcycle' || getTag == 'truck')
       {
        for (let driver of this.drivers)
          {
       if(driver.vehicleType == getTag)
       {
        this.results.push(driver);
      }
      }
       //end of for loop
      }
      //end of else if
       else
       {
         this.results = [];
       }
      
     return this.results;

      }

      //end of switch Tag
    }




>>>>>>> 660a5331e3cbc88368c3353cb9d01bdaaea2174a
