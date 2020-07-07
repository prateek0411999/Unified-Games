import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCoachComponent } from './your-coach.component';

describe('YourCoachComponent', () => {
  let component: YourCoachComponent;
  let fixture: ComponentFixture<YourCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
