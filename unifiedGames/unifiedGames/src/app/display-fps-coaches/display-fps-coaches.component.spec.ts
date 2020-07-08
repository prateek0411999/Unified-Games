import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFpsCoachesComponent } from './display-fps-coaches.component';

describe('DisplayFpsCoachesComponent', () => {
  let component: DisplayFpsCoachesComponent;
  let fixture: ComponentFixture<DisplayFpsCoachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFpsCoachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFpsCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
