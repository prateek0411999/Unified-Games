import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsgoFpsComponent } from './csgo-fps.component';

describe('CsgoFpsComponent', () => {
  let component: CsgoFpsComponent;
  let fixture: ComponentFixture<CsgoFpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsgoFpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsgoFpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
