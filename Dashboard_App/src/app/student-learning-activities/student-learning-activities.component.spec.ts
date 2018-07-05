import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLearningActivitiesComponent } from './student-learning-activities.component';

describe('StudentLearningActivitiesComponent', () => {
  let component: StudentLearningActivitiesComponent;
  let fixture: ComponentFixture<StudentLearningActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLearningActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLearningActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
