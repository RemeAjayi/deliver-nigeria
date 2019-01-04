import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {DRIVERS} from './mock-drivers';
import { Driver } from './driver-model';



@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
   //extract driver model data
   drivers = DRIVERS;
   motorTag: string = 'all';
   results: Driver[] = this.drivers;

   //declare modal component
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }



  switch(getTag){
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
  
  openRequestModal(template: TemplateRef<any>)
  {
   
    this.bsModalRef = this.modalService.show(template);
  }
}




