import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgFpsComponent } from './pubg-fps.component';

describe('PubgFpsComponent', () => {
  let component: PubgFpsComponent;
  let fixture: ComponentFixture<PubgFpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubgFpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubgFpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
