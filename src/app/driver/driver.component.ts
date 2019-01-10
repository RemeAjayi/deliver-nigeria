import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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
   config = {class: "modal-dialog-centered modal-lg"};


  @ViewChild("template") template: TemplateRef<any>;

   //declare modal component
  bsModalRef: BsModalRef;
  selectedId: any;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
    
    ) { }

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
  
  openRequestModal(elem_id)
  {
    this.selectedId = elem_id;
    this.bsModalRef = this.modalService.show(this.template, this.config) ;


  }


  getDriverDetails(id)
  {
   this.router.navigate([id], {relativeTo:this.route});
  }
}
