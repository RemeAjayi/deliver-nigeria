import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchDivComponent } from './dispatch-div.component';

describe('DispatchDivComponent', () => {
  let component: DispatchDivComponent;
  let fixture: ComponentFixture<DispatchDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
