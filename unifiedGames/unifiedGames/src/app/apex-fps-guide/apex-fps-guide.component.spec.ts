import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexFpsGuideComponent } from './apex-fps-guide.component';

describe('ApexFpsGuideComponent', () => {
  let component: ApexFpsGuideComponent;
  let fixture: ComponentFixture<ApexFpsGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApexFpsGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApexFpsGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
