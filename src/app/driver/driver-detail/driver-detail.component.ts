import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DRIVERS } from './../mock-drivers';
@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css']
})
export class DriverDetailComponent implements OnInit {
  id: number;
  drivers = DRIVERS;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id - 1;
      //1 must be removed from the index, because arrays are zero-based
    });
  }

}
