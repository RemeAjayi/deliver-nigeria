import { Component, 
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit } from '@angular/core';
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

  // componentRef: any; 

  // @ViewChild('drivergrid', { read: ViewContainerRef }) entry: ViewContainerRef;
  //   constructor(private resolver: ComponentFactoryResolver) { }
  
  //   createComponent() {
  //     this.entry.clear();
  //     const factory = this.resolver.resolveComponentFactory(DriverComponent);
  //     this.componentRef = this.entry.createComponent(factory);
  //     // const componentRef = this.entry.createComponent(factory);
  //   }
 
  //   destroyComponent() {
  //     this.componentRef.destroy();
  // }
  findDriver()
  {
    this.router.navigate(['/find-driver']);
  }

  ngOnInit() {
  }

}
