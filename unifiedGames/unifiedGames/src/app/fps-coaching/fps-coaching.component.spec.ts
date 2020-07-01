import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpsCoachingComponent } from './fps-coaching.component';

describe('FpsCoachingComponent', () => {
  let component: FpsCoachingComponent;
  let fixture: ComponentFixture<FpsCoachingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpsCoachingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpsCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
