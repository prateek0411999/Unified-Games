import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodFpsComponent } from './cod-fps.component';

describe('CodFpsComponent', () => {
  let component: CodFpsComponent;
  let fixture: ComponentFixture<CodFpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodFpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodFpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
