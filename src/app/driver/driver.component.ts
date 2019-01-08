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
    const initialState = {title: 'modal'};
    this.bsModalRef = this.modalService.show(this.template) ;
    this.bsModalRef.content.id = elem_id;
  }

  getDriverDetails(id)
  {
   this.router.navigate([id], {relativeTo:this.route});
  }

}

@Component({
  selector: 'modal-content',
  template: `
   <div class="modal-header px-5 py-1">
        <h4 class="modal-title">{{title}}Request Driver</h4>
    </div>
    <div class="modal-body px-5 py-1 mb-3">
        <div class="row">
            <div class="col-lg-6">
             <p>Drived id - {{id}}</p>
             <p>Pickup Location</p>
             <p>2 Bamidele close VI Lagos</p>
            </div>
            <div class="col-lg-6">
             <p>Delivery Location</p>
             <p>5 Ocean Bay Estate Boulevard Road VI Lagos</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
            <span>Payment Method</span>
            </div>
          <div class="col-lg-6">
            <span>xxxx-xxxx-xxxx-3466</span>
          </div>
          <div class="col-lg-2">
        <span class="float-right pink-text"><a>Change</a></span>
          </div>
        
        </div>
        <div class="row">
        <textarea class="form-control" placeholder="Enter Message to driver (Optional)"></textarea>
        </div>
        <button class="align-right" (click)="getDriverDetails(id)"> REQUEST DRIVER</button>
    </div>
  `
})
export class ModalShowComponent implements OnInit {
 
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {

  }
}