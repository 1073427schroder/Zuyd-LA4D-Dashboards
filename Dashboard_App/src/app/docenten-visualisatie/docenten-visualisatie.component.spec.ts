import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentenVisualisatieComponent } from './docenten-visualisatie.component';

describe('DocentenVisualisatieComponent', () => {
  let component: DocentenVisualisatieComponent;
  let fixture: ComponentFixture<DocentenVisualisatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentenVisualisatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentenVisualisatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
