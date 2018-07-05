import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVisualisationComponent } from './student-visualisation.component';

describe('StudentVisualisationComponent', () => {
  let component: StudentVisualisationComponent;
  let fixture: ComponentFixture<StudentVisualisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentVisualisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
