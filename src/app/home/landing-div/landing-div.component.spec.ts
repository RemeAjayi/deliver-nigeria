import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDivComponent } from './landing-div.component';

describe('LandingDivComponent', () => {
  let component: LandingDivComponent;
  let fixture: ComponentFixture<LandingDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
