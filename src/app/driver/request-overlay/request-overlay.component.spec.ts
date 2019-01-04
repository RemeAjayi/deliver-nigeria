import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOverlayComponent } from './request-overlay.component';

describe('RequestOverlayComponent', () => {
  let component: RequestOverlayComponent;
  let fixture: ComponentFixture<RequestOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
