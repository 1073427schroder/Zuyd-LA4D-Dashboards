import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentenLandingPageComponent } from './docenten-landing-page.component';

describe('DocentenLandingPageComponent', () => {
  let component: DocentenLandingPageComponent;
  let fixture: ComponentFixture<DocentenLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentenLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentenLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
